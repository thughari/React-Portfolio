
import React from 'react';
import { TimelineEvent } from '../types';
import { CodeIcon } from './icons';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast = false }) => {
  // FIX: Get the custom icon component from the event, if provided
  const CustomIconComponent = event.icon;

  return (
    <li className="mb-10 ml-8 relative">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-700 rounded-full -left-4 ring-4 ring-slate-800 text-sky-300">
        {/* FIX: Render CustomIconComponent if it exists, otherwise fall back to CodeIcon.
             Apply className to size the icon. Original event icons from constants.ts were w-6 h-6. Fallback is w-4 h-4. */}
        {CustomIconComponent ? <CustomIconComponent className="w-6 h-6" /> : <CodeIcon className="w-4 h-4" />}
      </span>
      {!isLast && <div className="absolute w-0.5 h-full bg-slate-700 top-7 -left-0.5 -z-10" style={{ marginLeft: '1px' }}></div>}
      
      <div className="p-5 bg-dark-card rounded-lg shadow-xl border border-slate-700 hover:border-brand-primary/50 transition-colors duration-300">
        <h3 className="text-lg font-semibold text-slate-100">{event.title}</h3>
        <p className="text-sm font-normal text-sky-400 mb-1">{event.institution}</p>
        <time className="block mb-2 text-xs font-normal leading-none text-slate-500">{event.dateRange}</time>
        {typeof event.description === 'string' ? (
          <p className="text-sm text-dark-text-secondary">{event.description}</p>
        ) : (
          <ul className="list-disc list-inside text-sm text-dark-text-secondary space-y-1">
            {event.description.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        )}
        {event.technologies && event.technologies.length > 0 && (
           <div className="mt-3">
             <h4 className="text-xs font-semibold text-slate-400 mb-1">Key Technologies:</h4>
             <div className="flex flex-wrap gap-2">
               {event.technologies.map((tech) => (
                 <span key={tech} className="bg-slate-600/70 text-xs text-sky-300 px-2 py-0.5 rounded-full">
                   {tech}
                 </span>
               ))}
             </div>
           </div>
         )}
      </div>
    </li>
  );
};