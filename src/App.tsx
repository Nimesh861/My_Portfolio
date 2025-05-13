import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';

function App() {
  // Initialize the Easter egg key tracking
  useEffect(() => {
    (window as any).lastKey = '';
    (window as any).secondLastKey = '';
    (window as any).thirdLastKey = '';
    (window as any).lastKeyTime = 0;
  }, []);

  return (
    <div className="bg-darker text-light min-h-screen">
      <Sidebar />
      
      <main className="md:ml-16 overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
      <EasterEgg />
    </div>
  );
}

export default App;