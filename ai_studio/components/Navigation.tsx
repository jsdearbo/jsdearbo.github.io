
import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const links = ['Home', 'Research', 'Projects', 'Engineering', 'Publications', 'Demos'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="text-xl font-bold cursor-pointer gradient-text"
          onClick={() => setActiveSection('Home')}
        >
          JD.
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActiveSection(link)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link ? 'text-blue-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link}
            </button>
          ))}
          <a 
            href="/Dearborn_CV_March_2026.pdf" 
            target="_blank" 
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
