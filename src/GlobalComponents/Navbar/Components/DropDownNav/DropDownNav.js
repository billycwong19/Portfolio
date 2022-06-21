import React from "react";
import { NavListItem, DropDownNavList, DropDownNavListContainer, Close } from "../../Navbar.style";

export default function Navbar({props}) {
    
    return (
        <>
        {/* dropdown menu for mobile devices */}
            <DropDownNavListContainer>

                <Close onClick={() => props.displayDropDown(false)}>close</Close>

                <DropDownNavList>

                    <NavListItem onClick={() => {
                        props.setCurrentPage('Projects');
                        props.displayDropDown(false)}}>
                        Projects</NavListItem>

                    <NavListItem onClick={() => {
                        props.setCurrentPage('About');
                        props.displayDropDown(false)}}>
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
        </>
    )
}