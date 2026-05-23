
import { Project, Publication, ResearchArea, PortfolioCase, MLEvidenceSection } from './types';

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    title: "Programmed Delayed Splicing in Inflammatory Gene Regulation",
    description: "This first-author project defines and characterizes intron-specific splicing delays across the NF-κB–responsive transcriptome, demonstrating that delayed splicing is programmed and intron-specific rather than stochastic, and contributes to temporal regulation of inflammatory gene expression.",
    points: [
      "Quantification of splicing completion using Completed Splicing Index (CoSI)",
      "Kinetic RNA-seq to measure intron excision dynamics following inflammatory stimulation",
      "Identification of bottleneck introns with reproducible, delayed splicing behavior",
      "Integration with regulatory sequence features and splice site strength"
    ]
  },
  {
    title: "Immune Cell Type–Specific Alternative Splicing Programs",
    description: "Decoding how B cells, T cells, and macrophages deploy distinct alternative splicing programs despite sharing the same genome. The goal is to define regulatory programs — not just individual events — that distinguish immune cell identities.",
    points: [
      "Construction of cell-type–specific transcript annotations from RNA-seq using StringTie",
      "PSI and intron retention quantification across immune lineages",
      "Deep learning–based modeling of exon inclusion and intron retention",
      "Discovery of cis-regulatory motifs enriched in lineage-specific splicing events"
    ]
  },
  {
    title: "Foundation Model Fine-Tuning for Splicing Prediction",
    description: "Actively adapting large genomic foundation models (e.g., Borzoi) for splicing-related tasks, combining LoRA/PEFT fine-tuning, mixed-precision training, and large-scale attribution analysis to identify regulatory features learned by deep models.",
    points: [
      "Fine-tuning models for PSI and intron retention prediction",
      "Modeling cell-type–specific splicing behavior across immune lineages",
      "Performing in silico mutagenesis to test regulatory elements",
      "Extracting interpretable regulatory motifs using attribution methods"
    ]
  },
  {
    title: "Regulatory Motif Discovery & Interpretation",
    description: "Across projects, applying attribution methods and motif discovery tools to identify candidate RNA-binding protein motifs and novel intronic regulatory elements controlling splicing kinetics and exon choice.",
    points: [
      "DeepLIFT / DeepSHAP / Captum for per-nucleotide feature attribution",
      "TF-MoDISco for motif discovery from attribution maps",
      "SEA and FIMO (MEME Suite) for motif scanning and validation",
      "Integration with RBP expression data for biological interpretation"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Intron Splicing Kinetics Pipeline",
    description: "End-to-end pipeline to quantify intron excision dynamics and identify reproducibly delayed introns across inflammatory gene programs.",
    howItsBuilt: ["STAR alignment", "StringTie + rMATS integration", "Custom interval engineering", "CoSI implementation", "Python aggregation & visualization"],
    whyItsHard: "Intron-level kinetics require precise interval handling, isoform disambiguation, and robust normalization across timepoints.",
    outcome: "Identified a class of 'bottleneck introns' with reproducible delayed splicing contributing to temporal regulation of inflammation.",
    tags: ["RNA-seq", "Python", "Bioinformatics"]
  },
  {
    title: "Immune Cell Type–Specific Splicing Labeling Pipeline",
    description: "Generates exon inclusion and intron retention labels across B cells, T cells, and macrophages for deep learning model training.",
    howItsBuilt: ["Cell-type–specific GTF construction (StringTie)", "Dominant isoform selection by TPM", "PSI extraction via rMATS", "Automated exon/intron/intergenic labeling", "YAML-driven configuration"],
    whyItsHard: "Requires reconciling alternative isoforms, splicing events, and genomic coordinates across cell types without coordinate drift or label leakage.",
    outcome: "Produced clean, high-confidence training labels for sequence-based splicing models across immune lineages.",
    tags: ["Genomics", "Python", "Data Engineering"]
  },
  {
    title: "Borzoi Fine-Tuning & Interpretation Framework",
    description: "Adapts large genomic foundation models for splicing prediction, regulatory discovery, and model interpretation.",
    howItsBuilt: ["PyTorch Lightning wrappers around Borzoi", "LoRA / PEFT for task adaptation", "Mixed-precision training on HPC GPUs", "Robust checkpoint loading and slicing", "Captum / DeepSHAP attribution integration"],
    whyItsHard: "Foundation models are large, memory-intensive, and not designed for splicing-specific tasks out of the box.",
    outcome: "Improved task performance and extracted interpretable regulatory motifs controlling exon inclusion and intron retention.",
    tags: ["Deep Learning", "PyTorch", "Genomics"]
  },
  {
    title: "Regulatory Motif Discovery & TF-MoDISco Pipeline",
    description: "Identifies recurrent cis-regulatory elements from model attributions and connects them back to testable biological hypotheses.",
    howItsBuilt: ["DeepLIFT / DeepSHAP attribution generation", "TF-MoDISco clustering and motif extraction", "MEME / FIMO / tangermeme motif scanning", "Integration with RBP expression data"],
    whyItsHard: "Attribution signals are noisy and high-dimensional; extracting stable motifs requires careful preprocessing and filtering.",
    outcome: "Discovered candidate intronic and exonic motifs associated with cell-type–specific splicing regulation.",
    tags: ["Interpretability", "Python", "Motif Analysis"]
  },
  {
    title: "In Silico Mutagenesis & Motif Ablation System",
    description: "Tests the causal roles of discovered regulatory motifs by performing controlled sequence perturbations and comparing model predictions.",
    howItsBuilt: ["Motif scrambling and deletion algorithms", "Batch prediction on native vs. ablated sequences", "Comparative analysis across cell types and conditions"],
    whyItsHard: "Requires precise sequence manipulation and large-scale batch prediction without introducing artifacts.",
    outcome: "Functionally prioritized regulatory elements for downstream experimental validation.",
    tags: ["Computational Biology", "Interpretability", "Python"]
  },
  {
    title: "Splicing Data Infrastructure & HPC Orchestration",
    description: "Provides reproducible, scalable execution of all splicing and modeling workflows across large datasets and multiple projects.",
    howItsBuilt: ["SLURM job orchestration", "Multi-GPU and CPU fallback strategies", "Conda environment isolation per project", "YAML/JSON-driven pipeline configuration", "BigWig-based data handling (PyBigWig)"],
    whyItsHard: "Genomics workflows are I/O-heavy, brittle, and hard to reproduce across compute environments.",
    outcome: "Stable, repeatable execution across large datasets; infrastructure treated as a first-class part of scientific rigor.",
    tags: ["HPC", "SLURM", "DevOps"]
  }
];

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
  title: "Programmed Delayed Splicing in Inflammatory Gene Expression",
  problem: "Inflammatory gene expression is often framed around rapid transcriptional activation, but productive mRNA output also depends on transcript processing. I asked whether delayed splicing in NF-κB–responsive genes reflects a reproducible, intron-specific regulatory feature, and whether regulatory sequence models could help nominate features associated with slow intron removal.",
  data: "Kinetic RNA-seq time series from TNF-stimulated macrophages across multiple timepoints; intron-resolution splice-completion measurements across the NF-κB–responsive inflammatory transcriptome; genomic sequence context surrounding fast- and slow-splicing introns.",
  whatIBuilt: "A computational regulatory genomics framework linking intron-resolution splicing kinetics to sequence-encoded features. I reanalyzed kinetic RNA-seq data, quantified splice completion across inflammatory introns, fine-tuned a genomic sequence model on macrophage time-course signal, and developed an interpretation workflow to prioritize candidate sequence features associated with delayed splicing.",
  methodsStack: [
    "STAR alignment and intron-level quantification of kinetic RNA-seq time-series data",
    "Adapted Completed Splicing Index (CoSI) to measure splice completion per intron and timepoint",
    "Python-based aggregation, normalization, and visualization across replicates and conditions",
    "Actinomycin D shutoff analysis to estimate intron excision kinetics",
    "Canonical sequence-feature analysis including splice-site strength, intron length, and GC content",
    "Fine-tuning of Borzoi on macrophage inflammatory RNA-seq signal",
    "Attribution-based model interpretation to identify high-importance sequence regions near slow-splicing introns",
    "Motif enrichment analysis using FIMO / SEA to compare slow-splicing introns against background introns"
  ],
  result: "Identified a subset of inflammatory introns that behave as reproducible processing bottlenecks, delaying productive mRNA maturation beyond transcriptional activation alone. Weak 5′ splice donors contributed to delayed excision in selected introns, while model-guided interpretation nominated additional candidate sequence features associated with the slow-splicing class. First-author manuscript available as a reviewed preprint at eLife (elifesciences.org/reviewed-preprints/109726).",
  whyItMatters: "This work highlights RNA processing kinetics as an important layer of immune gene regulation. By combining intron-resolution kinetics with regulatory sequence modeling, the project connects inflammatory transcript maturation to candidate cis-regulatory architecture beyond transcriptional activation alone.",
  signalsForML: "Genomic foundation model fine-tuning, attribution-based interpretability, motif enrichment analysis, sequence-feature integration, custom metric design, quantitative kinetic modeling, reproducible regulatory genomics pipelines.",
  signalsForBio: "Intron-resolution splicing kinetics, NF-κB–responsive inflammatory gene regulation, chromatin-associated RNA analysis, splice-site mechanism, minigene validation, computational nomination of candidate cis-regulatory features.",
  figurePlaceholderLabel: "Figure: Model-guided interpretation nominates candidate sequence features near slow-splicing introns",
  figureImagePath: "/assets/images/delay_splice/fig_6_illustrator.png",
},
  {
    title: "Modeling Immune Cell Type–Specific Splicing with Genomic Foundation Models",
    problem: "B cells, T cells, and macrophages share the same genome but exhibit distinct transcript isoform landscapes. I wanted to test whether genomic sequence models could learn features associated with immune cell type–specific splicing outcomes, and whether model representations could provide interpretable hypotheses about sequence-encoded regulation.",
    data: "Bulk RNA-seq from three immune lineages: B cells, T cells, and macrophages.Genome-scale PSI and intron-retention labels generated from rMATS-derived splicing events and transcript-aware annotations.Pretrained Borzoi model weights using long genomic sequence context.",
    whatIBuilt: "A unified data engineering, modeling, and interpretation framework for immune cell type–specific splicing prediction.",
    methodsStack: [
      "Cell-type–specific GTF construction with StringTie using dominant isoform selection by TPM",
      "PSI and intron-retention label generation from rMATS event tables",
      "Integration of exon inclusion, intron retention, constitutive exon, intron, and intergenic labels into genome-scale training targets",
      "Fine-tuning of Borzoi for single-task and multitask splicing prediction across immune lineages",
      "Representation analysis of pretrained and fine-tuned embeddings using UMAP and KNN probing"
    ],
    result: "Built a scalable training-label and modeling framework for immune cell type–specific splicing prediction. Fine-tuning improved prediction relative to simpler sequence-feature baselines and shifted output-proximal model representations toward PSI-relevant structure. Interpretation analyses nominated candidate cis-regulatory motifs and sequence contexts associated with differential splicing, providing hypotheses for future experimental validation. Manuscript in preparation.",
    whyItMatters: "Cell-type-specific splicing is an important layer of immune gene regulation, but it is difficult to model directly from sequence. This project establishes a framework for connecting transcript-aware splicing labels, genomic foundation model fine-tuning, and interpretable sequence analysis to study how immune splicing variation may be encoded in genomic context.",
    signalsForML: "Foundation model adaptation, long-sequence genomic modeling, multitask learning, representation analysis, attribution-based interpretability, baseline benchmarking, HPC / multi-GPU training, reproducible ML pipelines.",
    signalsForBio: "Cell-type-specific transcript annotation, PSI and intron-retention quantification, immune-lineage splicing analysis, transcript-aware label construction, candidate motif discovery, integration of sequence features with RNA biology.",
    figurePlaceholderLabel: "Figure: Transcript-aware construction of immune cell type–specific splicing labels",
    figureImagePath: "/assets/images/splice_model/data_labelling.png",
  },
  {
    title: "Adipose Tissue Transcriptomics in Lung Cancer Cachexia",
    problem: "Does Kras\u1d33\u00b9\u00b2\u1d30/+ lung tumor induction cause transcriptional reprogramming in perigonadal white adipose tissue, and what pathways drive early adipose wasting?",
    data: "Bulk RNA-seq from gWAT of Kras\u1d33\u00b9\u00b2\u1d30/+ and WT littermate mice at 3 and 6 weeks post-induction. Snoke DB, van der Velden JL, Dearborn J, et al. Cell Reports 2025.",
    whatIBuilt: "DESeq2 differential expression pipeline, fgsea hallmark pathway analysis, and an interactive R/Shiny volcano and GSEA explorer published as Supplemental Figure S9.",
    methodsStack: [
      "DESeq2 differential expression analysis",
      "fgsea hallmark pathway enrichment (MSigDB)",
      "R/Shiny interactive app with adjustable padj and |LFC| thresholds",
      "Volcano plots with hover tooltips and gene name annotation",
      "Reactive DEG count summary table",
      "Shinylive/WebAssembly browser deployment"
    ],
    result: "Identified early lipid metabolism and inflammatory pathway changes in gWAT preceding overt cachexia. Published as Supplemental Figure S9, Cell Reports (2025). DOI: 10.1016/j.celrep.2025.116278.",
    whyItMatters: "Cachexia affects ~50% of cancer patients and is an independent predictor of mortality; characterizing adipose transcriptional programs may reveal intervention points.",
    signalsForML: "Pathway-level summarization of high-dimensional transcriptomic data, statistical pipeline design, DESeq2 normalization and modeling.",
    signalsForBio: "Bulk RNA-seq end-to-end, differential expression, GSEA, adipose and cancer biology, published collaborative analysis.",
    figurePlaceholderLabel: "Volcano — 6-week gWAT KRAS vs. WT",
    figureImagePath: "/assets/images/tm01/volcano_6wk_gwat.png",
    figureRightPaths: [
      "/assets/images/tm01/gsea_6wk_gwat.png",
    ],
    figureRightLabels: [
      "GSEA — top 25 Hallmark pathways, 6-week gWAT KRAS vs. WT",
    ],
    notebookPath: "/notebooks/tm01.html",
  },
  {
    title: "Single-Cell Transcriptomics of the Intramuscular mRNA/LNP Immune Response",
    problem: "mRNA/LNP vaccines drive adjuvancy through ionizable lipids, but which immune cell types in injected muscle are activated and what gene programs do they execute? Answering this at single-cell resolution required building a complete scRNA-seq pipeline from raw count matrices.",
    data: "10x Chromium scRNA-seq of CD45+ immune cells from SM-102 eLNP- and PBS-injected mouse muscle (n=4/group, pooled into 2 samples; 5,511 LNP-treated + 1,189 PBS barcodes after QC). Hashtag demultiplexing via TotalSeq-A.",
    whatIBuilt: "Full Seurat pipeline: multi-sample integration, SCTransform normalization with MT% regression, UMAP clustering, automated cell type annotation (scType) cross-validated against manual marker-based annotation, and differential expression across 9 immune populations.",
    methodsStack: [
      "R / Seurat — multi-sample integration, SCTransform, FindNeighbors, FindClusters",
      "UMAP dimensionality reduction (30 PCs)",
      "scType automated cell type scoring (immune system reference)",
      "Manual annotation using canonical marker panels (Cx3cr1/Ccr2, S100a8/S100a9, Flt3/Xcr1)",
      "FindAllMarkers — per-cluster differential expression across 9 cell types",
      "Violin and split plots of ISGs, inflammasome, and cytokine genes across PBS vs. LNP conditions"
    ],
    result: "Identified 9 immune populations in injected muscle. Neutrophils and monocytes from SM-102-injected mice upregulate ISGs (Irf7, Isg15), inflammasome components (Nlrp3, Il1b), and cytokines (Tnf, Cxcl2) — published as Figure 3, Dowell et al., ACS Nano 2024 (doi:10.1021/acsnano.4c08490).",
    whyItMatters: "Single-cell resolution revealed that myeloid infiltrates — not muscle tissue in bulk — are the source of the LNP-driven inflammatory program. This reframes how vaccine lipid adjuvancy works and provides a design principle distinguishing vaccine-grade (Class A) from therapeutic-grade (Class B) ionizable lipids.",
    signalsForML: "Unsupervised clustering of high-dimensional count data, evaluation of automated cell type classification (scType) against manual ground truth, per-cluster differential ranking from FindAllMarkers — analogous to unsupervised representation learning with post-hoc class label assignment and feature attribution.",
    signalsForBio: "Multi-sample hashtag demultiplexing, QC filtering (nFeature > 500, MT% < 10%), SCTransform normalization with confounder regression, marker-based cell type validation across monocytes, neutrophils, DCs, NK cells, B cells, T cells, and pDCs.",
    figurePlaceholderLabel: "UMAP — CD45+ immune infiltrates (9 populations, manual annotation)",
    figureImagePath: "/assets/images/lnp/umap_annotated.png",
    figureRightPaths: [
      "/assets/images/lnp/vln_nlrp3.png",
      "/assets/images/lnp/vln_isg15.png",
    ],
    figureRightLabels: [
      "Nlrp3 — inflammasome sensor (PBS vs. LNP, per cell type)",
      "Isg15 — interferon-stimulated gene (PBS vs. LNP, per cell type)",
    ],
    notebookPath: "/notebooks/lnp_10x.html",
  }
];

export const ML_EVIDENCE_SECTIONS: MLEvidenceSection[] = [
  {
    title: "Model Architecture & Foundation Model Fine-Tuning",
    accentColor: "cyan",
    items: [
      "Long-context regulatory genomics models combining convolutional, transformer, and U-Net-style sequence representations",
      "Task-specific fine-tuning of Borzoi for immune splicing and inflammatory gene-expression prediction tasks",
      "LoRA / PEFT adaptation strategies for immune cell type–specific PSI label modeling",
      "Single-task and multitask prediction across B cell, T cell, and macrophage splicing contexts",
      "Baseline benchmarking against simpler sequence-feature models",
      "Representation analysis using UMAP and KNN probes to assess whether fine-tuning makes PSI-relevant information more accessible in learned embeddings"
    ],
    figure: {
      label: "Borzoi fine-tuning: loss curves and prediction accuracy on splicing targets",
      caption: "A: Training and validation MSE loss over 20 epochs. B–C: Predicted vs. measured splice completion for the pretrained (Pearson r=0.51) and fine-tuned (Pearson r=0.61, Spearman ρ=0.65) models, showing improved accuracy after task-specific adaptation.",
      imagePath: "/assets/images/delay_splice/fig_5.png"
    }
  },
  {
    title: "Training Infrastructure & HPC Workflows",
    accentColor: "green",
    items: [
      "Config-driven experiments using YAML/JSON parameterization and reproducible run metadata",
      "PyTorch Lightning training workflows with clean training loops, checkpointing, and multi-GPU support",
      "Mixed-precision training with fp16/bf16 for memory-efficient long-sequence modeling",
      "Structured checkpointing and resume-from-checkpoint workflows for long-running experiments",
      "SLURM orchestration for GPU allocation, batch jobs, and restartable training",
      "WandB and Optuna for experiment tracking, diagnostics, and hyperparameter search"
    ]
  },
  {
    title: "Attribution & Interpretability",
    accentColor: "teal",
    items: [
      "Per-nucleotide attribution using DeepLIFT / DeepSHAP-style methods through Captum",
      "TF-MoDISco motif discovery from attribution maps to summarize recurrent high-importance sequence patterns",
      "SEA / FIMO motif scanning and enrichment analysis using MEME Suite",
      "In silico perturbation through motif scrambling/deletion with batch prediction on modified sequences",
      "Embedding-space visualization with UMAP for exploratory representation analysis",
      "KNN probing of model embeddings to quantify recoverability of splice-site and PSI-associated information"
    ],
    // figure: {
    //   label: "Attribution heatmap — per-nucleotide DeepSHAP scores",
    //   caption:
    //     "Nucleotide-resolution attribution scores highlighting sequence regions prioritized by fine-tuned regulatory genomics models."
    // }
  },
  {
    title: "Reproducibility Practices",
    accentColor: "orange",
    items: [
      "Workflows parameterized via config files rather than hardcoded paths",
      "Conda environments pinned and versioned per project",
      "Outputs versioned alongside input metadata for auditability",
      "Pipeline logic separated from execution logic for portability across HPC environments",
      "Intermediate files and model outputs organized for downstream interpretation, plotting, and manuscript-scale reproducibility"
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Programmed delayed splicing regulates inflammatory gene expression.",
    authors: "Dearborn, J., Frankiw, L., Majumdar, D.",
    journal: "eLife",
    year: "2025",
    status: "Reviewed Preprint",
    doi: "10.1101/443796",
    link: "https://elifesciences.org/reviewed-preprints/109726"
  },
  {
    title: "Decoding immune cell type–specific alternative splicing regulatory programs.",
    authors: "Dearborn, J., et al.",
    journal: "In Preparation",
    year: "2026",
    status: "In Preparation"
  },
  {
    title: "Early Adipose Tissue Wasting in a Model of Lung Cancer Cachexia.",
    authors: "Snoke DB, van der Velden JL, et al.",
    journal: "Cell Reports",
    year: "2025",
    status: "Published",
    doi: "10.1016/j.celrep.2025.116278"
  },
  {
    title: "Distinct Inflammatory Programs Underlie the Intramuscular Lipid Nanoparticle Response.",
    authors: "Dowell W, Dearborn J, Languon S, et al.",
    journal: "ACS Nano",
    year: "2024",
    status: "Published",
    doi: "10.1021/acsnano.4c08490"
  },
  {
    title: "Comparative Immunogenicity of Decellularized Pig Lungs.",
    authors: "Dearborn J, et al.",
    journal: "Biomaterials",
    year: "2021",
    status: "Published"
  }
];

export const PRESENTATIONS: string[] = [
  "Leveraging Foundational Genomics Models to Identify Putative mRNA Splice Regulators",
  "Decoding CD45 Alternative Splicing Using Deep Learning",
  "Transformer Models in Genomics (Guest Lecture)",
  "Selective RNA Depletion to Enhance Single-Cell Transcriptomics"
];

export const COMP_BIO_PROJECTS = PROJECTS.filter((_, i) => i <= 1);
export const ML_PROJECTS = PROJECTS.filter((_, i) => i >= 2);
