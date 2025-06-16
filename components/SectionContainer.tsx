
import React from 'react';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  ariaLabelledBy?: string;
  hasBgPattern?: boolean; // Optional: to add a subtle pattern or effect
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className = '', ariaLabelledBy, hasBgPattern = false }) => {
  const sectionClasses = `py-16 md:py-24 relative overflow-hidden ${className} ${hasBgPattern ? 'bg-dark-bg' : ''}`;
  
  return (
    <section id={id} className={sectionClasses} aria-labelledby={ariaLabelledBy}>
      {hasBgPattern && (
        <div className="absolute inset-0 -z-10 opacity-5">
          {/* Example subtle pattern - replace or remove if not desired */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(51, 65, 85, 0.5)" strokeWidth="0.5"/>
              </pattern>
              <pattern id="crosshatch" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="20" height="20" fill="rgba(30, 41, 59, 0.3)"/>
                <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(51, 65, 85, 0.5)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle: React.FC<{children: React.ReactNode; className?: string; icon?: React.ReactNode}> = ({ children, className = '', icon }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${className}`}>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center gap-3">
      {icon && <span className="text-brand-primary">{icon}</span>}
      {children}
    </span>
  </h2>
);
