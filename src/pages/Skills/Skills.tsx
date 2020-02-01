import React from 'react'
import './Skills.scss';
import { Skill, SkillCell } from '../../components/SkillCell/SkillCell';
import bg from '../../skills.jpg';

const Skills: React.FC<any> = () => {
    const skills: Skill[] = [
        {name: '<HTML5/>'},
        {name: '#CSS3'},
        {name: 'Javascript()'},
        {name: 'Typescript();'},
        {name: '@Sass'},
        {name: 'NodeJs(req, res)'},
        {name: 'ReactJs'},
        {name: 'Angular'},
        {name: 'Ionic'},
        {name: 'VueJs'},
    ]
    return (
        <div className="skills-page def-padding" style={{backgroundImage: `linear-gradient(#060606, transparent), url(${bg})`, backgroundSize: 'cover', backgroundPosition:'center'}}>
            <h2 className="page-title">Skills</h2>
            <div className="skills-wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {skills.map((skill, index) => <SkillCell key={index} name={skill.name}/>)}
            </div>
        </div>
    );
}

export default Skills;