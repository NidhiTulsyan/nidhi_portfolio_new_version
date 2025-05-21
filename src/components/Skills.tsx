import React from 'react';
import { Skill } from '../data/portfolioData';
import { 
  Code2, Database, Globe, Server, 
  Laptop, Cloud, Terminal, Palette,
  GitBranch, Monitor, Layout, Settings
} from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

const getIconForSkill = (category: string) => {
  switch (category.toLowerCase()) {
    case 'frontend':
      return Monitor;
    case 'backend':
      return Server;
    case 'database':
      return Database;
    case 'devops & tools':
      return Cloud;
    default:
      return Code2;
  }
};

const getIconForTechnology = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return Layout;
    case 'git':
      return GitBranch;
    case 'docker':
      return Terminal;
    case 'css3':
      return Palette;
    case 'aws':
      return Cloud;
    default:
      return Settings;
  }
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-lg mx-auto">Technologies and tools I work with</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {skills.map((skillCategory) => (
            <div 
              key={skillCategory.category}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center mb-8">
                {React.createElement(getIconForSkill(skillCategory.category), {
                  size: 28,
                  className: "text-primary-500 mr-3"
                })}
                <h3 className="text-2xl font-bold text-gray-800">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skillCategory.items.map((skill) => {
                  const Icon = getIconForTechnology(skill);
                  return (
                    <div
                      key={skill}
                      className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-6">
                        <div className="flex flex-col items-center">
                          <Icon className="w-8 h-8 mb-3 text-primary-500 group-hover:text-primary-600 transition-colors duration-300" />
                          <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 text-center transition-colors duration-300">
                            {skill}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;