import styled from 'styled-components'
import { BurstNew } from '@styled-icons/foundation/BurstNew'
import { Close } from '@styled-icons/evil/Close'

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
        p {
            margin: 0;
        }
        p:hover {
            color: ${({ theme }) => theme.fontHover };
            cursor: pointer;
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
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor} ;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: ${({ moreInfoPopUp }) => (moreInfoPopUp ? '2' : '-7')};;
    transition: 0.6s ease-in-out;
    opacity: ${({ moreInfoPopUp }) => (moreInfoPopUp ? '1' : '0')};
    bottom: ${({ moreInfoPopUp }) => (moreInfoPopUp ? '0' : '-100%')};
    overflow: scroll;

    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2em;
        padding: 2em;
    }

    @media only screen and (min-width: 414px) {
    }
`

export const CloseIcon = styled(Close)`
    color: ${({ theme }) => theme.fontColor };
    transition: .5s ease-in-out;
    height: 44px;
    margin: .5em;
    align-self: flex-end;
    

    &:hover {
        color: ${({ theme }) => theme.fontHover }; 
        cursor: pointer;
        transform: rotate(180deg);
    }

`

export const ProjectIcon = styled.img`
    width: 44px;
`

export const ProjectImage = styled.img`
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