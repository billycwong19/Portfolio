import styled from 'styled-components'
import { BurstNew } from '@styled-icons/foundation/BurstNew'

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
    height: 6em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ProjectHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 48%;
    margin-left: .5em;
`
export const ProjectHeaderRight = styled.div`
    display: flex;
    align-items: center;
    width: 48%;
    justify-content: space-between;
    margin-right: .5em;
`
export const MoreInfo = styled.div`
        border-bottom: 1px dotted ${({ theme }) => theme.borderHighlight };
        
        &:hover {
            color: ${({ theme }) => theme.fontHover };
            cursor: pointer;
        }

        &:hover div {
            opacity: 1;
            z-index: 1;
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

export const ProjectDescription = styled.div`
    transition: .3s ease-in-out;
    width: 100%;
    opacity: 0;
    background-color: ${({ theme }) => theme.backgroundColor };
    color: ${({ theme }) => theme.fontColor };
    box-shadow: 0px 0px 10px ${({ theme }) => theme.borderHighlight } ;
    text-align: center;
    position: absolute;
    z-index: -1;
    margin-top: 2em;
    left: 0;
    

    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        overflow-y: scroll;
        margin-bottom: 2em;
        padding: 2em;
    }

    @media only screen and (min-width: 414px) {
    }
`

export const ProjectIcon = styled.img`
    width: 44px;
`

export const ProjectScreenShot = styled.img`
    max-width: 100%;
    max-height: 100%;
    
`

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    font-weight: 600;

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

export const NewIcon = styled(BurstNew)`
    height: 48px;

    &:hover { 
    animation: brighten 1s infinite;
    animation-timing-function: linear;
    }

    @keyframes brighten {
        0% { 
            transform: scale(1);
        }
        50% { 
            transform: scale(1.2);
        }
        100% { 
            transform: scale(1);
        }
    }
    
`