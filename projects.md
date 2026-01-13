# Projects

This page highlights selected computational and experimental projects. Most are part of active research programs and not yet public repositories.

---

## Programmed Delayed Splicing (NF-κB Transcriptome)

**Focus:** Intron-specific splicing kinetics in inflammatory gene programs

- Kinetic RNA-seq processing and alignment (STAR)  
- Custom intron/exon annotation generation (StringTie, rMATS integration)  
- CoSI calculation and intron-level splicing classification  
- Sequence feature extraction and splice site strength analysis  

**Outcome:** Defined a class of reproducibly delayed introns contributing to temporal control of inflammation.

---

## Immune Cell Type–Specific Splicing Model

**Focus:** Predicting exon inclusion and intron retention across B cells, T cells, and macrophages

- Cell-type–specific GTF construction  
- PSI and IR labeling pipelines  
- Deep learning model training for sequence-to-splicing prediction  
- Attribution and motif discovery for regulatory interpretation  

**Outcome:** Identification of candidate regulatory motifs distinguishing immune lineages.

---

## Borzoi Fine-Tuning for Splicing Tasks

**Focus:** Adapting foundation models for RNA processing prediction

- Custom PyTorch/Lightning wrappers  
- LoRA fine-tuning and checkpoint management  
- Mixed-precision training on HPC GPUs  
- Attribution-driven motif discovery and in silico mutagenesis  

**Outcome:** Improved task-specific performance and interpretable regulatory signals.

---

## Regulatory Motif Ablation & In Silico Mutagenesis

**Focus:** Testing causal roles of discovered motifs

- Motif scrambling and deletion experiments  
- Prediction of splicing outcomes pre/post ablation  
- Comparative analysis across cell types  

**Outcome:** Functional prioritization of candidate regulatory elements.

---

## Splicing Data Infrastructure

**Focus:** Building reproducible pipelines for large-scale splicing analysis

- Genome interval engineering and BigWig workflows  
- STAR, StringTie, rMATS automation  
- YAML/JSON-driven pipeline configs  
- HPC/SLURM execution with CPU fallback  

**Outcome:** Scalable, reproducible infrastructure supporting all modeling work.
