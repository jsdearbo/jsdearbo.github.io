
import { Project, Publication, ResearchArea, PortfolioCase } from './types';

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
    biologicalQuestion: "Do splicing delays in NF-κB–responsive genes reflect a programmed regulatory mechanism, or are they stochastic noise? Answering this required moving from descriptive catalogs of splicing events to a quantitative kinetic framework operating at intron resolution.",
    whatIBuilt: "An end-to-end Python pipeline to quantify intron excision dynamics from kinetic RNA-seq data across the NF-κB–responsive transcriptome.",
    howItWorks: [
      "STAR alignment of kinetic RNA-seq time series",
      "Custom interval engineering for intron-level quantification",
      "Adapted Completed Splicing Index (CoSI) to quantify splicing completion per intron and timepoint",
      "Python-based aggregation, normalization, and visualization across replicates and conditions",
      "Follow-up sequence modeling to prioritize candidate regulatory features"
    ],
    engineeringChallenge: "Extracting accurate intron-level kinetics requires precise interval handling, isoform-aware quantification, and robust normalization across temporal datasets at a resolution standard RNA-seq workflows are not designed to support out of the box.",
    outcome: "Identified a class of 'bottleneck introns' that delay inflammatory gene expression. Minigene assays experimentally validated that weak 5' splice donors drive this delay in a subset of targets, while downstream model interpretation highlighted additional putative non-canonical regulatory motifs. First-author manuscript currently in review at eLife."
  },
  {
    title: "Decoding Immune Cell Type–Specific Splicing with Foundation Models",
    biologicalQuestion: "How do B cells, T cells, and macrophages deploy distinct splicing programs from the same genome? Answering this required building cell-type–resolved training labels at scale, adapting a genomic foundation model for splicing prediction, and interpreting the learned sequence features underlying lineage-specific regulation.",
    whatIBuilt: "A unified data engineering, modeling, and interpretation framework for immune cell type–specific splicing prediction.",
    howItWorks: [
      "Cell-type–specific GTF construction with StringTie using dominant isoform selection by TPM",
      "PSI extraction from rMATS and integration of exon inclusion / intron retention labels into genome-scale training targets",
      "Automated labeling of exons, introns, and intergenic regions with reproducible YAML-driven configuration",
      "Fine-tuning of Borzoi for splicing prediction using single-task and multitask training strategies",
      "Attribution-based interpretation with DeepSHAP / TF-MoDISco to identify cis-regulatory motifs associated with lineage-specific splicing",
      "In silico perturbation analyses to test the functional importance of discovered sequence elements"
    ],
    engineeringChallenge: "This project required solving two tightly linked problems at once: generating high-confidence labels across multiple immune cell types without coordinate drift or label leakage, and adapting a large genomic foundation model to a splicing-specific prediction task without losing interpretability.",
    outcome: "Produced a scalable training dataset and modeling framework for immune cell type–specific splicing, improved predictive performance over simpler baselines, and recovered interpretable candidate regulatory motifs associated with exon inclusion and intron retention across lineages. Manuscript in preparation."
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
