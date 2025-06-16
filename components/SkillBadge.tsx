
import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  // FIX: Render icon component directly instead of using React.cloneElement
  const IconComponent = skill.icon;
  return (
    <div className="bg-slate-700/50 border border-slate-600 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-3 group hover:border-brand-primary/50">
      {/* FIX: Render IconComponent with desired className. Original classNames from constants.ts for specific skill icons (e.g. text-yellow-400) are not carried over here;
           the span's text-brand-primary will apply. The size w-6 h-6 matches the original cloneElement call. */}
      {IconComponent && <span className="text-brand-primary group-hover:scale-110 transition-transform"><IconComponent className="w-6 h-6" /></span>}
      <span className="text-slate-200 font-medium text-sm group-hover:text-brand-secondary transition-colors">{skill.name}</span>
    </div>
  );
};