import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData';

function App() {
  // Update the document title
  useEffect(() => {
    document.title = `${portfolioData.name} | Portfolio`;
  }, []);

  // Navigation links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="font-sans">
      <Navbar links={navLinks} />
      
      <Hero 
        name={portfolioData.name} 
        title={portfolioData.title} 
        profileImage={portfolioData.profileImage} 
      />
      
      <About about={portfolioData.about} />
      
      <Projects projects={portfolioData.projects} />
      
      <Skills skills={portfolioData.skills} />
      
      <Certifications certifications={portfolioData.certifications} />
      
      <Contact links={portfolioData.links} resume={portfolioData.resume} />
      
      <Footer name={portfolioData.name} links={portfolioData.links} />
    </div>
  );
}

export default App;