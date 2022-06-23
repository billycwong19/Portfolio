import styled from 'styled-components'
import { NewReleases } from '@styled-icons/material-rounded/NewReleases'

export const ProjectCardStyled = styled.div`
    width: 100%;
    height: fit-content;

    hr {
        border: .5px solid ${({ theme }) => theme.borderHighlight};
    }

    @media only screen and (min-width: 666px) {
            width: 66%;
    }

    @media only screen and (min-width: 969px) {
            width: 45%;
            margin: 0 2em; 
    }
`

export const ProjectCardHeader = styled.div`
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
`
export const ProjectHeaderLeft = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:hover {
        color: ${({ theme }) => theme.fontHover };
        }
`
export const ProjectHeaderRight = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: .5em;
    
    p { 
        border-bottom: 1px dotted ${({ theme }) => theme.borderHighlight };
        
        &:hover {
            color: ${({ theme }) => theme.fontHover };
            cursor: pointer;
        }

        &:hover span {
            opacity: 1;
            z-index: 1;
        }
    }

    
`

export const ProjectTitle = styled.div`
    margin-left: .5em;
    a {
        text-decoration: none;
    }

    h3 { 
        color: ${({ theme }) => theme.fontColor };
        font-weight: 600;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.fontHover };
        }
    }
    
`

export const ProjectDescription = styled.span`
    transition: .3s ease-in-out;
    opacity: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor };
    color: ${({ theme }) => theme.fontColor };
    box-shadow: 0px 0px 10px ${({ theme }) => theme.borderHighlight } ;
    text-align: center;
    padding: 2em 0;
    border-radius: 10px;
    position: absolute;
    z-index: -1;
    margin-top: 2em;
    left: 0;

    @media only screen and (min-width: 414px) {
        
    }
`

export const ProjectIcon = styled.img`
    width: 44px;
    margin: 0 .5em;
`

export const ProjectCardBody = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    
`

export const ProjectScreenShot = styled.img`
    max-width: 100%;
    max-height: 100%;
    
`

export const ProjectCardFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 2em 0;
    
    div {
        display: flex;
        align-items: center;
        transform: rotate(0);
        h2 {
            margin: 0;
        }
    }
`

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    font-weight: 600;
    margin: 0 1em;

    &:hover {
        color: ${({ theme }) => theme.fontHover};
    }
`

export const ProjectRepo = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    font-weight: 600;

    &:hover {
        color: ${({ theme }) => theme.fontHover};
    }
`
export const NewIconContainer = styled.div`
    display: flex;
    align-items:center;
`
export const NewIcon = styled(NewReleases)`
    height: 33px;
    margin: 0 1em 0 2em;
    
`