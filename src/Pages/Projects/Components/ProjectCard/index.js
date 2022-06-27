import React from "react"; 
import { 
    ProjectCardStyled, 
    ProjectCardHeader,
    ProjectHeaderLeft,
    ProjectHeaderRight,
    MoreInfo,
    ProjectTitle,
    ProjectDescription, 
    ProjectIcon,
    ProjectScreenShot, 
    ProjectLink, 
    ProjectRepo, 
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

                    { project.new && 
                        <NewIcon />
                    }

                </ProjectHeaderLeft>
                
                <ProjectHeaderRight>
                    

                    <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">View</ProjectLink>
                    
                    { project.repo &&
                    <ProjectRepo href={project.repo} target="_blank" rel="noopener noreferrer">Repo</ProjectRepo>
                    }

                        <MoreInfo>more info 
                        <ProjectDescription className="description">
                            <div>
                            <p>{project.description}</p>
                            <p>{project.role}</p>
                            <ProjectScreenShot src={project.screenshot} alt={`${project.name} screenshot`} />
                            </div>
                        </ProjectDescription>
                        </MoreInfo>
                    
                </ProjectHeaderRight>   
            </ProjectCardHeader>
        </ProjectCardStyled>
        </>
    )
}