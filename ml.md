---
title: "Engineering & ML"
layout: single
permalink: /engineering/
author_profile: true
---

The infrastructure and engineering behind my ML work — for teams who want to know how models are built, trained, and interrogated, not just what they predict.

Tooling for sequence-to-function modeling is available in [**`sequence_to_function_model_tools`**](https://github.com/jsdearbo/sequence_to_function_model_tools).

---

## Model Architecture

I build sequence-to-function models mapping raw genomic sequence to splicing outcomes (PSI, intron retention) with cell-type–aware prediction heads.

Current architecture work:
- Transformer and CNN-hybrid architectures for long-range sequence context
- Task-specific fine-tuning of foundation models (Borzoi) via **LoRA/PEFT**
- Multi-task prediction across B cell, T cell, and macrophage contexts

---

## Training Infrastructure

Reproducible training pipelines designed for HPC and rapid iteration:

- **Config-driven experiments** — YAML/JSON parameterization with full run logging
- **PyTorch Lightning** wrappers for clean training loops and multi-GPU support
- **Mixed-precision training** (fp16/bf16) for memory efficiency on large models
- **Structured checkpointing** — resume-from-checkpoint workflows for long runs
- **SLURM orchestration** — job arrays, GPU allocation, and failure recovery
- **WandB** experiment tracking and **Optuna** hyperparameter search

---

## Interpretability Pipeline

Model predictions are only useful if they generate testable biological hypotheses.

- **DeepLIFT / DeepSHAP** via Captum for per-nucleotide attribution
- **TF-MoDISco** motif discovery from attribution maps
- **SEA / FIMO** (MEME Suite) for motif scanning and validation
- **In silico mutagenesis** — motif scrambling/deletion + batch prediction on perturbed sequences
- **UMAP** visualization of learned sequence embeddings

---

## Code Examples

> *Annotated notebooks — coming soon*

Planned examples:
- Fine-tuning Borzoi for PSI prediction: LoRA setup, data loading, evaluation loop
- Running TF-MoDISco from Captum attribution outputs
- CoSI calculation pipeline from kinetic RNA-seq

---

## Reproducibility Standards

- All workflows parameterized via config files — no hardcoded paths or magic numbers
- Conda environments pinned and versioned per project
- Outputs versioned alongside input metadata for auditability
- Pipeline logic separated from execution logic for portability across HPC environments
