
import React from 'react';
import { ChevronDownIcon } from '../icons';
import { HERO_PROPS, SOCIAL_LINKS } from '../../constants';

export const HeroSection: React.FC = () => {
  const { name, title, subtitle, cta, secondaryCta, profileImageUrl } = HERO_PROPS;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative text-white bg-gradient-to-br from-slate-900 via-dark-bg to-gray-900 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary/20 rounded-full filter blur-3xl animate-subtle-Pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-accent/20 rounded-full filter blur-3xl animate-subtle-Pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative pt-20 pb-10">
        <div className="animate-fade-in-up">
          <img 
            src={profileImageUrl} 
            alt={name} 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-xl"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            <span className="block">{name}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary py-2">
              {title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <a
              href={cta.href}
              className="bg-brand-primary hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 text-lg"
            >
              {cta.text}
            </a>
            <a
              href={secondaryCta.href}
              className="border-2 border-brand-secondary hover:bg-brand-secondary/20 text-brand-secondary font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {secondaryCta.text}
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            {SOCIAL_LINKS.map(link => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.name}
                  className="text-slate-400 hover:text-brand-primary transition-colors duration-200 transform hover:scale-110"
                >
                  {IconComponent && <IconComponent className="w-7 h-7" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-brand-primary transition-colors">
        <ChevronDownIcon className="w-8 h-8" />
      </a>
    </section>
  );
};