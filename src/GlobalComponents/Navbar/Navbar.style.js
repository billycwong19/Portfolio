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
    border: 2px solid ${({ theme }) => theme.borderHighlightOpaque };
    border-radius: 5px;
    padding: 0.35em;
    transition: .4s;
    -webkit-transition: .4s;

    &:hover {
        color: ${({ theme }) => theme.fontHover }; 
        border: 2px solid ${({ theme }) => theme.borderHighlight };
        cursor: pointer;
        padding: .5em;
    }

`

export const CurrentPageHighlight = styled.li`
    list-style: none;
    color: ${({ theme }) => theme.activeFontColor};
    border: 2px solid ${({ theme }) => theme.borderHighlight };
    border-radius: 5px;
    padding: .5em;
    cursor: pointer;

`
export const DropDownNavListContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor} ;
    position: absolute;
    top: 0;
    z-index: 1;
`

export const Close = styled.div`
    text-align: right;
    margin: 1em;
    color: ${({ theme }) => theme.fontColor };
    transition: .2s;

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