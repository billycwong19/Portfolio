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
    BootstrapIcon,
    AbletonIcon,
    DrumIcon,
    GuitarIcon,
    MacOsIcon,
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
                <>
                    <h1><em>Hard Skills</em></h1>
                </>
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
                <div>
                    <BootstrapIcon />
                    Bootstrap <SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <AbletonIcon />
                    Ableton Live <SkillIcon /> <SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <MacOsIcon />
                    mac OS <SkillIcon /> <SkillIcon /> <SkillIcon />
                </div>
                <div>
                    <DrumIcon />
                    Drumset <SkillIcon /> <SkillIcon /> 
                </div>
                <div>
                    <GuitarIcon />
                    Guitar <SkillIcon /> <SkillIcon /> 
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
                <>
                    <h1><em>Soft Skills</em></h1>
                </>
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
                    Music Lover
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