
import React from 'react';
import { NavItem, Project, Skill, TimelineEvent, SocialLink } from './types';
import { GitHubIcon, LinkedInIcon, EmailIcon, CodeIcon, BriefcaseIcon, AcademicCapIcon, UserIcon, LightbulbIcon, SparklesIcon, DatabaseIcon, CloudIcon, DeviceMobileIcon, ChartBarIcon, ServerIcon } from './components/icons';

export const MY_NAME = "Hari Thatikonda";
export const MY_TITLE = "Software Developer & AI Enthusiast";

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/thughari', icon: GitHubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/hari-thatikonda', icon: LinkedInIcon },
  { name: 'Email', url: 'mailto:haribabutatikonda3@gmail.com', icon: EmailIcon },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'Real-Time-Chat-Application',
    title: 'Real Time Chat Application',
    description: 'A simple group chat application built with Angular and web sockets',
    longDescription: 'This suite provides a user-friendly interface for interacting with the Gemini Pro model, enabling users to generate creative text formats, translate languages, write different kinds of creative content, and answer questions informatively. The project showcases skills in API integration, frontend development with React, and backend orchestration. (Note: API key for Gemini would be managed via environment variables in a real deployment).',
    imageUrl: './images/chat-window.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Gemini API', 'Tailwind CSS', 'Express.js'],
    liveLink: 'https://thughari.github.io/Socket-UI/',
    repoLink: 'https://github.com/thughari/Socket-UI',
    category: "Web App"
  },
  {
    id: 'mental-health-app',
    title: 'AI Enabled Mental Health Application',
    description: 'A secure (uses JWT) web application developed to assist people suffering from mental health issues. It collects users\' health data, analyzes it, and acts accordingly.',
    imageUrl: './images/mental-health.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API', 'Redux'],
    liveLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7313487738039611392/',
    repoLink: 'https://github.com/thughari/Mental-Health-App-Backend',
    category: "Web App"
  },
  {
    id: 'music-player',
    title: 'Music Player',
    description: 'A simple music player built with HTML CSS and JS',
    imageUrl: './images/music-player.png',
    technologies: ['Vue.js', 'Firebase', 'Chart.js', 'OAuth', 'GitHub API', 'Jira API'],
    liveLink: 'https://thughari.github.io/music-player/',
    repoLink: 'https://github.com/thughari/music-player',
    category: "Tooling"
  },
  {
    id: 'collaborative-editor',
    title: 'Collaborative Editor',
    description: 'An online collaborative editor where you can share the written notes and invite collaborators to your article',
    longDescription: 'Built with React Native, TaskMaster offers intuitive task creation, assignment, progress tracking, and real-time notifications. It features offline support and synchronization across devices.',
    imageUrl: './images/collab-editor.png',
    technologies: ['React Native', 'Firebase Realtime Database', 'Expo', 'Push Notifications'],
    liveLink: 'https://thughari.github.io/Collaborative-Editor-UI/',
    repoLink: 'https://github.com/thughari/CollabEditor',
    category: "Web App"
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'JavaScript (ES6+)', category: 'Languages', icon: CodeIcon },
  { name: 'TypeScript', category: 'Languages', icon: CodeIcon },
  { name: 'Python', category: 'Languages', icon: CodeIcon },
  { name: 'HTML5', category: 'Frontend', icon: CodeIcon },
  { name: 'CSS3/Sass', category: 'Frontend', icon: CodeIcon },
  { name: 'React', category: 'Frontend', icon: CodeIcon },
  { name: 'Vue.js', category: 'Frontend', icon: CodeIcon },
  { name: 'Tailwind CSS', category: 'Frontend', icon: CodeIcon },
  { name: 'Node.js', category: 'Backend', icon: ServerIcon },
  { name: 'Express.js', category: 'Backend', icon: ServerIcon },
  { name: 'Django', category: 'Backend', icon: ServerIcon },
  { name: 'MongoDB', category: 'Databases', icon: DatabaseIcon },
  { name: 'PostgreSQL', category: 'Databases', icon: DatabaseIcon },
  { name: 'Firebase', category: 'Databases', icon: DatabaseIcon },
  { name: 'Docker', category: 'DevOps', icon: CloudIcon },
  { name: 'Git & GitHub', category: 'Tools', icon: GitHubIcon },
  { name: 'Gemini API', category: 'AI/ML', icon: SparklesIcon },
  { name: 'Machine Learning Basics', category: 'AI/ML', icon: LightbulbIcon },
  { name: 'REST APIs', category: 'Backend', icon: CodeIcon },
  { name: 'GraphQL', category: 'Backend', icon: CodeIcon },
  { name: 'Jest / Vitest', category: 'Tools', icon: CodeIcon },
  { name: 'React Native', category: 'Mobile', icon: DeviceMobileIcon },
  { name: 'Data Visualization (D3.js, Recharts)', category: 'Frontend', icon: ChartBarIcon },
];

export const EXPERIENCE_DATA: TimelineEvent[] = [
  {
    id: 'exp3',
    title: 'Senior Software Engineer',
    institution: 'Innovatech Solutions Inc.',
    dateRange: 'Jan 2022 - Present',
    description: [
      'Led development of key features for a flagship SaaS product, improving user engagement by 20%.',
      'Mentored junior developers and conducted code reviews to maintain high code quality standards.',
      'Architected and implemented a microservices-based backend using Node.js and Docker.',
      'Integrated third-party APIs, including payment gateways and analytics services.',
      'Collaborated with product managers and designers in an Agile environment.'
    ],
    icon: BriefcaseIcon,
    technologies: ['React', 'Node.js', 'TypeScript', 'Docker', 'AWS', 'Microservices']
  },
  {
    id: 'exp2',
    title: 'Software Engineer',
    institution: 'TechForward Corp.',
    dateRange: 'Jun 2019 – Dec 2021',
    description: [
      'Developed and maintained full-stack web applications using the MERN stack.',
      'Contributed to the design and implementation of RESTful APIs.',
      'Participated in all phases of the software development lifecycle, from requirements gathering to deployment.',
      'Improved application performance by optimizing database queries and frontend rendering.'
    ],
    icon: BriefcaseIcon,
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux']
  },
  {
    id: 'exp1',
    title: 'Junior Developer',
    institution: 'CodeCrafters Ltd.',
    dateRange: 'Jul 2018 – May 2019',
    description: [
      'Assisted in developing and testing web applications using JavaScript and Python.',
      'Gained experience with version control systems (Git) and agile methodologies.',
      'Contributed to bug fixing and feature enhancements on existing projects.'
    ],
    icon: BriefcaseIcon,
    technologies: ['JavaScript', 'Python', 'HTML', 'CSS', 'Git']
  }
];

export const EDUCATION_DATA: TimelineEvent[] = [
  {
    id: 'edu2',
    title: 'M.S. in Computer Science',
    institution: 'Stanford University',
    dateRange: '2016 – 2018',
    description: 'Specialization in Artificial Intelligence. Thesis on Natural Language Processing techniques.',
    icon: AcademicCapIcon
  },
  {
    id: 'edu1',
    title: 'B.S. in Software Engineering',
    institution: 'University of California, Berkeley',
    dateRange: '2012 – 2016',
    description: 'Graduated with Honors. Focus on full-stack development and software architecture.',
    icon: AcademicCapIcon
  }
];

export const HERO_PROPS = {
    name: MY_NAME,
    title: MY_TITLE,
    subtitle: "I build innovative and efficient software solutions that solve real-world problems. Passionate about cutting-edge technologies and creating exceptional user experiences.",
    cta: {
        text: "View My Work",
        href: "#projects"
    },
    secondaryCta: {
        text: "Get In Touch",
        href: "#contact"
    },
    profileImageUrl: "./images/hari.jpg"
};

interface HighlightItem {
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const ABOUT_PROPS: {
  title: string;
  profileImageUrl: string;
  bio: string[];
  highlights: HighlightItem[];
} = {
  title: "About Me",
  profileImageUrl: "https://picsum.photos/seed/about_me/400/400", 
  bio: [
    `Hello! I'm ${MY_NAME}, a dedicated ${MY_TITLE} with a strong foundation in full-stack development and a keen interest in the transformative power of AI. With several years of experience in the tech industry, I've had the privilege of working on diverse projects, from scalable e-commerce platforms to intelligent content generation tools.`,
    "My journey into software development began with a fascination for how code can bring ideas to life. This passion led me to pursue advanced studies in Computer Science, where I specialized in Artificial Intelligence. I thrive on challenges and am constantly learning new technologies to enhance my skill set.",
    "I believe in writing clean, maintainable, and efficient code. Collaboration and communication are key to my work ethic, and I enjoy working in agile teams to deliver high-quality software. When I'm not coding, I enjoy exploring new AI research, contributing to open-source projects, and [Your Hobby Here, e.g., hiking, photography, playing a musical instrument]."
  ],
  highlights: [
    { text: "Expert in Full-Stack Development", icon: CodeIcon },
    { text: "Proficient with AI/ML (incl. Gemini API)", icon: SparklesIcon },
    { text: "Agile Methodologies & Team Collaboration", icon: UserIcon },
    { text: "Continuous Learner & Tech Enthusiast", icon: LightbulbIcon }
  ]
};