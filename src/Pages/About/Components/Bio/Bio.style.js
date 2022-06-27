import styled from 'styled-components'

export const BioContainer = styled.div`
    border-top: 2px solid ${({ theme }) => theme.fontColor};
    border-bottom: 2px solid ${({ theme }) => theme.fontColor};
    padding: 1em;
    text-align: center;
`

export const MoreInfo = styled.div`
    color: ${({ theme }) => theme.skillIcon};

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const HiddenBio = styled.div`
    display: ${({ moreInfoState }) => moreInfoState ? 'block' : 'none'};
    transition: 2s ease-in-out;
    opacity: ${({ moreInfoState }) => moreInfoState ? '1' : '0'};
`