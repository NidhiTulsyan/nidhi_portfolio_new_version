import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';


interface HeroProps {
  name: string;
  title: string;
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, profileImage }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add('animate-fadeUp');
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border-4 border-white shadow-xl mx-auto">
                <img 
                  src={profileImage} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 md:w-24 md:h-24 bg-yellow-100 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2" ref={textRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-pink-600">{name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">{title}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Building beautiful web experiences with passion and precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToAbout}
                className="bg-pink-500 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 shadow-md"
              >
                Explore My Work
              </button>
              <a 
                href="#contact" 
                className="border border-pink-600 text-pink-600 hover:bg-blue-50 px-6 py-3 rounded-full transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-pink-600 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;