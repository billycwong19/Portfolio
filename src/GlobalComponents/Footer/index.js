import React from "react";
import { ReturnToTop, FooterContainer, FooterReturnToTopContainer, FooterInfo, FooterIcons, FooterListItem, FooterCopyright } from "./Footer.style";
import { GithubIcon } from "../Navbar/Navbar.style";

export default function Footer({props}){
    return (
        <>
            <FooterReturnToTopContainer>
                    <ReturnToTop onClick={() => props.toggleHome()} />
                    <div><em>TOP</em></div>
            </FooterReturnToTopContainer>
        <FooterContainer>
            <FooterInfo>
                <p>Content</p>
                <FooterListItem to='projects'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >Projects</FooterListItem>
                <FooterListItem to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >About</FooterListItem>
                <FooterListItem to='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >Contact</FooterListItem>
            </FooterInfo>
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
            <FooterCopyright>&copy; 2022 William Wong</FooterCopyright>
        </FooterContainer>
    </>
    )

}