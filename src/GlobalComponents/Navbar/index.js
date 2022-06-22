import React, { useState } from "react";
import { 
    NavbarContainer, 
    NavbarLeft, 
    NavLogo, 
    LightDarkContainer,
    Light,
    Dark,
    NavList, 
    NavListItem, 
    NavHamburger, 
    DropDownNavList, 
    DropDownNavListContainer, 
    CloseContainer, 
    CloseIcon, 
    CurrentPageHighlight, 
    GithubIcon, 
    IconsContainer } from "./Navbar.style";
import ToggleButton from '../ToggleButton'


export default function Navbar({ props }) {
    const [menuDropDown, setMenuDropDown] = useState(false)
    const displayDropDown = (event) => menuDropDown === false ? setMenuDropDown(true) : setMenuDropDown(false);
    const isChecked = () => props.theme === 'dark' ? `checked` : ``;
    
    return (
        <>

        <NavbarContainer>

            <NavbarLeft>
                <NavLogo src="./logo192.png" alt="rounded logo" />
            </NavbarLeft>

            {/* onload checks current theme and is checked if theme is dark */}
            <LightDarkContainer>
                <Light />
            <ToggleButton toggle={ props.themeSwitcher } isChecked={isChecked} />
                <Dark>Dark</Dark>
            </LightDarkContainer>
            {/* displays only if screensize is larger than 414 */}

            <NavList>

                { props.currentPage === 'Projects' &&
                <>
                <CurrentPageHighlight onClick={() => props.setCurrentPage('Projects')}>Projects</CurrentPageHighlight>
                <NavListItem onClick={() => props.setCurrentPage('About')}>About</NavListItem>
                </>
                }

                { props.currentPage === 'About' &&
                <>
                <NavListItem onClick={() => props.setCurrentPage('Projects')}>Projects</NavListItem>
                <CurrentPageHighlight onClick={() => props.setCurrentPage('About')}>About</CurrentPageHighlight>
                </>
                }
                
            </NavList>

            {/* displays only if screensize is smaller than 414px */}

            <NavHamburger onClick={() => displayDropDown()} />
            
        </NavbarContainer>
        
        {/* dropdown menu for mobile devices */}
        
            <DropDownNavListContainer menuDropDown={menuDropDown} onClick={() => displayDropDown(false)}>

                <CloseContainer onClick={() => displayDropDown(false)}><i><CloseIcon /></i></CloseContainer>

                <DropDownNavList>

                    <NavListItem onClick={() => {
                        props.setCurrentPage('Projects');
                        displayDropDown(false)}}>
                        Projects</NavListItem>

                    <NavListItem onClick={() => {
                        props.setCurrentPage('About');
                        displayDropDown(false)}}>
                        About</NavListItem>

                { props.theme === 'light' ?
                    <IconsContainer>
                        <a href="https://github.com/billycwong19" target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                        </a>
                        <a href='mailto:billycwong19@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img src='./images/gmailgreen.png' alt="gmail icon" />
                        </a>
                    </IconsContainer>

                        :
                        
                    <IconsContainer>
                        <a href="https://github.com/billycwong19" target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                        </a>
                        <a href='mailto:billycwong19@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img src='./images/whitegmail.png' alt="gmail icon" />
                        </a>
                    </IconsContainer>
                }

                </DropDownNavList>
                
            </DropDownNavListContainer>
     

        </>
    )
}