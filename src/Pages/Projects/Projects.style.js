import styled from 'styled-components'

export const ProjectsBody = styled.div`
    width:100%;
    color: ${({ theme }) => theme.fontColor };
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5em;
    
`

export const ProjectsBanner = styled.img`
    max-height: 150px;
    max-width: 100%;
    opacity: 0.9;
   
`

export const ProjectsContainer = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    @media only screen and (min-width: 666px) {
            flex-direction: row;
            justify-content: center;
    }
`