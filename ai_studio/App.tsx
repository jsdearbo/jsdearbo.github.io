
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { PROJECTS, PUBLICATIONS, RESEARCH_AREAS, PORTFOLIO_CASES, PRESENTATIONS } from './constants';
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2, Beaker, Cpu, Database } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const renderHome = () => (
    <section className="space-y-24 animate-in fade-in duration-700">
      <div className="flex flex-col items-center text-center space-y-8 pt-12">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-2 border-blue-500/50 p-1">
            <img
              src="/assets/images/headshot.jpg"
              alt="Jake Dearborn"
              className="w-full h-full rounded-full grayscale hover:grayscale-0 transition-all duration-500 object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">PhD Candidate</div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Jake <span className="gradient-text">Dearborn</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            Computational Biology · Regulatory Genomics · Machine Learning
          </p>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            PhD candidate in Molecular Biology at the University of Vermont, working at the intersection of RNA biology, regulatory genomics, and machine learning. Defending June 2026.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:jakedearborn@gmail.com" className="glass px-6 py-3 rounded-xl flex items-center gap-2 hover:border-blue-500/50 transition-all">
            <Mail size={18} className="text-blue-400" />
            <span>Email</span>
          </a>
          <a href="https://github.com/jsdearbo" target="_blank" rel="noreferrer" className="glass px-6 py-3 rounded-xl flex items-center gap-2 hover:border-purple-500/50 transition-all">
            <Github size={18} className="text-purple-400" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/jake-dearborn-15408652/" target="_blank" rel="noreferrer" className="glass px-6 py-3 rounded-xl flex items-center gap-2 hover:border-blue-400/50 transition-all">
            <Linkedin size={18} className="text-blue-400" />
            <span>LinkedIn</span>
          </a>
          <a href="/Dearborn_CV_March_2026.pdf" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 transition-all">
            <FileText size={18} />
            <span className="font-semibold">Download CV</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Cpu className="text-blue-400" />, title: "Machine Learning", desc: "PyTorch, Transformers, LoRA/PEFT, Lightning, WandB, Optuna" },
          { icon: <Beaker className="text-purple-400" />, title: "RNA Biology", desc: "Splicing kinetics, intron retention, motif discovery, NF-κB regulation" },
          { icon: <Database className="text-green-400" />, title: "Genomics", desc: "RNA-seq, scRNA-seq, CITE-seq, PSI/IR analysis, single-cell workflows" },
          { icon: <Code2 className="text-orange-400" />, title: "Infrastructure", desc: "HPC/SLURM, multi-GPU, reproducible pipelines, Conda, config-driven runs" }
        ].map((skill, i) => (
          <div key={i} className="glass p-6 rounded-2xl space-y-3 hover:translate-y-[-4px] transition-transform">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              {skill.icon}
            </div>
            <h3 className="font-semibold text-lg">{skill.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass p-8 rounded-3xl border-l-4 border-l-blue-600 max-w-3xl">
        <h2 className="text-xl font-bold mb-3">Current Work</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          My dissertation, <span className="text-white font-medium">"Timing and Specificity in the Immune Transcriptome: Unraveling Splicing Dynamics through Computational Regulatory Genomics,"</span> integrates experimental RNA biology with deep learning to identify regulatory elements controlling splicing kinetics and cell-type specificity.
        </p>
        <p className="text-gray-500 text-sm">
          First-author manuscript on programmed delayed splicing in inflammatory gene regulation is currently <span className="text-blue-400">in review at eLife</span>. Recent collaborative work published in <span className="italic">Cell Reports</span> (2025) and <span className="italic">ACS Nano</span> (2024).
        </p>
      </div>
    </section>
  );

  const renderResearch = () => (
    <section className="space-y-12 animate-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Research Program</h2>
        <p className="text-gray-400 leading-relaxed">
          My research integrates RNA biology, regulatory genomics, and deep learning to understand how genomic sequence encodes splicing regulation and how these programs differ across immune cell types. The central goal is to move from descriptive catalogs of splicing events toward <span className="text-gray-200">predictive and mechanistic models of RNA regulation</span> that operate directly on sequence.
        </p>
      </div>

      <div className="space-y-8">
        {RESEARCH_AREAS.map((area, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-l-4 border-l-blue-600">
            <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {area.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="text-blue-500 mt-1">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="glass p-8 rounded-3xl bg-white/[0.02]">
        <h3 className="text-xl font-bold mb-2">Dissertation</h3>
        <p className="text-gray-300 font-medium mb-1">Timing and Specificity in the Immune Transcriptome: Unraveling Splicing Dynamics through Computational Regulatory Genomics</p>
        <p className="text-gray-500 text-sm">PhD Dissertation, University of Vermont · Expected June 2026</p>
      </div>
    </section>
  );

  const renderProjects = () => (
    <section className="space-y-16 animate-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Selected Systems & Pipelines</h2>
        <p className="text-gray-400">Engineering robust infrastructure for large-scale genomic modeling. These projects emphasize reproducible pipelines, scalable model training, and interpretable outputs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <div key={i} className="glass p-8 rounded-3xl flex flex-col space-y-6 hover:border-white/20 transition-all group">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <div className="flex flex-wrap gap-2 shrink-0">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest bg-white/5 px-2 py-1 rounded text-gray-400">{tag}</span>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-2">How it's built</h4>
                <div className="flex flex-wrap gap-2">
                  {project.howItsBuilt.map(tech => (
                    <span key={tech} className="mono text-[11px] bg-blue-500/10 text-blue-300 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Challenge</h4>
                <p className="text-xs text-gray-500 italic">{project.whyItsHard}</p>
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-2 text-green-400 font-medium text-sm">
                  <div className="w-1 h-4 bg-green-500/50 rounded-full mt-0.5 shrink-0"></div>
                  {project.outcome}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Case Studies</h2>
        <p className="text-gray-400 mb-8">Deeper walkthroughs linking biological questions to the computational systems built to answer them.</p>

        <div className="space-y-8">
          {PORTFOLIO_CASES.map((c, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-l-4 border-l-purple-600 space-y-6">
              <h3 className="text-2xl font-bold">{c.title}</h3>

              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-2">The Biological Question</h4>
                <p className="text-gray-300 leading-relaxed">{c.biologicalQuestion}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-2">What I Built</h4>
                <p className="text-gray-400">{c.whatIBuilt}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-3">How It Works</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {c.howItWorks.map((step, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-purple-500 mt-1">▹</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Engineering Challenge</h4>
                <p className="text-sm text-gray-500 italic">{c.engineeringChallenge}</p>
              </div>

              <div className="flex items-start gap-2 text-green-400 font-medium text-sm pt-2">
                <div className="w-1 h-4 bg-green-500/50 rounded-full mt-0.5 shrink-0"></div>
                {c.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderEngineering = () => (
    <section className="space-y-12 animate-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Engineering & ML</h2>
        <p className="text-gray-400 leading-relaxed">
          Model design, training workflows, interpretability tooling, and the engineering systems that support large-scale genomics analysis. Tooling for sequence-to-function modeling is available in{' '}
          <a href="https://github.com/jsdearbo/sequence_to_function_model_tools" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            sequence_to_function_model_tools
          </a>.
        </p>
      </div>

      <div className="space-y-6">
        <div className="glass p-8 rounded-3xl border-l-4 border-l-blue-600">
          <h3 className="text-xl font-bold mb-4">Modeling Focus</h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            Building sequence-to-function models that map raw genomic sequence to splicing-related outcomes such as PSI and intron retention.
          </p>
          <ul className="space-y-2">
            {[
              "Transformer and CNN-hybrid architectures for long-range sequence context",
              "Task-specific fine-tuning of foundation models (Borzoi) via LoRA/PEFT",
              "Single-task and multitask prediction across B cell, T cell, and macrophage contexts",
              "Evaluation through attribution, perturbation, and embedding-space analyses"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="text-blue-500 mt-1">▹</span>{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass p-8 rounded-3xl border-l-4 border-l-green-600">
          <h3 className="text-xl font-bold mb-4">Training Workflows</h3>
          <p className="text-gray-400 mb-4 text-sm">Pipelines designed for HPC use and iterative model development:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { label: "Config-driven experiments", desc: "YAML/JSON parameterization with full run logging" },
              { label: "PyTorch Lightning", desc: "Clean training loops and multi-GPU support" },
              { label: "Mixed-precision training", desc: "fp16/bf16 for memory efficiency on large models" },
              { label: "Structured checkpointing", desc: "Resume-from-checkpoint workflows for long runs" },
              { label: "SLURM orchestration", desc: "Job submission, GPU allocation, restartable training" },
              { label: "WandB + Optuna", desc: "Experiment tracking and hyperparameter search" }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] rounded-xl p-3">
                <span className="mono text-[11px] bg-green-500/10 text-green-300 px-2 py-0.5 rounded">{item.label}</span>
                <p className="text-xs text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border-l-4 border-l-purple-600">
          <h3 className="text-xl font-bold mb-4">Interpretability & Analysis</h3>
          <p className="text-gray-400 mb-4 text-sm">Model predictions are most useful when they support testable biological hypotheses:</p>
          <ul className="space-y-2">
            {[
              "DeepLIFT / DeepSHAP via Captum for per-nucleotide attribution",
              "TF-MoDISco motif discovery from attribution maps",
              "SEA / FIMO (MEME Suite) for motif scanning and validation",
              "In silico mutagenesis — motif scrambling/deletion with batch prediction on perturbed sequences",
              "Embedding-space visualization with UMAP for exploratory analysis"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="text-purple-500 mt-1">▹</span>{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass p-8 rounded-3xl border-l-4 border-l-orange-600">
          <h3 className="text-xl font-bold mb-4">Reproducibility Practices</h3>
          <ul className="space-y-2">
            {[
              "Workflows parameterized via config files rather than hardcoded paths",
              "Conda environments pinned and versioned per project",
              "Outputs versioned alongside input metadata for auditability",
              "Pipeline logic separated from execution logic for portability across HPC environments"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="text-orange-500 mt-1">▹</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

  const renderPublications = () => (
    <section className="space-y-12 animate-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Publications & Preprints</h2>
        <p className="text-gray-400">Scientific contributions spanning computational splicing biology, inflammation, and transcriptomics. Full citation details available in my CV.</p>
      </div>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub, i) => (
          <div key={i} className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.03] transition-colors border-l-2 border-l-transparent hover:border-l-blue-500">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                  pub.status === 'Published' ? 'bg-green-500/20 text-green-400' :
                  pub.status === 'In Review' ? 'bg-blue-500/20 text-blue-400' :
                  pub.status === 'In Preparation' ? 'bg-gray-500/20 text-gray-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {pub.status}
                </span>
                <span className="text-gray-500 text-sm">{pub.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{pub.title}</h3>
              <p className="text-sm text-gray-500">{pub.authors} — <span className="italic">{pub.journal}</span></p>
            </div>

            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors shrink-0"
              >
                DOI <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/5">
        <h3 className="text-xl font-bold mb-6">Presentations & Talks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRESENTATIONS.map((talk, i) => (
            <div key={i} className="glass px-4 py-3 rounded-xl text-sm text-gray-400 flex items-center gap-3">
              <Beaker size={14} className="text-purple-400 shrink-0" />
              {talk}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="dna-gradient fixed inset-0 opacity-10"></div>
      </div>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        {activeSection === 'Home' && renderHome()}
        {activeSection === 'Research' && renderResearch()}
        {activeSection === 'Projects' && renderProjects()}
        {activeSection === 'Engineering' && renderEngineering()}
        {activeSection === 'Publications' && renderPublications()}
      </main>

      <footer className="relative z-10 max-w-6xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          Available for roles in computational genomics and ML for biology — 2026
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/jsdearbo" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jake-dearborn-15408652/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:jakedearborn@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
