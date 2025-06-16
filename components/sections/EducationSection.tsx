
import React from 'react';
import { SectionContainer, SectionTitle } from '../SectionContainer';
import { TimelineItem } from '../TimelineItem';
import { EDUCATION_DATA } from '../../constants';
import { AcademicCapIcon } from '../icons';

export const EducationSection: React.FC = () => {
  return (
    <SectionContainer id="education" ariaLabelledBy="education-title" hasBgPattern={true}>
      <SectionTitle icon={<AcademicCapIcon className="w-8 h-8" />}><span id="education-title">Education</span></SectionTitle>
       <ol className="relative border-l-2 border-slate-700 max-w-3xl mx-auto">
        {EDUCATION_DATA.map((event, index) => (
          <div key={event.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <TimelineItem event={event} isLast={index === EDUCATION_DATA.length -1}/>
          </div>
        ))}
      </ol>
    </SectionContainer>
  );
};
