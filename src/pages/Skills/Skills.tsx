import React from "react";
import "./Skills.scss";
import { Skill, SkillCell } from "../../components/SkillCell/SkillCell";
import bg from "../../skills.jpg";

interface SkillsPageProps {
  skills: string[];
}

const Skills: React.FC<SkillsPageProps> = ({ skills }) => {
  return (
    <div
      className="page skills-page fit-content"
      id="skills"
      style={{
        backgroundImage: `linear-gradient(#060606, transparent), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h2 className="page-title">Skills</h2>
      <div
        className="skills-wrapper"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {skills.map((skill, index) => (
          <SkillCell key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
