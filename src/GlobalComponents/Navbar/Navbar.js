import React, { useState } from "react";
import { NavbarContainer, NavbarLeft, NavLogo, NavList, NavListItem, NavHamburger, DropDownNavList, DropDownNavListContainer, Close, CurrentPageHighlight } from "./Navbar.style";
import ToggleButton from '../ToggleButton/ToggleButton'

export default function Navbar({ props }) {
    const [menuDropDown, setMenuDropDown] = useState(false)
    const displayDropDown = (event) => menuDropDown === false ? setMenuDropDown(true) : setMenuDropDown(false);
    
    return (
        <>

        <NavbarContainer>

            <NavbarLeft>
                <NavLogo src="./logo192.png" alt="rounded logo" />
            </NavbarLeft>
            {/* onload checks current theme and is checked if theme is dark */}
            { props.theme === 'light' ? 
            <ToggleButton toggle={ props.themeSwitcher } />
            :
            <ToggleButton toggle={ props.themeSwitcher } checked />
            }

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
            <NavHamburger onClick={() => displayDropDown()}>
            <hr />
            <hr />
            <hr />
            </NavHamburger>
            
        </NavbarContainer>
        
        {/* dropdown menu for mobile devices */}
        { menuDropDown === true && 
            <DropDownNavListContainer>

                <Close onClick={() => displayDropDown(false)}>close</Close>

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
                    <li>
                        <a href="https://github.com/billycwong19" target="_blank" rel="noopener noreferrer">
                        <img src='./images/greengithub.png' alt="green github icon" />
                        </a>
                        <a href='mailto:billycwong19@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img src='./images/gmailgreen.png' alt="gmail icon" />
                        </a>
                    </li>

                        :
                        
                    <li>
                        <a href="https://github.com/billycwong19" target="_blank" rel="noopener noreferrer">
                        <img src='./images/whitegithub.png' alt="green github icon" />
                        </a>
                        <a href='mailto:billycwong19@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img src='./images/whitegmail.png' alt="gmail icon" />
                        </a>
                    </li>
                }

                </DropDownNavList>
                
            </DropDownNavListContainer>
        }

        </>
    )
}