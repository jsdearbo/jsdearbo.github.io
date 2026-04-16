
export interface Project {
  title: string;
  description: string;
  howItsBuilt: string[];
  whyItsHard: string;
  outcome: string;
  tags: string[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  status: 'In Review' | 'Published' | 'Preprint' | 'In Preparation';
  link?: string;
  doi?: string;
}

export interface ResearchArea {
  title: string;
  description: string;
  points: string[];
}

export interface FigurePlaceholder {
  label: string;
  caption: string;
  imagePath?: string;
}

export interface MLEvidenceSection {
  title: string;
  accentColor: 'blue' | 'green' | 'purple' | 'orange';
  items: string[];
  figure?: FigurePlaceholder;
}

export interface PortfolioCase {
  title: string;
  problem: string;
  data: string;
  whatIBuilt: string;
  methodsStack: string[];
  result: string;
  whyItMatters: string;
  signalsForML: string;
  signalsForBio: string;
  figurePlaceholderLabel: string;
  figureImagePath?: string;
  notebookPath?: string;
}
