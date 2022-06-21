import styled from 'styled-components'

export const ProjectsBody = styled.div`
    color: ${({ theme }) => theme.fontColor };
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProjectsBanner = styled.img`
    max-height: 150px;
    max-width: 100%;
    opacity: 0.9;
`