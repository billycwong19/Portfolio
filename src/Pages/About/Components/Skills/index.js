import React from "react";  
import { 
    SkillsContainer, 
    SkillsCard, 
    ReactIcon, 
    StyledIcon, 
    HtmlIcon, 
    CssIcon,
    NodeIcon, 
    MongoIcon, 
    FigmaIcon, 
    HandlebarsIcon,
    CommunicateIcon, 
    TeamIcon,
    DetailIcon,
    InclusiveIcon,
    HeartIcon,
    MusicIcon,
    PlantIcon, 
    FeedbackIcon } from "./Skills.style";

export default function Skills() {
    return (
        <>
        <SkillsContainer>
            <SkillsCard>
                <div>
                    <h1><em>Hard Skills</em></h1>
                </div>
                <div>
                    <ReactIcon />
                    React
                </div>
                <div>
                    <StyledIcon />
                    Styled-Components
                </div>
                <div>
                    <NodeIcon />
                    Node.js
                </div>
                <div>
                    <MongoIcon />
                    MongoDB
                </div>
                <div>
                    <FigmaIcon />
                    Figma
                </div>
                <div>
                    <HandlebarsIcon />
                    Handlebars.js
                </div>
                <div>
                    <HtmlIcon />
                    HTML
                </div>
                <div>
                    <CssIcon />
                    CSS
                </div>
            </SkillsCard>
            <SkillsCard>
                <div>
                    <h1><em>Soft Skills</em></h1>
                </div>
                <div>
                    <PlantIcon />
                    Constantly Growing
                </div>
                <div>
                    <CommunicateIcon />
                    Let's talk! (or not)
                </div>
                <div>
                    <TeamIcon />
                    Team-player
                </div>
                <div>
                    <DetailIcon />
                    Detail-oriented-perfectionist
                </div>
                <div>
                    <InclusiveIcon />
                    Inlclusion
                </div>
                <div>
                    <HeartIcon />
                    Patience and Empathy
                </div>
                <div>
                    <MusicIcon />
                    Musician/Music Lover
                </div>
                <div>
                    <FeedbackIcon />
                    Thrives on Feedback
                </div>
                
            </SkillsCard>
        </SkillsContainer>
        </>
    )
}