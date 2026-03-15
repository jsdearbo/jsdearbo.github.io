# Research

# Research

My research integrates **RNA biology, regulatory genomics, and deep learning** to understand how genomic sequence encodes splicing regulation and how these regulatory programs differ across immune cell types.

The central goal of my work is to move from descriptive catalogs of splicing events toward **predictive and mechanistic models of RNA regulation** that operate directly on sequence.

---

## Programmed Delayed Splicing in Inflammatory Gene Regulation

This first-author project focuses on defining and characterizing **intron-specific splicing delays** across the NF-κB–responsive transcriptome.

Key components:

- Quantification of splicing completion using **Completed Splicing Index (CoSI)**  
- Kinetic RNA-seq to measure intron excision dynamics following inflammatory stimulation  
- Identification of **bottleneck introns** with reproducible, delayed splicing behavior  
- Integration with regulatory sequence features and splice site strength  

This work demonstrates that delayed splicing is **programmed and intron-specific**, rather than stochastic, and contributes to temporal regulation of inflammatory gene expression.

---

## Immune Cell Type–Specific Alternative Splicing Programs

A major focus of my current work is decoding how **B cells, T cells, and macrophages** deploy distinct alternative splicing programs despite sharing the same genome.

This includes:

- Construction of **cell-type–specific transcript annotations** from RNA-seq using StringTie  
- PSI and intron retention quantification across immune lineages  
- Deep learning–based modeling of exon inclusion and intron retention  
- Discovery of **cis-regulatory motifs** enriched in lineage-specific splicing events  

The goal is to define **regulatory programs**, not just individual events, that distinguish immune cell identities.

---

## Foundation Model Fine-Tuning for Splicing Prediction

I am actively adapting large genomic foundation models (e.g., **Borzoi**) for splicing-related tasks.

This work includes:

- fine-tuning models for **PSI and intron retention prediction**
- modeling **cell-type–specific splicing behavior**
- performing **in silico mutagenesis** to test regulatory elements
- extracting interpretable regulatory motifs using attribution

These experiments combine **LoRA/PEFT fine-tuning**, mixed-precision training, and large-scale attribution analysis to identify regulatory features learned by deep models.

---

## Regulatory Motif Discovery & Interpretation

Across projects, I apply:

- **DeepLIFT / DeepSHAP / Captum** for feature attribution  
- **TF-MoDISco** for motif discovery  
- MEME, FIMO, and tangermeme for motif scanning and validation  

These approaches are used to identify candidate **RNA-binding protein motifs** and novel intronic regulatory elements controlling splicing kinetics and exon choice.

---

## Dissertation

**Programmed Delayed Splicing and Immune Cell Type–Specific Alternative Splicing**  
PhD Dissertation, University of Vermont (expected June 2026)
