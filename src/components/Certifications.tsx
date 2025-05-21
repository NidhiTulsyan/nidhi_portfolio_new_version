import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../data/portfolioData';

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-lg mx-auto">Professional certifications and achievements</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <ul className="space-y-6">
              {certifications.map((certification) => (
                <li key={certification.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Award className="text-pink-600" size={24} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start flex-col sm:flex-row">
                      <h3 className="text-lg font-semibold text-gray-800">{certification.title}</h3>
                      <span className="text-sm text-gray-500 mt-1 sm:mt-0">{certification.date}</span>
                    </div>
                    <p className="text-gray-600">{certification.issuer}</p>
                    
                    {certification.link && (
                      <a 
                        href={certification.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 text-sm"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;