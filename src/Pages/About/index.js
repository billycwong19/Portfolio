import React from "react";  
import { 
    AboutBody, 
    AboutBanner, 
    BioContainer,
    ImageContainer, 
    ImageCard, 
    AboutImage,
    PaperClipIcon, 
    ResumeButton } from "./About.style";
    
import Skills from "./Components/Skills";

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
                    <div>Hey, its me!</div>
                    <AboutImage src="./images/squareselfie.png" alt='avatar' />
                    
                </ImageCard>
                    <BioContainer>
                        <p>I am a self-taught developer with a curiosity towards pixel perfection and crafting satisfying UI/UX interfaces.</p>
                        <p>I have spent the past few years working under the guidance of Professor Internet and, recently, I have finished a three month bootcamp to blast over some technologies and practices that have helped me code with intent and with a new found love for CSS.</p>
                        <p>Currently, I am creating a React component library that contains highly reusable UI components such as a contact form, navbar, or calendar. The code base for the components are simple and I intend to expand on the features and accumulate a UI library for myself and the internet at large to use. </p>
                    </BioContainer>
                <ImageCard>
                    <div>My brilliant partner, Sasha.</div>
                    <AboutImage src="./images/sasha.png" alt='avatar' />
                </ImageCard>
                    <BioContainer>
                        <p>It goes without saying that I couldn't be where I am without the support of my loving partner, Sasha. Her love keeps me on my toes and without her I wouldn't have been able to pursue and continue my studies in web development. Our two little furry boys make sure I understand unconditional love and patience and I'd do anything to keep them happy and healthy. </p>
                    </BioContainer>
                <ImageCard>
                    <div>My two beautiful boys!</div>
                    <AboutImage src="./images/casperandtofu.png" alt='avatar' />
                </ImageCard>
            </ImageContainer>

            <iframe style={styles} title={'bandcamp'} src="https://bandcamp.com/EmbeddedPlayer/album=684327639/size=small/bgcol=ffffff/linkcol=0687f5/track=706095372/transparent=true/" seamless><a href="https://billywong.bandcamp.com/album/love-songs">Love Songs by Billy</a></iframe>

        <Skills />
        

        </AboutBody>
        </>
    )
}