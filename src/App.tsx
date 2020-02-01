import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <Home></Home>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
export default App;
