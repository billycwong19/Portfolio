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

const styles = {
    border: 0,
    width: '66%',
    height: '42px',
    marginTop: '2em'
}

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

            <iframe style={styles} title={'bandcamp'} src="https://bandcamp.com/EmbeddedPlayer/album=684327639/size=small/bgcol=ffffff/linkcol=0687f5/track=706095372/transparent=true/" seamless><a href="https://billywong.bandcamp.com/album/love-songs">Love Songs by Billy</a></iframe>

        <Skills />
        <Bio />

        </AboutBody>
        </>
    )
}