---
title: "Portfolio"
layout: single
permalink: /portfolio/
author_profile: true
---

Selected case studies linking biological questions to the computational systems built to answer them. Each project is grounded in a concrete scientific problem and emphasizes reproducibility, interpretability, and analytical rigor.

---

## Case Study 1: Programmed Splicing Kinetics in the Inflammatory Response

**The Biological Question**  
Do splicing delays in NF-κB–responsive genes reflect a programmed regulatory mechanism, or are they stochastic noise? Answering this required moving from descriptive catalogs of splicing events to a quantitative kinetic framework operating at intron resolution.

> *[Graphical abstract / workflow diagram — coming soon]*

**What I Built**  
An end-to-end Python pipeline to quantify intron excision dynamics from kinetic RNA-seq data across the NF-κB–responsive transcriptome.

**How It Works**
- STAR alignment of kinetic RNA-seq time series
- Custom interval engineering for intron-level quantification
- Adapted **Completed Splicing Index (CoSI)** to quantify splicing completion per intron and timepoint
- Python-based aggregation, normalization, and visualization across replicates and conditions
- Follow-up sequence modeling to prioritize candidate regulatory features associated with delayed splicing

**The Engineering Challenge**  
Extracting accurate intron-level kinetics requires precise interval handling, isoform-aware quantification, and robust normalization across temporal datasets at a resolution standard RNA-seq workflows are not designed to support out of the box.

**Outcome**  
Identified a class of "bottleneck introns" that delay inflammatory gene expression. Minigene assays experimentally validated that weak 5' splice donors drive this delay in a subset of targets, while downstream model interpretation highlighted additional putative non-canonical regulatory motifs for future follow-up. *(First-author manuscript currently in review at eLife.)*

> *[Annotated notebook — coming soon]*

---

## Case Study 2: Decoding Immune Cell Type–Specific Splicing with Foundation Models

**The Biological Question**  
How do B cells, T cells, and macrophages deploy distinct splicing programs from the same genome? Answering this required building cell-type–resolved training labels at scale, adapting a genomic foundation model for splicing prediction, and interpreting the learned sequence features underlying lineage-specific regulation.

> *[Graphical abstract / workflow diagram — coming soon]*

**What I Built**  
A unified data engineering, modeling, and interpretation framework for immune cell type–specific splicing prediction.

**How It Works**
- Cell-type–specific GTF construction with StringTie using dominant isoform selection by TPM
- PSI extraction from rMATS and integration of exon inclusion / intron retention labels into genome-scale training targets
- Automated labeling of exons, introns, and intergenic regions with reproducible YAML-driven configuration
- Fine-tuning of Borzoi for splicing prediction using both single-task and multitask training strategies
- Attribution-based interpretation with DeepSHAP / TF-MoDISco to identify **cis-regulatory motifs** associated with lineage-specific splicing behavior
- In silico perturbation analyses to test the functional importance of discovered sequence elements

**The Engineering Challenge**  
This project required solving two tightly linked problems at once: generating high-confidence labels across multiple immune cell types without coordinate drift or label leakage, and adapting a large genomic foundation model to a splicing-specific prediction task without losing interpretability.

**Outcome**  
Produced a scalable training dataset and modeling framework for immune cell type–specific splicing, improved predictive performance over simpler baselines, and recovered interpretable candidate regulatory motifs associated with exon inclusion and intron retention across lineages. *(Manuscript in preparation.)*

> *[Annotated notebook — coming soon]*

---

## Supporting Systems: Reproducible Splicing Data Infrastructure

**What it does**  
Provides the computational backbone supporting large-scale splicing analysis and model training across projects.

**How it's built**
- SLURM-based orchestration with multi-GPU and CPU fallback strategies
- Conda environment isolation per project
- YAML/JSON-driven configuration for reproducible pipeline execution
- BigWig-based data handling and custom Python utilities for genomic interval processing
- Checkpointed training and restartable analysis workflows for long-running jobs

**Why it matters**  
Genomics workflows are computationally heavy, I/O-bound, and often difficult to reproduce across environments. Treating infrastructure as a first-class part of the work makes the biological conclusions more auditable, portable, and scalable.

---

<!-- ## Additional Project: Protein Language Model Embeddings for Sequence Interpretation

**The Question**  
Can pretrained protein language model embeddings reveal biologically meaningful structure in sequence datasets before supervised modeling?

**What I Built**  
An exploratory analysis workflow using ESM embeddings and UMAP projection to visualize latent structure in protein sequence space.

**Why it's here**  
This project is less developed than the case studies above, but it reflects a complementary strength: using representation learning not just for prediction, but for interpretation, data QC, and hypothesis generation.

> *[Notebook / write-up — coming soon]*

--- -->

*Graphical abstracts and annotated notebooks are being added. [Reach out](mailto:jakedearborn@gmail.com) if you'd like a walkthrough of any of these systems in the meantime.*