import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-lg mx-auto">Showcasing my best work and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.images[currentImageIndex]} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-pink-100 text-pink-700 px-2 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 flex items-center gap-1"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
          
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 flex items-center gap-1"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;