import React from 'react';
import './SkillCell.scss';

export interface Skill {
    name: string;
}

export const SkillCell: React.FC<Skill> = (props: Skill) => {
    return(
        <div className="skill-cell">
            <div className="skill-name">
            <h5>{props.name}</h5></div>
        </div>
    );
}