import styled from 'styled-components'
import { PaperClip } from '@styled-icons/heroicons-outline/PaperClip'

export const AboutBody = styled.div`
    color: ${({ theme }) => theme.fontColor };
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4em;

    div {
        margin: 1em 0;
    }
`
export const AboutBanner = styled.img`
    max-height: 150px;
    max-width: 100%;
    opacity: 0.9;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    @media only screen and (min-width: 666px) {
        flex-direction: row ;
    }

`
export const ImageCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const AboutImage = styled.img`
    max-height: 20em;
    
    margin: 0 auto;

    @media only screen and (min-width: 415px) {
        width: 50%; 
               
    }
    @media only screen and (min-width: 666px) {
        width: 100%; 
        object-fit: contain;       
    }
`



export const PaperClipIcon = styled(PaperClip)`
    height: 22px;
    margin-right: .5em;
`

export const ResumeButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 50%;
    border: none;
    height: 3em;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.fontGreen};
    color: ${({ theme }) => theme.backgroundColor };
    margin-top: 2em;

    &:hover {
        background-color: ${({ theme }) => theme.borderHighlight};
        color: ${({ theme }) => theme.fontColor };
        cursor: pointer;
        
    }
    &:active {
        width: 49%;
    }
`

