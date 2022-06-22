import React from "react";
import { FooterContainer, FooterInfo, FooterIcons, FooterCopyright } from "./Footer.style";
import { GithubIcon } from "../Navbar/Navbar.style";

export default function Footer({props}){
    return (
        <FooterContainer>
            <FooterInfo>
                <p>Content</p>
                <li onClick={() => props.setCurrentPage('Projects')}>Projects</li>
                <li onClick={() => props.setCurrentPage('About')}>About</li>
                <li>Contact</li>
            </FooterInfo>
            <FooterIcons>

            { props.theme === 'light' ?
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
    )
}