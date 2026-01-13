---
title: "Projects"
layout: single
permalink: /projects/
author_profile: true
---

# Projects

This page highlights selected **technical projects and systems** I have built to support large-scale splicing analysis, regulatory modeling, and deep learning in genomics. Most are part of active research programs and are not yet public repositories.

The emphasis here is on **infrastructure, modeling, and execution**.

---

## Intron Splicing Kinetics Pipeline (NF-κB Transcriptome)

**What it does:**  
End-to-end pipeline to quantify intron excision dynamics and identify reproducibly delayed introns across inflammatory gene programs.

**How it’s built:**
- STAR alignment of kinetic RNA-seq data  
- Custom intron/exon annotation generation (StringTie + rMATS integration)  
- Genome interval engineering for intron-level metrics  
- Implementation of **Completed Splicing Index (CoSI)**  
- Python-based aggregation and visualization

**Why it’s hard:**  
Intron-level kinetics require precise interval handling, isoform disambiguation, and robust normalization across timepoints.

**Outcome:**  
Identified a class of “bottleneck introns” with reproducible delayed splicing behavior contributing to temporal regulation of inflammation.

---

## Immune Cell Type–Specific Splicing Labeling Pipeline

**What it does:**  
Generates exon inclusion and intron retention labels across B cells, T cells, and macrophages for deep learning.

**How it’s built:**
- Cell-type–specific GTF construction (StringTie)  
- Dominant isoform selection by TPM  
- PSI extraction (rMATS) and intron retention quantification  
- Automated labeling of exons, introns, and intergenic regions  
- YAML-driven configuration

**Why it’s hard:**  
Requires reconciling alternative isoforms, splicing events, and genomic coordinates across cell types.

**Outcome:**  
Produced clean, high-confidence labels for training sequence-based splicing models.

---

## Borzoi Fine-Tuning & Interpretation Framework

**What it does:**  
Adapts foundation models for splicing prediction and regulatory discovery.

**How it’s built:**
- Custom PyTorch Lightning wrappers around Borzoi  
- LoRA / PEFT fine-tuning for task adaptation  
- Mixed-precision training on HPC GPUs  
- Robust checkpoint loading and slicing  
- Captum / DeepSHAP attribution integration

**Why it’s hard:**  
Foundation models are large, memory-intensive, and not designed for splicing-specific tasks out of the box.

**Outcome:**  
Improved task performance and extracted interpretable regulatory motifs controlling exon inclusion and intron retention.

---

## Regulatory Motif Discovery & TF-MoDISco Pipeline

**What it does:**  
Identifies recurrent cis-regulatory elements from model attributions.

**How it’s built:**
- DeepLIFT / DeepSHAP attribution generation  
- TF-MoDISco clustering and motif extraction  
- MEME / FIMO / tangermeme motif scanning  
- Integration with RBP expression data

**Why it’s hard:**  
Attribution signals are noisy and high-dimensional; extracting stable motifs requires careful preprocessing and filtering.

**Outcome:**  
Discovered candidate intronic and exonic motifs associated with cell-type–specific splicing regulation.

---

## In Silico Mutagenesis & Motif Ablation System

**What it does:**  
Tests causal roles of discovered motifs by sequence perturbation.

**How it’s built:**
- Motif scrambling and deletion  
- Batch prediction on native vs ablated sequences  
- Comparative analysis across cell types and conditions

**Why it’s hard:**  
Requires precise sequence manipulation and large-scale prediction without introducing artifacts.

**Outcome:**  
Functionally prioritized regulatory elements for downstream validation.

---

## Splicing Data Infrastructure & HPC Orchestration

**What it does:**  
Provides reproducible, scalable execution of all splicing and modeling workflows.

**How it’s built:**
- SLURM job orchestration  
- Multi-GPU and CPU fallback strategies  
- Conda environment isolation  
- YAML/JSON-driven pipeline configuration  
- BigWig-based data handling (PyBigWig)

**Why it’s hard:**  
Genomics workflows are I/O-heavy, brittle, and hard to reproduce across environments.

**Outcome:**  
Stable, repeatable execution across large datasets and multiple projects.

