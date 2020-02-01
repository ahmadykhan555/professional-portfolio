import React from 'react';
import './ProjectTile.scss';

import bg from '../../bg2.jpg';

export interface Project {
    title: string;
    description: string;
    thumbnail?: string;
}


export const ProjectTile: React.FC<Project> = (props: Project) => {
    const titleStyle = {
        backgroundImage: `linear-gradient(to right, black, transparent), url(${props.thumbnail || bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: 'white',
        fontWeight: 900
    }
    return(
        <div className="project-tile" style={titleStyle}>
            <h2 className="project-title">{props.title}</h2>
            <h4 className="short-desc">{props.description}</h4>
        </div>
    );
}