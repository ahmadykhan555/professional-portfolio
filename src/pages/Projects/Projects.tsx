import React from "react";
import "./Projects.scss";
import { ProjectTile } from "../../components/ProjectTile/ProjectTile";
import { Project as PR } from "../../meta/meta";

interface ProjectSectionProps {
  projects: PR[];
}

const Projects: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <div className="page projects-page fit-content" id="projects">
      <h2 className="page-title">Projects</h2>
      <div className="projects-list-wrapper">
        {projects.map((project: PR, index) => (
          <ProjectTile
            key={index}
            title={project.title}
            description={project.description}
            thumbnail={project.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
