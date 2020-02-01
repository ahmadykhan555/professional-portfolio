import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <div className="navbar def-padding" style={{ background: 'black' }}>
        <div className="intro">
          <h3 className="dev-name">Ahmad Yar Khan</h3>
          <h5 className="dev-expertise">Full stack developer</h5>
        </div>
        <div className="links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Projects</a>
          <a href="#" className="nav-link">Skills</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </div>
      <Home></Home>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
export default App;
