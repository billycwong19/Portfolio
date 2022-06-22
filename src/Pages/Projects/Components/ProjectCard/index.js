import React from "react"; 
import { ProjectCardStyled, ProjectCardHeader, ProjectTitle, ProjectDescription, ProjectIcon, ProjectCardBody, ProjectScreenShot, ProjectCardFooter, ProjectLink, ProjectRepo, NewIcon } from "./ProjectCard.style";

export default function ProjectCard({project}) {
    return(
        <>
        
        <ProjectCardStyled>
        <hr />
            <ProjectCardHeader>
                { project.icon && 
                <ProjectIcon src={project.icon} alt={`${project.name} icon`} />
                }
                <ProjectTitle>
                    {project.name}
                    
                    <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectTitle>

            </ProjectCardHeader>

            <ProjectCardBody>
                <ProjectScreenShot src={project.screenshot} alt={`${project.name} screenshot`} />
            </ProjectCardBody>
            
            <ProjectCardFooter>
                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">View</ProjectLink>
                { project.repo &&
                <ProjectRepo href={project.repo} target="_blank" rel="noopener noreferrer">Repo</ProjectRepo>
                }
                { project.new && 
                    <div>
                    <NewIcon />
                    <h2>NEW</h2>
                    </div>
                }
            </ProjectCardFooter>
        </ProjectCardStyled>
        </>
    )
}