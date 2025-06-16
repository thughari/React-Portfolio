
import React from 'react';
import { SectionContainer, SectionTitle } from '../SectionContainer';
import { ProjectCard } from '../ProjectCard';
import { PROJECTS_DATA } from '../../constants';
import { BriefcaseIcon } from '../icons';

export const ProjectsSection: React.FC = () => {
  return (
    <SectionContainer id="projects" ariaLabelledBy="projects-title">
      <SectionTitle icon={<BriefcaseIcon className="w-8 h-8" />}><span id="projects-title">My Projects</span></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
             <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
