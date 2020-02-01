import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home></Home>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer/>
    </div>
  );
}
export default App;
