
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
    title: "Programmed Splicing Kinetics in the Inflammatory Response",
    problem: "Do splicing delays in NF-κB–responsive genes reflect a programmed regulatory mechanism, or are they stochastic noise? Answering this required moving from descriptive catalogs of splicing events to a quantitative kinetic framework operating at intron resolution.",
    data: "Kinetic RNA-seq time series from LPS-stimulated macrophages across 7 timepoints; ~12,000 annotated introns across the NF-κB–responsive transcriptome.",
    whatIBuilt: "An end-to-end Python pipeline to quantify intron excision dynamics from kinetic RNA-seq data across the NF-κB–responsive transcriptome.",
    methodsStack: [
      "STAR alignment of kinetic RNA-seq time series",
      "Custom interval engineering for intron-level quantification",
      "Adapted Completed Splicing Index (CoSI) to quantify splicing completion per intron and timepoint",
      "Python-based aggregation, normalization, and visualization across replicates and conditions",
      "Follow-up sequence modeling to prioritize candidate regulatory features"
    ],
    result: "Identified a class of 'bottleneck introns' that delay inflammatory gene expression. Minigene assays experimentally validated that weak 5' splice donors drive this delay. First-author manuscript in review at eLife.",
    whyItMatters: "RNA processing rate is an underexplored axis of gene regulation; these delays shape the timing of the inflammatory response and may represent a target for therapeutic modulation.",
    signalsForML: "Custom metric design (CoSI), sequence feature integration, quantitative kinetic modeling, foundation for downstream deep learning target generation.",
    signalsForBio: "Kinetic splicing quantification at intron resolution, NF-κB transcriptome biology, integration of computational findings with minigene experimental validation.",
    figurePlaceholderLabel: "Figure: CoSI kinetic profiles — bottleneck vs. non-bottleneck introns"
  },
  {
    title: "Decoding Immune Cell Type–Specific Splicing with Foundation Models",
    problem: "How do B cells, T cells, and macrophages deploy distinct splicing programs from the same genome, and can a sequence-to-function model learn those differences? Answering this required building cell-type–resolved training labels at scale and adapting a genomic foundation model for splicing prediction.",
    data: "Bulk RNA-seq from 3 immune lineages; ~50,000 PSI and intron retention labels generated at genome scale; Borzoi model weights (pre-trained on 524kb sequence contexts).",
    whatIBuilt: "A unified data engineering, modeling, and interpretation framework for immune cell type–specific splicing prediction.",
    methodsStack: [
      "Cell-type–specific GTF construction with StringTie using dominant isoform selection by TPM",
      "PSI extraction from rMATS and integration of exon inclusion / intron retention labels into genome-scale training targets",
      "Automated labeling of exons, introns, and intergenic regions with reproducible YAML-driven configuration",
      "Fine-tuning of Borzoi for splicing prediction using single-task and multitask training strategies",
      "Attribution-based interpretation with DeepSHAP / TF-MoDISco to identify cis-regulatory motifs",
      "In silico perturbation analyses to test the functional importance of discovered sequence elements"
    ],
    result: "Produced a scalable training dataset and modeling framework for immune cell type–specific splicing. Improved predictive performance over simpler baselines and recovered interpretable candidate regulatory motifs. Manuscript in preparation.",
    whyItMatters: "Sequence-to-function models that predict cell-type–specific splicing could accelerate discovery of therapeutic targets in immune dysregulation and splicing-linked disease.",
    signalsForML: "Foundation model fine-tuning (LoRA/PEFT), multi-task learning across cell types, attribution-based interpretability, HPC multi-GPU training, reproducible ML pipelines.",
    signalsForBio: "Cell-type–specific transcript annotation, PSI quantification across immune lineages, biologically grounded motif discovery, integration with RBP expression data.",
    figurePlaceholderLabel: "Figure: TF-MoDISco motif clusters — lineage-specific splicing regulators"
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
    signalsForBio: "Multi-sample hashtag demultiplexing, QC filtering (nFeature > 500, MT% < 10%), SCTransform normalization with confounder regression, marker-based cell type validation across monocytes, neutrophils, DCs, NK cells, B cells, T cells, pDCs, and RBCs.",
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
    accentColor: 'blue',
    items: [
      "Transformer and CNN-hybrid architectures for long-range sequence context",
      "Task-specific fine-tuning of foundation models (Borzoi) via LoRA/PEFT",
      "Single-task and multitask prediction across B cell, T cell, and macrophage contexts",
      "Evaluation through attribution, perturbation, and embedding-space analyses"
    ],
    figure: {
      label: "Fine-tuning loss curves — Borzoi on splicing targets",
      caption: "Training and validation loss for PSI and intron retention prediction tasks across immune lineages."
    }
  },
  {
    title: "Training Infrastructure & HPC Workflows",
    accentColor: 'green',
    items: [
      "Config-driven experiments — YAML/JSON parameterization with full run logging",
      "PyTorch Lightning — clean training loops and multi-GPU support",
      "Mixed-precision training — fp16/bf16 for memory efficiency on large models",
      "Structured checkpointing — resume-from-checkpoint workflows for long runs",
      "SLURM orchestration — job submission, GPU allocation, restartable training",
      "WandB + Optuna — experiment tracking and hyperparameter search"
    ]
  },
  {
    title: "Attribution & Interpretability",
    accentColor: 'purple',
    items: [
      "DeepLIFT / DeepSHAP via Captum for per-nucleotide attribution",
      "TF-MoDISco motif discovery from attribution maps",
      "SEA / FIMO (MEME Suite) for motif scanning and validation",
      "In silico mutagenesis — motif scrambling/deletion with batch prediction on perturbed sequences",
      "Embedding-space visualization with UMAP for exploratory analysis"
    ],
    figure: {
      label: "Attribution heatmap — per-nucleotide DeepSHAP scores",
      caption: "Nucleotide-resolution attribution scores highlighting splice site and intronic regulatory elements."
    }
  },
  {
    title: "Reproducibility Practices",
    accentColor: 'orange',
    items: [
      "Workflows parameterized via config files rather than hardcoded paths",
      "Conda environments pinned and versioned per project",
      "Outputs versioned alongside input metadata for auditability",
      "Pipeline logic separated from execution logic for portability across HPC environments"
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Programmed delayed splicing regulates inflammatory gene expression.",
    authors: "Dearborn, J., Frankiw, L., Majumdar, D.",
    journal: "eLife",
    year: "2025",
    status: "In Review",
    doi: "10.1101/443796"
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
