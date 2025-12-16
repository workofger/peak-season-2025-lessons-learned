import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`min-h-screen py-20 px-8 lg:px-16 border-b border-pr-gray/30 flex flex-col justify-center ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12">
          {subtitle && (
            <span className="text-pr-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {title}
            </h2>
          )}
          <div className="h-1 w-20 bg-pr-yellow mt-6 rounded-full" />
        </div>
      )}
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default Section;