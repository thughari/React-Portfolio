
import React from 'react';
import { SectionContainer, SectionTitle } from '../SectionContainer';
import { TimelineItem } from '../TimelineItem';
import { EXPERIENCE_DATA } from '../../constants';
import { BriefcaseIcon } from '../icons';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionContainer id="experience" ariaLabelledBy="experience-title">
      <SectionTitle icon={<BriefcaseIcon className="w-8 h-8" />}><span id="experience-title">Professional Experience</span></SectionTitle>
      <ol className="relative border-l-2 border-slate-700 max-w-3xl mx-auto">
        {EXPERIENCE_DATA.map((event, index) => (
          <div key={event.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <TimelineItem event={event} isLast={index === EXPERIENCE_DATA.length -1}/>
          </div>
        ))}
      </ol>
    </SectionContainer>
  );
};
