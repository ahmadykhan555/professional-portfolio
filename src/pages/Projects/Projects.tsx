import React from "react";
import "./Projects.scss";
import { ProjectTile, Project } from "../../components/ProjectTile/ProjectTile";
import shopping from "../../shopping.jpg";
import video from "../../video-conf.jpg";
import rx from "../../rxjs.jpg";
import gas from "../../gas.jpg";
import tech1 from "../../tech-1.jpg";
import idea from "../../idea.jpg";
import idea2 from "../../idea-2.jpg";
import portal from "../../portal-1.jpg";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "OneScreen Hype",
      description: "Video conferencing solution for enterprises",
      thumbnail: video
    },
    {
      title: "BITSecure",
      description: "Innovative shopping solution",
      thumbnail: shopping
    },
    {
      title: "RxJS Operators",
      description: "Interactive console to see RxJS operators in action",
      thumbnail: rx
    },
    {
      title: "Project 2",
      description: "Corporate Partners",
      thumbnail: portal
    },
    {
      title: "Project 1",
      description: "Gas delivery made easy!",
      thumbnail: gas
    },
    {
      title: "Project 3",
      description: "Independent Service Providers",
      thumbnail: tech1
    },
    {
      title: "YardDog",
      description: "Vehicle Tracking system for enterprises",
      thumbnail: rx
    },
    {
      title: "HireNinja",
      description: "Hire the best coding ninjas!",
      thumbnail: idea
    },
    { title: "Calx", description: "Calculated X-Factor", thumbnail: idea2 }
  ];
  return (
    <div className="page projects-page fit-content" id="projects">
      <h2 className="page-title">Projects</h2>
      <div className="projects-list-wrapper">
        {projects.map((project: Project, index) => (
          <ProjectTile
            key={index}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
