---
title: "Portfolio"
layout: single
permalink: /portfolio/
author_profile: true
---

Selected case studies linking the biological question to the computational system built to answer it. Each project is driven by a real scientific problem and designed for reproducibility and scale.

---

## Case Study 1: Programmed Splicing Kinetics in the Inflammatory Response

**The Biological Question**
Do splicing delays in NF-κB–responsive genes reflect a programmed regulatory mechanism, or are they stochastic noise? Answering this required moving from descriptive catalogs of splicing events to a quantitative, kinetic framework operating at intron resolution.

> *[Graphical abstract / workflow diagram — coming soon]*

**What I Built**
End-to-end Python pipeline to quantify intron excision dynamics from kinetic RNA-seq data across the NF-κB–responsive transcriptome.

**How It Works**
- STAR alignment of kinetic RNA-seq time series
- Custom intron/exon annotation generation (StringTie + rMATS)
- Genome interval engineering for intron-level metrics
- Novel **Completed Splicing Index (CoSI)** to quantify splicing completion per intron per timepoint
- Python-based aggregation and visualization across replicates and conditions

**The Engineering Challenge**
Intron-level kinetics require precise interval handling, isoform disambiguation, and robust normalization across timepoints — standard RNA-seq tools are not designed for this resolution.

**Outcome**
Identified a class of reproducibly delayed "bottleneck introns" contributing to temporal regulation of inflammation. First-author manuscript currently **in review at *eLife***.

> *[Annotated notebook — coming soon]*

---

## Case Study 2: Decoding Immune Cell Type–Specific Splicing Programs

**The Biological Question**
How do B cells, T cells, and macrophages deploy distinct splicing programs from the same genome? Answering this required building cell-type–resolved labels at scale for supervised deep learning.

> *[Graphical abstract / workflow diagram — coming soon]*

**What I Built**
A labeling pipeline generating exon inclusion and intron retention labels across immune cell types, paired with a deep learning framework for cell-type–aware splicing prediction.

**How It Works**
- Cell-type–specific GTF construction (StringTie) using dominant isoform selection by TPM
- PSI extraction (rMATS) and intron retention quantification per cell type
- Automated labeling of exons, introns, and intergenic regions
- YAML-driven configuration for reproducible re-execution
- Deep learning–based modeling of exon inclusion and intron retention
- Discovery of **cis-regulatory motifs** enriched in lineage-specific splicing events

**The Engineering Challenge**
Reconciling alternative isoforms, splicing events, and genomic coordinates across multiple cell types without label leakage or coordinate drift.

**Outcome**
Produced clean, high-confidence training labels across immune lineages. Manuscript in preparation (2026).

> *[Annotated notebook — coming soon]*

---

## Case Study 3: Foundation Model Fine-Tuning for Splicing Prediction

**The Biological Question**
Can large genomic foundation models be adapted to predict cell-type–specific splicing behavior, and can their learned representations be interrogated for mechanistic regulatory insight?

> *[Graphical abstract / workflow diagram — coming soon]*

**What I Built**
A fine-tuning and interpretation framework adapting Borzoi for splicing prediction and regulatory motif discovery.

**How It Works**
- Custom PyTorch Lightning wrappers around Borzoi
- LoRA / PEFT fine-tuning for task-specific adaptation
- Mixed-precision training on HPC GPUs with robust checkpoint loading
- Captum / DeepSHAP attribution integration
- TF-MoDISco motif extraction from attribution maps
- In silico mutagenesis to test the causal roles of discovered regulatory elements

**The Engineering Challenge**
Foundation models are large, memory-intensive, and not designed for splicing-specific tasks. Adapting them requires careful sequence slicing, multi-GPU coordination, and attribution pipelines that scale to genome-wide prediction.

**Outcome**
Improved task performance over baseline and extracted interpretable regulatory motifs controlling exon inclusion and intron retention across immune cell types.

> *[Annotated notebook — coming soon]*

---

## Infrastructure: Splicing Data Systems & HPC Orchestration

**What it does**
Provides reproducible, scalable execution of all splicing analysis and modeling workflows across projects.

**How it's built**
- SLURM job orchestration with multi-GPU and CPU fallback strategies
- Conda environment isolation per project
- YAML/JSON-driven pipeline configuration
- BigWig-based data handling (PyBigWig)

**Why it matters**
Genomics workflows are I/O-heavy, brittle, and hard to reproduce across environments. Treating infrastructure as a first-class concern keeps results auditable and shareable across collaborators.

---

*Graphical abstracts and annotated notebooks are being added. [Reach out](mailto:jakedearborn@gmail.com) if you'd like a walkthrough of any system in the meantime.*
