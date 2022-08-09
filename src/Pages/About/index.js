import React from "react";  
import { 
    AboutBody, 
    AboutBanner, 
    ImageContainer, 
    ImageCard, 
    AboutImage,
    PaperClipIcon, 
    ResumeButton } from "./About.style";
    
import Skills from "./Components/Skills";
import Bio from './Components/Bio'
import {FooterIcons} from '../../GlobalComponents/Footer/Footer.style'
import { GithubIcon } from "../../GlobalComponents/Navbar/Navbar.style";


export default function About({ props }) {
    return (
        <>
        
        <AboutBody id={'about'}>
            <AboutBanner src='./images/aboutbanner.png' alt="about banner" />
        
            <ImageContainer>
                <ImageCard>
                    <div>Hey, I'm William!</div>
                    <AboutImage src="./images/squareselfie.png" alt='avatar' />
                </ImageCard>
            </ImageContainer>
            <ResumeButton href="./images/resume.pdf" target="_blank" rel="noreferrer">
                <PaperClipIcon /> CV
            </ResumeButton>
            <FooterIcons>
            { props.themeState === 'light' ?
                <div>
                    <a href="https://github.com/billycwong19" target="_blank" rel="noopener noreferrer">
                    <GithubIcon src='./images/greengithub.png' alt="green github icon" />
                    </a>
                    <a href='mailto:billycwong19@gmail.com' target="_blank" rel="noopener noreferrer">
                    <img src='./images/gmailgreen.png' alt="gmail icon" />
                    </a>
                </div>
                    :
                <div>
                    <a href="https://github.com/billycwong19" target="_blank" rel="noopener noreferrer">
                    <GithubIcon src='./images/whitegithub.png' alt="green github icon" />
                    </a>
                    <a href='mailto:billycwong19@gmail.com' target="_blank" rel="noopener noreferrer">
                    <img src='./images/whitegmail.png' alt="gmail icon" />
                    </a>
                </div>
            }

            </FooterIcons>

            <Bio />

        <Skills />
        
        </AboutBody>
        </>
    )
}