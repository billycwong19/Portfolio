import styled from 'styled-components'

export const NavbarContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4em;
    
`
export const NavbarLeft = styled.div`
    display: flex;
    align-items: center;
    margin-left: .5em;
`

export const NavLogo = styled.img`
    height: 44px;
    cursor: pointer;
`
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
    z-index: 1;
    transition: 0.3s ease-in-out;
    opacity: ${({ menuDropDown }) => (menuDropDown ? '1' : '0')};
    top: ${({ menuDropDown }) => (menuDropDown ? '0' : '-100%')};
`

export const Close = styled.div`
    text-align: right;
    margin: 1em;
    color: ${({ theme }) => theme.fontColor };
    transition: .2s;
    i {
        height: 44px;
    }
    &:hover {
        color: ${({ theme }) => theme.fontHover }; 
        cursor: pointer;
    }
`
export const DropDownNavList = styled(NavList)`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    width: 100%;
    height: 300px;

    img {
        margin: .5em;
        height: 44px;
    }
    

    @media only screen and (min-width: 415px) {
            display: none;
        }
`
export const NavHamburger = styled.div`
    margin-right: .5em;

    hr {
        border: 2px solid ${({ theme }) => theme.fontColor};
        width: 33px;
    }

    @media only screen and (min-width: 415px) {
        display: none;
    }
`