import React from 'react';

interface AboutProps {
  about: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-lg mx-auto">Who I am and what I do</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-pink-50 rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              {about}
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-pink-600">3+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div> */}
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-pink-600">20+</h3>
                <p className="text-gray-600">Projects</p>
              </div>
              {/* <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-pink-600">15+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div> */}
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-pink-600">5+</h3>
                <p className="text-gray-600">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;