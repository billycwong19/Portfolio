import styled from 'styled-components'

export const AboutBody = styled.div`
    color: ${({ theme }) => theme.fontColor };
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        height: 100%;
    }
`

export const AboutBanner = styled.img`
    max-height: 150px;
    max-width: 100%;
    opacity: 0.9;
`