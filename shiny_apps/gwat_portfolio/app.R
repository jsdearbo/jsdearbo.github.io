library(shiny)
library(plotly)
library(dplyr)
library(stringr)

# ── Data loading ──────────────────────────────────────────────────────────────

load_deseq <- function(path) {
  df <- read.csv(path, row.names = 1, stringsAsFactors = FALSE)
  # Ensure gene label: prefer symbol, fall back to row name
  if (!"symbol" %in% colnames(df)) df$symbol <- rownames(df)
  df$symbol[is.na(df$symbol) | df$symbol == ""] <- rownames(df)[is.na(df$symbol) | df$symbol == ""]
  df
}

load_gsea <- function(path) {
  df <- read.csv(path, stringsAsFactors = FALSE)
  # Clean up pathway names: strip HALLMARK_ prefix, title-case
  df$pathway_label <- df$pathway
  df$pathway_label <- gsub("HALLMARK_", "", df$pathway_label)
  df$pathway_label <- gsub("_", " ", df$pathway_label)
  df$pathway_label <- str_to_title(tolower(df$pathway_label))
  # Restore common acronyms
  acronyms <- c("TNF", "KRAS", "UV", "G2M", "E2F", "NFkB", "JAK", "STAT", "MTORC")
  for (ac in acronyms) {
    df$pathway_label <- gsub(paste0("(?i)", ac), ac, df$pathway_label, perl = TRUE)
  }
  df$neglog10p <- -log10(df$pval)
  # Truncate leading edge for tooltip (first 8 genes)
  df$leadingEdge_short <- sapply(df$leadingEdge, function(x) {
    genes <- strsplit(x, ",\\s*")[[1]]
    if (length(genes) > 8) paste0(paste(genes[1:8], collapse = ", "), " ...") else x
  })
  df$leadingEdge_size <- sapply(df$leadingEdge, function(x) length(strsplit(x, ",\\s*")[[1]]))
  df
}

deseq_3wk <- load_deseq("data/res_3wk_gWAT.csv")
deseq_6wk <- load_deseq("data/res_6wk_gWAT.csv")
gsea_3wk  <- load_gsea("data/3wk_gWAT_fgsea_out.csv")
gsea_6wk  <- load_gsea("data/6wk_gWAT_fgsea_out.csv")

# ── Helper: build volcano plotly ──────────────────────────────────────────────

make_volcano <- function(df, title, padj_cut, lfc_cut) {
  df <- df %>% filter(!is.na(log2FoldChange), !is.na(padj))

  df <- df %>% mutate(
    sig = case_when(
      log2FoldChange >  lfc_cut & padj < padj_cut ~ "Up",
      log2FoldChange < -lfc_cut & padj < padj_cut ~ "Down",
      TRUE ~ "NS"
    ),
    color = case_when(sig == "Up" ~ "salmon", sig == "Down" ~ "steelblue", TRUE ~ "#444444"),
    opacity = ifelse(sig == "NS", 0.25, 0.7),
    hover = paste0(
      "<b>", symbol, "</b><br>",
      "LFC: ", round(log2FoldChange, 3), "<br>",
      "padj: ", formatC(padj, format = "e", digits = 2)
    )
  )

  sig_df <- df %>% filter(sig != "NS")

  plot_ly() %>%
    add_trace(
      data = df %>% filter(sig == "NS"),
      x = ~log2FoldChange, y = ~-log10(padj),
      type = "scatter", mode = "markers",
      marker = list(color = "#888888", size = 5, opacity = 0.2),
      text = ~hover, hoverinfo = "text",
      name = "NS", showlegend = TRUE
    ) %>%
    add_trace(
      data = df %>% filter(sig == "Down"),
      x = ~log2FoldChange, y = ~-log10(padj),
      type = "scatter", mode = "markers",
      marker = list(color = "steelblue", size = 6, opacity = 0.7),
      text = ~hover, hoverinfo = "text",
      name = "Down", showlegend = TRUE
    ) %>%
    add_trace(
      data = df %>% filter(sig == "Up"),
      x = ~log2FoldChange, y = ~-log10(padj),
      type = "scatter", mode = "markers",
      marker = list(color = "salmon", size = 6, opacity = 0.7),
      text = ~hover, hoverinfo = "text",
      name = "Up", showlegend = TRUE
    ) %>%
    layout(
      title = list(text = title, font = list(size = 15)),
      xaxis = list(title = "Log<sub>2</sub> Fold Change (G12D / WT)", zeroline = TRUE),
      yaxis = list(title = "-Log<sub>10</sub> Adjusted P-value"),
      shapes = list(
        list(type = "line", x0 = lfc_cut,  x1 = lfc_cut,
             y0 = 0, y1 = 1, yref = "paper",
             line = list(color = "green3", dash = "dot", width = 1.5)),
        list(type = "line", x0 = -lfc_cut, x1 = -lfc_cut,
             y0 = 0, y1 = 1, yref = "paper",
             line = list(color = "green3", dash = "dot", width = 1.5)),
        list(type = "line", x0 = 0, x1 = 1, xref = "paper",
             y0 = -log10(padj_cut), y1 = -log10(padj_cut),
             line = list(color = "royalblue", dash = "dot", width = 1.5))
      ),
      legend = list(orientation = "h", y = -0.15),
      margin = list(t = 50)
    )
}

# ── Helper: build GSEA bubble plotly ─────────────────────────────────────────

make_gsea <- function(df, title, n_top) {
  df <- df %>% arrange(pval) %>% slice_head(n = n_top)
  df <- df %>% arrange(NES)
  df$pathway_label <- factor(df$pathway_label, levels = df$pathway_label)

  df <- df %>% mutate(
    hover = paste0(
      "<b>", pathway_label, "</b><br>",
      "NES: ", round(NES, 3), "<br>",
      "p-value: ", formatC(pval, format = "e", digits = 2), "<br>",
      "padj: ", formatC(padj, format = "e", digits = 2), "<br>",
      "Leading edge (", leadingEdge_size, " genes): ", leadingEdge_short
    )
  )

  plot_ly(
    data = df,
    x = ~NES, y = ~pathway_label,
    type = "scatter", mode = "markers",
    marker = list(
      size = ~sqrt(leadingEdge_size) * 4,
      color = ~neglog10p,
      colorscale = list(c(0, "steelblue"), c(1, "red")),
      showscale = TRUE,
      colorbar = list(title = "-log<sub>10</sub>(p)")
    ),
    text = ~hover, hoverinfo = "text"
  ) %>%
    layout(
      title = list(text = title, font = list(size = 15)),
      xaxis = list(title = "Normalized Enrichment Score (NES)", zeroline = TRUE),
      yaxis = list(title = "", tickfont = list(size = 10)),
      margin = list(l = 250, t = 50),
      shapes = list(
        list(type = "line", x0 = 0, x1 = 0,
             y0 = 0, y1 = 1, yref = "paper",
             line = list(color = "grey50", dash = "dot", width = 1))
      )
    )
}

# ── Methods text ─────────────────────────────────────────────────────────────

methods_text <- HTML("
  <p>Perigonadal white adipose tissue (gWAT) was isolated from tamoxifen-inducible
  lung epithelial cell-specific <em>Kras</em><sup>G12D/+</sup> (G12D) mice and WT
  littermate controls at 3 and 6 weeks post-induction. Total RNA was sequenced on
  an Illumina platform (n&nbsp;=&nbsp;3 per group).</p>

  <p>Reads were aligned to mm10 with <strong>STAR</strong> and quantified with
  <strong>featureCounts</strong>. Differential expression was assessed with
  <strong>DESeq2</strong> (Wald test); genes were annotated via
  <strong>biomaRt</strong> (Ensembl). Significance thresholds are adjustable via
  the sliders.</p>

  <p>Gene-set enrichment was performed with <strong>fgsea</strong> (pre-ranked by
  DESeq2 Wald statistic) against the MSigDB mouse hallmark collection
  (mh.all.v2024.1.Mm.symbols). A custom &ldquo;Lipolysis/Lipogenesis&rdquo; gene
  set was also included. Bubble size reflects leading-edge gene count; color
  encodes &minus;log<sub>10</sub>(p-value).</p>
")

# ── UI ────────────────────────────────────────────────────────────────────────

ui <- fluidPage(
  tags$head(tags$style(HTML("
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #fafafa; }
    .page-header { background: #2c3e50; color: white; padding: 20px 30px; margin-bottom: 20px; border-radius: 0; }
    .page-header h2 { margin: 0 0 6px 0; font-size: 22px; }
    .page-header p  { margin: 0; font-size: 13px; opacity: 0.85; }
    .well { background: white; border: 1px solid #ddd; box-shadow: none; }
    .section-label { font-size: 13px; font-weight: 600; color: #555; text-transform: uppercase;
                     letter-spacing: 0.05em; margin-bottom: 6px; }
    hr { border-color: #e0e0e0; }
    /* DEG summary table */
    #deg_table table { width: 100%; border-collapse: collapse; font-size: 12px; }
    #deg_table th { background: #f0f0f0; color: #555; font-weight: 600; padding: 4px 6px;
                    text-align: center; border-bottom: 1px solid #ccc; }
    #deg_table td { padding: 4px 6px; text-align: center; border-bottom: 1px solid #eee; }
    #deg_table td:first-child { text-align: left; font-weight: 600; color: #2c3e50; }
    #deg_table .up-col   { color: #c0392b; font-weight: 700; }
    #deg_table .down-col { color: #2980b9; font-weight: 700; }
    #deg_table .tot-col  { font-weight: 700; }
    details { margin-top: 12px; }
    details summary {
      font-size: 12px; font-weight: 600; color: #555; text-transform: uppercase;
      letter-spacing: 0.05em; cursor: pointer; list-style: none;
    }
    details summary::-webkit-details-marker { display: none; }
    details summary::before { content: '▶  '; font-size: 10px; }
    details[open] summary::before { content: '▼  '; font-size: 10px; }
    details p { font-size: 12px; color: #444; line-height: 1.6; margin-top: 8px; }
    .dataTables_wrapper { font-size: 12px; }
  "))),

  div(class = "page-header",
    h2(HTML("Transcriptional Profiling of gWAT in <em>Kras</em><sup>G12D/+</sup> Mice")),
    p(HTML("DESeq2 differential expression and hallmark pathway enrichment (fgsea) in perigonadal white
      adipose tissue, G12D vs. WT at 3 and 6 weeks post-induction. Supplemental Figure S9,
      published in <em>Cell Reports</em> (2025)."))
  ),

  fluidRow(
    column(3,
      wellPanel(
        div(class = "section-label", "Volcano plot controls"),
        sliderInput("padj_cut", "padj threshold",
                    min = 0.001, max = 0.2, value = 0.05, step = 0.001),
        sliderInput("lfc_cut",  "|LFC| threshold",
                    min = 0.25, max = 3, value = 1, step = 0.25),
        hr(),
        div(class = "section-label", "DEG summary"),
        htmlOutput("deg_table"),
        hr(),
        div(class = "section-label", "GSEA plot controls"),
        sliderInput("n_top", "Top N pathways to display",
                    min = 5, max = 50, value = 25, step = 5),
        tags$details(
          tags$summary("Methods"),
          methods_text
        )
      )
    ),
    column(9,
      tabsetPanel(
        tabPanel("3-week gWAT",
          fluidRow(
            column(12, h4("Volcano Plot — 3 Week", style = "color:#2c3e50; margin-top:15px;")),
            column(12, plotlyOutput("vol_3wk", height = "420px"))
          ),
          hr(),
          fluidRow(
            column(12, h4("Pathway Enrichment — 3 Week", style = "color:#2c3e50;")),
            column(12, plotlyOutput("gsea_3wk", height = "520px"))
          )
        ),
        tabPanel("6-week gWAT",
          fluidRow(
            column(12, h4("Volcano Plot — 6 Week", style = "color:#2c3e50; margin-top:15px;")),
            column(12, plotlyOutput("vol_6wk", height = "420px"))
          ),
          hr(),
          fluidRow(
            column(12, h4("Pathway Enrichment — 6 Week", style = "color:#2c3e50;")),
            column(12, plotlyOutput("gsea_6wk", height = "520px"))
          )
        )
      )
    )
  )
)

# ── Server ────────────────────────────────────────────────────────────────────

server <- function(input, output, session) {

  deg_counts <- reactive({
    count_degs <- function(df, padj_cut, lfc_cut) {
      df <- df %>% filter(!is.na(log2FoldChange), !is.na(padj))
      up   <- sum(df$log2FoldChange >  lfc_cut & df$padj < padj_cut)
      down <- sum(df$log2FoldChange < -lfc_cut & df$padj < padj_cut)
      c(up = up, down = down, total = up + down)
    }
    r3 <- count_degs(deseq_3wk, input$padj_cut, input$lfc_cut)
    r6 <- count_degs(deseq_6wk, input$padj_cut, input$lfc_cut)
    data.frame(
      Timepoint = c("3-week", "6-week"),
      `↑ Up`    = c(r3["up"],    r6["up"]),
      `↓ Down`  = c(r3["down"],  r6["down"]),
      Total     = c(r3["total"], r6["total"]),
      check.names = FALSE
    )
  })

  output$deg_table <- renderUI({
    df <- deg_counts()
    rows <- lapply(seq_len(nrow(df)), function(i) {
      tags$tr(
        tags$td(df$Timepoint[i]),
        tags$td(class = "up-col",   df[i, "↑ Up"]),
        tags$td(class = "down-col", df[i, "↓ Down"]),
        tags$td(class = "tot-col",  df$Total[i])
      )
    })
    tags$table(
      tags$thead(tags$tr(
        tags$th(""), tags$th("↑ Up"), tags$th("↓ Down"), tags$th("Total")
      )),
      tags$tbody(rows)
    )
  })

  output$vol_3wk <- renderPlotly({
    make_volcano(deseq_3wk, "3-Week post-induction gWAT: G12D vs. WT", input$padj_cut, input$lfc_cut)
  })

  output$vol_6wk <- renderPlotly({
    make_volcano(deseq_6wk, "6-Week post-induction gWAT: G12D vs. WT", input$padj_cut, input$lfc_cut)
  })

  output$gsea_3wk <- renderPlotly({
    make_gsea(gsea_3wk, "Top Enriched Pathways — 3 Week gWAT (G12D vs. WT)", input$n_top)
  })

  output$gsea_6wk <- renderPlotly({
    make_gsea(gsea_6wk, "Top Enriched Pathways — 6 Week gWAT (G12D vs. WT)", input$n_top)
  })
}

shinyApp(ui, server)
