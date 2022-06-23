import React from "react"; 
import { 
    ProjectCardStyled, 
    ProjectCardHeader,
    ProjectHeaderLeft,
    ProjectHeaderRight,
    ProjectTitle,
    ProjectDescription, 
    ProjectIcon,
    ProjectCardBody, 
    ProjectScreenShot, 
    ProjectCardFooter, 
    ProjectLink, 
    ProjectRepo, 
    NewIconContainer,
    NewIcon } from "./ProjectCard.style";

export default function ProjectCard({project}) {
    return(
        <>
        <ProjectCardStyled>
        <hr />
            <ProjectCardHeader>
                <ProjectHeaderLeft>
                { project.icon && 
                <ProjectIcon src={project.icon} alt={`${project.name} icon`} />
                }
                <ProjectTitle>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h3>{project.name}</h3>
                    </a>
                </ProjectTitle>
                </ProjectHeaderLeft>
                { project.new && 
                    <NewIconContainer>
                    <NewIcon />
                    <h2>NEW</h2>
                    </NewIconContainer>
                }
                <ProjectHeaderRight>
                    <p>more info 
                    <ProjectDescription className="description">{project.description}</ProjectDescription>
                    </p>
                    
                </ProjectHeaderRight>   
            </ProjectCardHeader>

            <ProjectCardBody>
                <ProjectScreenShot src={project.screenshot} alt={`${project.name} screenshot`} />
            </ProjectCardBody>
            
            <ProjectCardFooter>
                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">View</ProjectLink>
                { project.repo &&
                <ProjectRepo href={project.repo} target="_blank" rel="noopener noreferrer">Repo</ProjectRepo>
                }
                
            </ProjectCardFooter>
        </ProjectCardStyled>
        </>
    )
}