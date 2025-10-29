import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
