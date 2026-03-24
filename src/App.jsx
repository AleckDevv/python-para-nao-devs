import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import LearningOutcomes from './components/LearningOutcomes';
import Curriculum from './components/Curriculum';
import MiniProjects from './components/MiniProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <Hero />
      <PainPoints />
      <LearningOutcomes />
      <MiniProjects />
      <Curriculum />
      <Footer />
    </div>
  );
}

export default App;
