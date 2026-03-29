---
title: "Engineering & ML"
layout: single
permalink: /engineering/
author_profile: true
---

Engineering systems and training workflows behind my ML work, for readers interested in how models are built, trained, and interpreted—not just what they predict.

Tooling for sequence-to-function modeling is available in [**`sequence_to_function_model_tools`**](https://github.com/jsdearbo/sequence_to_function_model_tools).

---

## Model Architecture

I build sequence-to-function models that map raw genomic sequence to splicing outcomes such as PSI and intron retention, including cell-type–aware prediction heads.

Current architecture work:
- Transformer and CNN-hybrid architectures for long-range sequence context
- Task-specific fine-tuning of foundation models such as **Borzoi** via **LoRA/PEFT**
- Single-task and multitask prediction across B cell, T cell, and macrophage contexts

---

## Training Workflows

Training pipelines designed for HPC use and iterative model development:

- **Config-driven experiments** — YAML/JSON parameterization with full run logging
- **PyTorch Lightning** wrappers for clean training loops and multi-GPU support
- **Mixed-precision training** (fp16/bf16) for memory efficiency on large models
- **Structured checkpointing** — resume-from-checkpoint workflows for long runs
- **SLURM orchestration** — job submission, GPU allocation, and restartable training workflows
- **WandB** experiment tracking and **Optuna** hyperparameter search

---

## Interpretability Pipeline

Model predictions are most useful when they support testable biological hypotheses.

- **DeepLIFT / DeepSHAP** via Captum for per-nucleotide attribution
- **TF-MoDISco** motif discovery from attribution maps
- **SEA / FIMO** (MEME Suite) for motif scanning and validation
- **In silico mutagenesis** — motif scrambling/deletion with batch prediction on perturbed sequences
- Embedding-space visualization with **UMAP** for exploratory analysis and interpretation

---

## Code Examples

> *Annotated notebooks — coming soon*

Planned examples:
- Fine-tuning Borzoi for PSI prediction: LoRA setup, data loading, and evaluation
- Running TF-MoDISco from Captum attribution outputs
- CoSI calculation from kinetic RNA-seq

---

## Reproducibility Practices

- Workflows parameterized via config files rather than hardcoded paths
- Conda environments pinned and versioned per project
- Outputs versioned alongside input metadata for auditability
- Pipeline logic separated from execution logic for portability across HPC environments