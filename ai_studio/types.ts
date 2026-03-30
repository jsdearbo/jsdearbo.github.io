
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

export interface PortfolioCase {
  title: string;
  biologicalQuestion: string;
  whatIBuilt: string;
  howItWorks: string[];
  engineeringChallenge: string;
  outcome: string;
}
