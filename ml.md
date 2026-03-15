---
title: "Machine Learning Work"
layout: single
permalink: /ml/
author_profile: true
---

# Machine Learning Work

This page highlights the machine learning side of my research for teams hiring ML talent in genomics and computational biology.

---

## Sequence Models

I build sequence-to-function models that map genomic sequence to splicing outcomes such as exon inclusion and intron retention. These models are designed for cell-type-aware prediction tasks and downstream hypothesis generation.

I also maintain tooling in my repository [**`sequence_to_function_model_tools`**](https://github.com/jsdearbo/sequence_to_function_model_tools) to support training, evaluation, and reproducible experimentation.

---

## Transformer Architectures

My current work includes adapting transformer and foundation-model approaches (including Borzoi-based workflows) to RNA processing tasks.

Typical workstreams include:

- Task-specific fine-tuning for PSI/intron-retention prediction
- Parameter-efficient adaptation (LoRA/PEFT)
- Multi-GPU mixed-precision training
- Performance benchmarking across immune cell contexts

---

## Interpretability Work

I prioritize interpretability so model predictions can be translated into biological insight.

Methods I use include:

- DeepLIFT / DeepSHAP with Captum
- TF-MoDISco motif discovery from attribution maps
- Motif validation/scanning with MEME and FIMO
- In silico mutagenesis and motif ablation experiments
- UMAP visualization of learned embedding vectors

---

## Training Pipelines

I develop reproducible training pipelines that run reliably on HPC infrastructure and support rapid iteration.

Pipeline features include:

- Config-driven experiments (YAML/JSON)
- Structured checkpointing and resume workflows
- SLURM-friendly orchestration for large training jobs
- Evaluation/reporting workflows for model comparison and handoff

---

If you are recruiting for ML roles in genomics or biotech, I would be glad to share additional technical detail and code examples.
