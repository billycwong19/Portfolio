import React from "react";  
import { 
    SkillsContainer, 
    SkillsLegend,
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
    FeedbackIcon,
    SkillIcon } from "./Skills.style";

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
                    React<SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <StyledIcon />
                    Styled-Components <SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <NodeIcon />
                    Node.js <SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <MongoIcon />
                    MongoDB <SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <FigmaIcon />
                    Figma <SkillIcon />
                </div>
                <div>
                    <HandlebarsIcon />
                    Handlebars.js <SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <HtmlIcon />
                    HTML <SkillIcon /> <SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <CssIcon />
                    CSS <SkillIcon /> <SkillIcon />
                </div>
            </SkillsCard>
            <SkillsLegend>
            <div>
            Learning <SkillIcon />
            </div>
            <div>
            Working <SkillIcon /> <SkillIcon />
            </div>
            <div>
            Pro <SkillIcon /> <SkillIcon /> <SkillIcon />
            </div>
            </SkillsLegend>
            <br />
            <br />
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