
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { COMP_BIO_PROJECTS, ML_PROJECTS, PUBLICATIONS, RESEARCH_AREAS, PORTFOLIO_CASES, PRESENTATIONS, ML_EVIDENCE_SECTIONS } from './constants';
import { PortfolioCase } from './types';
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2, Beaker, Cpu, Database, ArrowRight, BarChart2, FlaskConical } from 'lucide-react';

const accentBorderMap: Record<string, string> = {
  blue: 'border-l-blue-600',
  green: 'border-l-green-600',
  purple: 'border-l-purple-600',
  orange: 'border-l-orange-600',
};

const accentTextMap: Record<string, string> = {
  blue: 'text-blue-500',
  green: 'text-green-500',
  purple: 'text-purple-500',
  orange: 'text-orange-500',
};

const FigurePlaceholderBlock: React.FC<{ label: string; imagePath?: string }> = ({ label, imagePath }) => {
  if (imagePath) {
    return (
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <img src={imagePath} alt={label} className="w-full object-cover" />
        <div className="px-4 py-2 bg-white/[0.02] text-xs text-gray-500 italic">{label}</div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-3 py-10 px-6 text-center">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
        <BarChart2 size={22} className="text-gray-600" />
      </div>
      <p className="text-xs text-gray-600 font-medium uppercase tracking-widest">Figure in preparation</p>
      <p className="text-sm text-gray-500 italic max-w-sm">{label}</p>
    </div>
  );
};

const AudienceCallouts: React.FC<{ ml: string; bio: string }> = ({ ml, bio }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <Cpu size={13} className="text-blue-400 shrink-0" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Signals for ML Teams</span>
      </div>
      <p className="text-sm text-blue-100/80 leading-relaxed">{ml}</p>
    </div>
    <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <FlaskConical size={13} className="text-purple-400 shrink-0" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Signals for Bio Teams</span>
      </div>
      <p className="text-sm text-purple-100/80 leading-relaxed">{bio}</p>
    </div>
  </div>
);

const CaseStudyCard: React.FC<{ c: PortfolioCase; idx: number; onClick: () => void }> = ({ c, idx, onClick }) => {
  const statusLabel = idx === 2 ? 'Published' : idx === 0 ? 'In Review' : 'In Prep';
  const statusColor = idx === 2
    ? 'bg-green-500/20 text-green-400'
    : idx === 0
    ? 'bg-blue-500/20 text-blue-400'
    : 'bg-gray-500/20 text-gray-400';
  return (
    <div
      onClick={onClick}
      className="glass p-6 rounded-2xl flex flex-col gap-4 hover:border-white/20 hover:translate-y-[-4px] transition-all cursor-pointer group"
    >
      <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded self-start ${statusColor}`}>
        {statusLabel}
      </span>
      <h3 className="font-bold text-base leading-snug group-hover:text-blue-400 transition-colors">{c.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{c.problem}</p>
      <div className="pt-2 text-xs text-blue-400 flex items-center gap-1 font-medium mt-auto">
        Read case study <ArrowRight size={12} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const renderHome = () => (
    <section className="space-y-20 animate-in fade-in duration-700">
      {/* Hero */}
      <div className="flex flex-col items-center text-center space-y-8 pt-12">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-2 border-blue-500/50 p-1">
            <img
              src="/assets/images/headshot.jpg"
              alt="Jake Dearborn"
              className="w-full h-full rounded-full grayscale hover:grayscale-0 transition-all duration-500 object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            PhD Candidate
          </div>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Jake <span className="gradient-text">Dearborn</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium leading-tight">
            Computational Biologist and ML Scientist for Regulatory Genomics
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I build interpretable sequence-to-function models and RNA-seq analysis pipelines
            to study RNA splicing regulation, immune cell state, and regulatory sequence function.
          </p>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Seeking computational biologist, machine learning scientist, and scientific ML roles in biotech.
            Defending June 2026 · University of Vermont
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveSection('Selected Work')}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 transition-all font-semibold"
          >
            View Selected Work
            <ArrowRight size={16} />
          </button>
          <a
            href="/Dearborn_CV_March_2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="glass px-6 py-3 rounded-xl flex items-center gap-2 hover:border-blue-500/50 transition-all"
          >
            <FileText size={18} className="text-blue-400" />
            <span>Download CV</span>
          </a>
          <a
            href="https://github.com/jsdearbo"
            target="_blank"
            rel="noreferrer"
            className="glass px-6 py-3 rounded-xl flex items-center gap-2 hover:border-purple-500/50 transition-all"
          >
            <Github size={18} className="text-purple-400" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Featured case study cards */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 text-center mb-8">
          Selected Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_CASES.map((c, i) => (
            <CaseStudyCard
              key={i}
              c={c}
              idx={i}
              onClick={() => setActiveSection('Selected Work')}
            />
          ))}
        </div>
      </div>

      {/* Skills quick-scan */}
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

      {/* Dissertation callout */}
      <div className="glass p-8 rounded-3xl border-l-4 border-l-blue-600 max-w-3xl">
        <h2 className="text-xl font-bold mb-3">Dissertation</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          <span className="text-white font-medium italic">"Timing and Specificity in the Immune Transcriptome: Unraveling Splicing Dynamics through Computational Regulatory Genomics"</span>
        </p>
        <p className="text-gray-500 text-sm">
          First-author manuscript on programmed delayed splicing currently{' '}
          <span className="text-blue-400">in review at eLife</span>. Recent collaborative work
          published in <span className="italic">Cell Reports</span> (2025) and{' '}
          <span className="italic">ACS Nano</span> (2024).
        </p>
      </div>
    </section>
  );

  const renderSelectedWork = () => (
    <section className="space-y-12 animate-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
        <p className="text-gray-400 leading-relaxed">
          End-to-end case studies linking biological questions to the computational systems built to answer them.
          Each project is designed to be legible to both ML and bio audiences.
        </p>
      </div>

      <div className="space-y-10">
        {PORTFOLIO_CASES.map((c, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-l-4 border-l-purple-600 space-y-6">
            <h3 className="text-2xl font-bold">{c.title}</h3>

            <FigurePlaceholderBlock label={c.figurePlaceholderLabel} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 tracking-widest">Problem</h4>
                <p className="text-gray-300 leading-relaxed text-sm">{c.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 tracking-widest">Data</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{c.data}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 tracking-widest">What I Built</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{c.whatIBuilt}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-gray-500 mb-3 tracking-widest">Methods / Stack</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {c.methodsStack.map((step, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-purple-500 mt-1 shrink-0">▹</span>{step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 tracking-widest">Result</h4>
                <div className="flex items-start gap-2 text-green-400 text-sm font-medium">
                  <div className="w-1 h-4 bg-green-500/50 rounded-full mt-0.5 shrink-0"></div>
                  <span>{c.result}</span>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 tracking-widest">Why It Matters</h4>
                <p className="text-gray-400 text-sm italic leading-relaxed">{c.whyItMatters}</p>
              </div>
            </div>

            <AudienceCallouts ml={c.signalsForML} bio={c.signalsForBio} />
          </div>
        ))}
      </div>
    </section>
  );

  const renderMachineLearning = () => (
    <section className="space-y-12 animate-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Machine Learning</h2>
        <p className="text-gray-400 leading-relaxed">
          Model architecture work, foundation model fine-tuning, training infrastructure,
          attribution-based interpretability, and reproducible ML engineering for genomics.
          Tooling available in{' '}
          <a
            href="https://github.com/jsdearbo/sequence_to_function_model_tools"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            sequence_to_function_model_tools
          </a>.
        </p>
      </div>

      <div className="space-y-6">
        {ML_EVIDENCE_SECTIONS.map((section, i) => (
          <div key={i} className={`glass p-8 rounded-3xl border-l-4 ${accentBorderMap[section.accentColor]} space-y-4`}>
            <h3 className="text-xl font-bold">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className={`${accentTextMap[section.accentColor]} mt-1 shrink-0`}>▹</span>{item}
                </li>
              ))}
            </ul>
            {section.figure && (
              <FigurePlaceholderBlock
                label={section.figure.label}
                imagePath={section.figure.imagePath}
              />
            )}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Systems & Pipelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ML_PROJECTS.map((project, i) => (
            <div key={i} className="glass p-6 rounded-2xl space-y-4 hover:bg-white/[0.03] transition-colors">
              <div>
                <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-gray-600 mb-2 tracking-widest">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {project.howItsBuilt.map((item, j) => (
                    <span key={j} className="mono text-[11px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2 text-green-400 text-xs font-medium">
                <div className="w-1 h-3 bg-green-500/50 rounded-full mt-0.5 shrink-0"></div>
                <span>{project.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderComputationalBiology = () => (
    <section className="space-y-12 animate-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Computational Biology</h2>
        <p className="text-gray-400 leading-relaxed">
          RNA-seq and splicing analysis pipelines, single-cell and multimodal workflows,
          QC and differential analysis, and biologically grounded interpretation across immune cell types.
        </p>
      </div>

      <div className="space-y-8">
        {RESEARCH_AREAS.slice(0, 2).map((area, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-l-4 border-l-green-600 space-y-4">
            <h3 className="text-xl font-bold">{area.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
            <ul className="space-y-2">
              {area.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="text-green-500 mt-1 shrink-0">▹</span>{point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Pipelines & Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMP_BIO_PROJECTS.map((project, i) => (
            <div key={i} className="glass p-6 rounded-2xl space-y-4 hover:bg-white/[0.03] transition-colors">
              <div>
                <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-gray-600 mb-2 tracking-widest">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {project.howItsBuilt.map((item, j) => (
                    <span key={j} className="mono text-[11px] bg-green-500/10 text-green-300 px-2 py-0.5 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2 text-green-400 text-xs font-medium">
                <div className="w-1 h-3 bg-green-500/50 rounded-full mt-0.5 shrink-0"></div>
                <span>{project.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shiny demo — secondary link */}
      <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-green-500/20 text-green-400">
              Published
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-white/10 text-gray-400">
              R · Shiny · DESeq2 · fgsea
            </span>
          </div>
          <h4 className="font-semibold text-base">
            gWAT Transcriptomics Explorer — <em>Kras</em><sup>G12D/+</sup> Mice
          </h4>
          <p className="text-sm text-gray-500 max-w-xl">
            Interactive volcano plots and hallmark pathway enrichment from{' '}
            <span className="italic">Cell Reports</span> (2025).
            Runs in-browser via Shinylive — may load slowly on first visit.
          </p>
        </div>
        <a
          href="/shiny/gwat_rnaseq/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 shrink-0 glass px-4 py-2 rounded-lg text-sm font-medium text-blue-400 hover:text-blue-300 hover:border-blue-500/50 transition-all"
        >
          Open app <ExternalLink size={14} />
        </a>
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
        {activeSection === 'Selected Work' && renderSelectedWork()}
        {activeSection === 'Machine Learning' && renderMachineLearning()}
        {activeSection === 'Computational Biology' && renderComputationalBiology()}
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
