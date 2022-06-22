import React from "react"; 
import { ProjectCardStyled, ProjectCardHeader, ProjectCardBody, ProjectCardFooter } from "./ProjectCard.style";

export default function ProjectCard() {
    return(
        <>
        <ProjectCardStyled>
            <ProjectCardHeader>
            </ProjectCardHeader>
            <ProjectCardBody>
                hello
            </ProjectCardBody>
            <ProjectCardFooter>
                whats up
            </ProjectCardFooter>
        </ProjectCardStyled>
        </>
    )
}