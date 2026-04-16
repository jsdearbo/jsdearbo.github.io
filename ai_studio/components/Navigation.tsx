
import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navLinks: { label: string; section: string | null; href?: string }[] = [
    { label: 'Home', section: 'Home' },
    { label: 'Selected Work', section: 'Selected Work' },
    { label: 'Machine Learning', section: 'Machine Learning' },
    { label: 'Computational Biology', section: 'Computational Biology' },
    { label: 'Publications', section: 'Publications' },
    { label: 'CV', section: null, href: '/Dearborn_CV_March_2026.pdf' },
  ];

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
          {navLinks.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                onClick={() => setActiveSection(item.section!)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.section ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
