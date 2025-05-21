import React from 'react';
import { Heart, Linkedin, Github, Code, AtSign, Phone } from 'lucide-react';

interface FooterProps {
  name: string;
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
    email: string;
    phone: string;
  };
}

const Footer: React.FC<FooterProps> = ({ name, links }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-primary-400 to-primary-500 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{name}</h3>
            <p className="text-primary-100">Full Stack Developer</p>
            <p className="mt-4 text-primary-200">Building beautiful and functional web experiences with passion and precision.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-100 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-primary-100 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="text-primary-100 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-primary-100 hover:text-white transition-colors duration-300">Skills</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-100 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={18} className="mr-2" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-100 hover:text-white transition-colors duration-300"
                >
                  <Github size={18} className="mr-2" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href={links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-100 hover:text-white transition-colors duration-300"
                >
                  <Code size={18} className="mr-2" />
                  <span>LeetCode</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${links.email}`}
                  className="flex items-center text-primary-100 hover:text-white transition-colors duration-300"
                >
                  <AtSign size={18} className="mr-2" />
                  <span>{links.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${links.phone}`}
                  className="flex items-center text-primary-100 hover:text-white transition-colors duration-300"
                >
                  <Phone size={18} className="mr-2" />
                  <span>{links.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-500 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-100 text-center">© {currentYear} {name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer