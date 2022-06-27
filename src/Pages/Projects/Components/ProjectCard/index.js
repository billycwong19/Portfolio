import React, { useState } from "react"; 
import { 
    ProjectCardStyled, 
    ProjectCardHeader,
    ProjectHeaderLeft,
    ProjectHeaderRight,
    MoreInfo,
    ProjectTitle,
    ProjectDescription, 
    CloseIcon,
    ProjectIcon,
    ProjectImage, 
    ProjectLink, 
    ProjectRepo, 
    NewIcon } from "./ProjectCard.style";

export default function ProjectCard({ project }) {
    const { icon, name, link, repo, description, role, images, newProject } = project
    
    const [moreInfoPopUp, setMoreInfoPopUp] = useState(false)
    const showMoreInfoPopUp = () => setMoreInfoPopUp(!moreInfoPopUp)

    return(
        <>
        <ProjectCardStyled>
        <hr />
            <ProjectCardHeader>
                <ProjectHeaderLeft>

                { icon && 
                <ProjectIcon src={icon} alt={`${name} icon`} />
                }
                
                <ProjectTitle>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                    <h3>{name}</h3>
                    </a>
                    
                </ProjectTitle>

                    { newProject && 
                        <NewIcon />
                    }

                </ProjectHeaderLeft>
                
                <ProjectHeaderRight>
                    

                    <ProjectLink href={link} target="_blank" rel="noopener noreferrer">View</ProjectLink>
                    
                    { repo &&
                    <ProjectRepo href={repo} target="_blank" rel="noopener noreferrer">Repo</ProjectRepo>
                    }

                        <MoreInfo onClick={() => showMoreInfoPopUp()}>
                            <p>more info</p>
                        </MoreInfo>
                        <ProjectDescription moreInfoPopUp={ moreInfoPopUp } onClick={() => showMoreInfoPopUp()}>
                            <div>
                            <CloseIcon />
                            <p>{description}</p>
                            {role}
                        
                            { images && images.map((image, i) => 
                                <ProjectImage src={image} alt={`image ${name}`} key={i} />
                            )}

                            </div>
                        </ProjectDescription>
                        
                    
                </ProjectHeaderRight>   
            </ProjectCardHeader>
        </ProjectCardStyled>
        </>
    )
}