import React from "react"; 
import { 
    SkillsContainer, 
    SkillsCard, 
    ReactIcon, 
    StyledIcon, 
    HandlebarsIcon,
    NodeIcon, 
    MongoIcon, 
    NextIcon,
    FigmaIcon, 
    JsIcon, 
    MysqlIcon,
    BulmaIcon,
    BootstrapIcon,
    CommunicateIcon, 
    TeamIcon,
    DetailIcon,
    InclusiveIcon,
    HeartIcon,
    MusicIcon,
    PlantIcon, 
    FeedbackIcon,
    ExpressIcon } from "./Skills.style";

export default function Skills() {
    return (
        <>
        <SkillsContainer>

            <SkillsCard>
                    <h1><em>Main Languages</em></h1>
                <div>
                    <MongoIcon />
                    MongoDB 
                </div>
                <div>
                    <ExpressIcon />
                    Express
                </div>
                <div>
                    <ReactIcon />
                    React
                </div>
                <div>
                    <NodeIcon />
                    Node.js
                </div>
                <div>
                    <StyledIcon />
                    Styled-Components
                </div>
                <div>
                    <JsIcon />
                    JavaScript 
                </div>
                </SkillsCard>

                <SkillsCard>
                <h1><em>Secondary</em></h1>
                <div>
                    <MysqlIcon />
                    MySQL
                </div>
                <div>
                    <NextIcon />
                    Next
                </div>
                <div>
                    <HandlebarsIcon />
                    Handlebars 
                </div>
                <div>
                    <BootstrapIcon />
                    Bootstrap
                </div>
                <div>
                    <BulmaIcon />
                    Bulma 
                </div>
                <div>
                    <FigmaIcon />
                    Figma 
                </div>
            </SkillsCard>

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
                    <FeedbackIcon />
                    Thrives on Feedback
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
            </SkillsCard>

        </SkillsContainer>
        </>
    )
}