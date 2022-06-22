import React, { useState, useEffect } from "react";
import { ProjectsBody, ProjectsBanner, ProjectsContainer } from "./Projects.style";
import ProjectCard from './Components/ProjectCard'
import projects from './data'

export default function Projects(){
    return(
        <ProjectsBody>
            <ProjectsBanner src='./images/projectsbanner.png' />

            <ProjectsContainer>
                
            { projects.map((project, i) => 
            <ProjectCard project={project} key={i} />
            )}

            </ProjectsContainer>
        </ProjectsBody>
    )
}