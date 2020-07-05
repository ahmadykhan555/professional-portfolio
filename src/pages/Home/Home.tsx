import React from "react";
import "./Home.scss";

interface HomeProps {
  tagline: string;
}

const Home: React.FC<HomeProps> = ({ tagline }) => {
  return (
    <div className="page home-page" id="home">
      <h1 className="animation-text__one animation-text">{tagline}</h1>
    </div>
  );
};

export default Home;
