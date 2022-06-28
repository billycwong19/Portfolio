import React from "react";  
import { 
    AboutBody, 
    AboutBanner, 
    BandcampLink,
    ImageContainer, 
    ImageCard, 
    AboutImage,
    PaperClipIcon, 
    ResumeButton } from "./About.style";
    
import Skills from "./Components/Skills";
import Bio from './Components/Bio'

const styles = {
    border: 0,
    width: '100%',
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
                    <div>Hey, I'm William!</div>
                    <AboutImage src="./images/squareselfie.png" alt='avatar' />
                </ImageCard>
                <ImageCard>
                    <div>This is my brilliant partner, Sasha.</div>
                    <AboutImage src="./images/sasha.png" alt='avatar' />
                </ImageCard>
                <ImageCard>
                    <div>And, our two beautiful boys!</div>
                    <AboutImage src="./images/casperandtofu.png" alt='avatar' />
                </ImageCard>
            </ImageContainer>

            <Bio />
            <BandcampLink>
            <iframe style={styles} title={'bandcamp'} src="https://bandcamp.com/EmbeddedPlayer/album=684327639/size=small/bgcol=ffffff/linkcol=0687f5/track=706095372/transparent=true/" seamless><a href="https://billywong.bandcamp.com/album/love-songs">Love Songs by Billy</a></iframe>
            </BandcampLink>

        <Skills />
        
        </AboutBody>
        </>
    )
}