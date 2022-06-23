import React from "react";
import { ProjectsBody, ProjectsBanner, ProjectsContainer } from "./Projects.style";
import ProjectCard from './Components/ProjectCard'
import projects from './data'

export default function Projects(){
    return(
        <ProjectsBody id={'projects'}>
            <ProjectsBanner src='./images/projectsbanner.png' />

            <ProjectsContainer>
                
            { projects.map((project, i) => 
            <ProjectCard project={project} key={i} />
            )}

            </ProjectsContainer>
        </ProjectsBody>
    )
}