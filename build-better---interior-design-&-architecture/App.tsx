import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Founders } from './components/Founders';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark-900 min-h-screen font-sans text-stone-300 selection:bg-gold-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="founders">
          <Founders />
        </div>

        <div id="process">
          <Process />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}