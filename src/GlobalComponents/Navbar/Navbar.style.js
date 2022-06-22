import styled from 'styled-components'
import { Close } from '@styled-icons/evil/Close'
import { MenuAlt3 } from '@styled-icons/heroicons-outline/MenuAlt3'
import { Github } from '@styled-icons/boxicons-logos/Github'

export const NavbarContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4em;
    position: fixed;
    top: 0;
    z-index: 1;
    
`
export const NavbarLeft = styled.div`
    display: flex;
    align-items: center;
`

export const NavLogo = styled.img`
    height: 44px;
    cursor: pointer;
    margin-left: .5em;
`

export const LightDarkContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Light = styled.div``
export const Dark = styled.div``
export const NavList = styled.div`
    width: 50%;
    list-style: none;
    display: none;
    justify-content: space-around;
    align-items: center;

    @media only screen and (min-width: 415px) {
        display: flex;
        justify-content: space-evenly;
    }

`

export const NavListItem = styled.li`
    color: ${({ theme }) => theme.fontColor };
    border-bottom: 2px solid ${({ theme }) => theme.borderHighlightOpaque };
    padding: 0.35em;
    transition: .4s ease-in-out;
    -webkit-transition: .4s;

    &:hover {
        color: ${({ theme }) => theme.fontHover }; 
        border-bottom: 2px solid ${({ theme }) => theme.borderHighlight };
        cursor: pointer;
        padding: .5em;
    }

`

export const CurrentPageHighlight = styled.li`
    list-style: none;
    color: ${({ theme }) => theme.activeFontColor};
    border-bottom: 2px solid ${({ theme }) => theme.borderHighlight };
    padding: .5em;
    cursor: pointer;

`
export const DropDownNavListContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor} ;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.5s ease-in-out;
    opacity: ${({ menuDropDown }) => (menuDropDown ? '1' : '0')};
    top: ${({ menuDropDown }) => (menuDropDown ? '0' : '-100%')};
`

export const CloseContainer = styled.div`
    text-align: right;
    margin: .5em;
`

export const CloseIcon = styled(Close)`
    color: ${({ theme }) => theme.fontColor };
    transition: .2s ease-in-out;
    height: 44px;
    

    &:hover {
        color: ${({ theme }) => theme.fontHover }; 
        cursor: pointer;
        transform: rotate(180deg);
    }

`
export const DropDownNavList = styled(NavList)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    width: 100%;
    height: 300px;

    img {
        margin-top: .3em;
        height: 32px;
    }
    

    @media only screen and (min-width: 415px) {
            display: none;
        }
`
export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0;
    width: 50%;
    justify-content: space-around;
`

export const GithubIcon = styled(Github)`
    height: 44px;
    color: ${({ theme }) => theme.fontColor };
    margin: 0;
    
`
export const NavHamburger = styled(MenuAlt3)`
    margin-right: .5em;
    height: 44px;
    color: ${({ theme }) => theme.fontColor };

    @media only screen and (min-width: 415px) {
        display: none;
    }
`