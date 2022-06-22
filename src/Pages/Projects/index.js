import React from "react";
import { ProjectsBody, ProjectsBanner, ProjectsContainer } from "./Projects.style";
import ProjectCard from './Components/ProjectCard'


export default function Projects(){
    return(
        <ProjectsBody>
            <ProjectsBanner src='./images/projectsbanner.png' />

            <ProjectsContainer>

            <ProjectCard />

            </ProjectsContainer>
        </ProjectsBody>
    )
}