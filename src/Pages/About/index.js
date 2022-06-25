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

export default function About() {
    return (
        <>
        <AboutBody id={'about'}>

            <AboutBanner src='./images/aboutbanner.png' alt="about banner" />

            <ResumeButton href="./images/resume.pdf" target="_blank" rel="noreferrer">
            <PaperClipIcon /> CV
            </ResumeButton>
            
            
            <ImageContainer>
                <ImageCard>
                    <div>Hey, this is me!</div>
                    <AboutImage src="./images/squareselfie.png" alt='avatar' />
                </ImageCard>
                <ImageCard>
                    <div>My two beautiful boys!</div>
                    <AboutImage src="./images/casperandtofu.png" alt='avatar' />
                </ImageCard>
                <ImageCard>
                    <div>My brilliant partner, Sasha.</div>
                    <AboutImage src="./images/sasha.png" alt='avatar' />
                </ImageCard>
            </ImageContainer>

        <Skills />
        <Bio />

        </AboutBody>
        </>
    )
}