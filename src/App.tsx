import React, { useState } from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import loadUser from "./components/Firebase/Firebase";
import { User, dummyUser } from "./meta/meta";
import { useEffect } from "react";

const App: React.FC<any> = () => {
  const [user, setUser] = useState<User>(dummyUser);
  useEffect(() => {
    loadUser().then((user: User) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="App">
      <Navbar info={user.info} />
      <Home tagline={user.info.tagline}></Home>
      <Projects projects={user.projects}></Projects>
      <Skills skills={user.skills}></Skills>
      <Contact></Contact>
      <Footer />
    </div>
  );
};
export default App;
