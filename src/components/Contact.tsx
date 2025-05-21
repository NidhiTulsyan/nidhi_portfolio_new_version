import React from 'react';
import { Linkedin, Github, AtSign, Phone, FileText, Code } from 'lucide-react';

interface ContactProps {
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
    email: string;
    phone: string;
  };
  resume: string;
}

const Contact: React.FC<ContactProps> = ({ links, resume }) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-lg mx-auto">Let's connect and discuss opportunities</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-50 rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <ul className="space-y-4">
                  <li>
                    <a 
                      href={`mailto:${links.email}`}
                      className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300"
                    >
                      <AtSign size={20} className="mr-2" />
                      <span>{links.email}</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`tel:${links.phone}`}
                      className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300"
                    >
                      <Phone size={20} className="mr-2" />
                      <span>{links.phone}</span>
                    </a>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-6">Professional Links</h3>
                
                <ul className="space-y-4">
                  <li>
                    <a 
                      href={links.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300"
                    >
                      <Linkedin size={20} className="mr-2" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href={links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300"
                    >
                      <Github size={20} className="mr-2" />
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href={links.leetcode} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300"
                    >
                      <Code size={20} className="mr-2" />
                      <span>LeetCode</span>
                    </a>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <a 
                    href={resume} 
                    download
                    className="inline-flex items-center bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-300"
                  >
                    <FileText size={20} className="mr-2" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Send a Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;