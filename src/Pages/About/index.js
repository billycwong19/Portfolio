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
import {FooterIcons} from '../../GlobalComponents/Footer/Footer.style'
import { GithubIcon } from "../../GlobalComponents/Navbar/Navbar.style";

const styles = {
    border: 0,
    width: '100%',
    height: '42px',
    marginTop: '2em'
}

export default function About({ props }) {
    return (
        <>
        
        <AboutBody id={'about'}>
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

            <AboutBanner src='./images/aboutbanner.png' alt="about banner" />
        
            <ImageContainer>
                <ImageCard>
                    <div>Hey, I'm William!</div>
                    <AboutImage src="./images/squareselfie.png" alt='avatar' />
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