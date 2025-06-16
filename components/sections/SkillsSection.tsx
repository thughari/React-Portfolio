
import React from 'react';
import { SectionContainer, SectionTitle } from '../SectionContainer';
import { SkillBadge } from '../SkillBadge';
import { SKILLS_DATA } from '../../constants';
import { LightbulbIcon } from '../icons';

export const SkillsSection: React.FC = () => {
  const categorizedSkills: { [key: string]: typeof SKILLS_DATA } = SKILLS_DATA.reduce((acc, skill) => {
    acc[skill.category] = [...(acc[skill.category] || []), skill];
    return acc;
  }, {} as { [key: string]: typeof SKILLS_DATA });

  const categoryOrder = ['Languages', 'Frontend', 'Backend', 'Databases', 'AI/ML', 'Mobile', 'DevOps', 'Tools'];

  return (
    <SectionContainer id="skills" ariaLabelledBy="skills-title" hasBgPattern={true}>
      <SectionTitle icon={<LightbulbIcon className="w-8 h-8" />}><span id="skills-title">Technical Skills</span></SectionTitle>
      <div className="space-y-10">
        {categoryOrder.map(category => {
          if (!categorizedSkills[category]) return null;
          return (
            <div key={category} className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center md:text-left">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categorizedSkills[category].map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};
