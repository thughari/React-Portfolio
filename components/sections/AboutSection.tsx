
import React from 'react';
import { SectionContainer, SectionTitle } from '../SectionContainer';
import { ABOUT_PROPS } from '../../constants';
import { UserIcon } from '../icons';

export const AboutSection: React.FC = () => {
  const { title, profileImageUrl, bio, highlights } = ABOUT_PROPS;

  return (
    <SectionContainer id="about" ariaLabelledBy="about-title" hasBgPattern={true}>
      <SectionTitle icon={<UserIcon className="w-8 h-8" />}><span id="about-title">{title}</span></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-1 flex justify-center animate-fade-in-up">
          <img 
            src={profileImageUrl} 
            alt="Profile" 
            className="rounded-lg shadow-2xl w-full max-w-xs md:max-w-sm object-cover aspect-square border-4 border-slate-700"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-2 space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {bio.map((paragraph, index) => (
            <p key={index} className="text-dark-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Key Highlights:</h3>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <li key={index} className="flex items-center text-dark-text-secondary">
                    {IconComponent && <IconComponent className="w-5 h-5 mr-3 flex-shrink-0" />}
                    <span>{highlight.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};