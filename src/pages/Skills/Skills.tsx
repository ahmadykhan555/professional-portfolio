import React from "react";
import "./Skills.scss";
import { Skill, SkillCell } from "../../components/SkillCell/SkillCell";
import bg from "../../skills.jpg";

const Skills: React.FC<any> = () => {
  const skills: Skill[] = [
    { name: "Angular" },
    { name: "React" },
    { name: "Ionic" },
    { name: "VueJs" },
    { name: "NodeJs(req, res)" },
    { name: "Typescript();" },
    { name: "Javascript()" },
    { name: "@Sass" },
    { name: "<HTML5/>" },
    { name: "#CSS3" }
  ];
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
          <SkillCell key={index} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
