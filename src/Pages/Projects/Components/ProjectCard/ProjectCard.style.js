import styled from 'styled-components'

export const ProjectCardStyled = styled.div`
    width: 100%;
    height: 16em;

`

export const ProjectCardHeader = styled.div`
    width: 100%;
    height: 4em;
    background-color: ${({ theme }) => theme.borderHighlight};
`

export const ProjectCardBody = styled.div`
    width: 100%;
    height: 10em;
`

export const ProjectCardFooter = styled.div`
    width: 100%;
    height: 2em;
    background-color: ${({ theme }) => theme.borderHighlight};
    display: flex;
    justify-content: center;
    align-items: center;
`