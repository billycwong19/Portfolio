import styled from 'styled-components'
import { NewReleases } from '@styled-icons/material-rounded/NewReleases'

export const ProjectCardStyled = styled.div`
    width: 100%;
    height: 32em;
    margin-bottom: 2em;

    hr {
        border: .5px solid ${({ theme }) => theme.borderHighlight};
    }

    @media only screen and (min-width: 666px) {
            width: 66%;
    }

    @media only screen and (min-width: 969px) {
            width: 45%;
            margin: 0 2em 2em 2em; 
    }
`

export const ProjectCardHeader = styled.div`
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
`

export const ProjectTitle = styled.div`
    font-weight: 600;
    margin-left: .5em;
    border-bottom: 1px dotted ${({ theme }) => theme.borderHighlight };

    &:hover {
        color: ${({ theme }) => theme.fontHover };
        cursor: pointer;
    }

    &:hover span {
        opacity: 1;
    }
`

export const ProjectDescription = styled.span`
    transition: .3s ease-in-out;
    opacity: 0;
    width: 200px;
    background-color: ${({ theme }) => theme.backgroundColor };
    color: ${({ theme }) => theme.fontColor };
    box-shadow: 0px 0px 10px ${({ theme }) => theme.borderHighlight } ;
    text-align: center;
    padding: 1em;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    margin-top: 2em;
    left: 5em;

    @media only screen and (min-width: 414px) {
        left: initial;
    }
`

export const ProjectIcon = styled.img`
    width: 44px;
    margin: 0 .5em;
`

export const ProjectCardBody = styled.div`
    width: 100%;
    height: 24em;
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

export const NewIcon = styled(NewReleases)`
    height: 33px;
    margin: 0 1em 0 2em;
    
`