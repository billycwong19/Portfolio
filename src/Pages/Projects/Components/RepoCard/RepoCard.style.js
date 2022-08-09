import styled from 'styled-components'
import { GitRepository } from '@styled-icons/remix-fill/GitRepository'
import { Javascript } from '@styled-icons/boxicons-logos/Javascript'

export const RepoCardContainer = styled.div`
    margin: 1em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.borderHighlight };
    border-radius: 10px;
    padding: 1em;

    a {
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
        color: ${({ theme }) => theme.headerFontColor }
    }
    a:hover {
        color: ${({ theme }) => theme.fontColor };
        text-decoration: underline;
    }
    a:visited {
        color: ${({ theme }) => theme.borderHighlight };
    }

    p {
        color: ${({ theme }) => theme.activeFontColor };
    }

    @media only screen and (min-width: 666px) {
        width: 40%;
    }
`

export const ProjectIcon = styled(GitRepository)`
    color: ${({ theme }) => theme.fontColor };
    height: 22px;
    margin-right: 1em;
`
export const JsIcon = styled(Javascript)`
    color: ${({ theme }) => theme.headerFontColor };
    height: 22px;
    margin-right: 1em;
`

export const RepoLanguage = styled.div`
    justify-self: flex-end;
    display: flex;
    align-items: center;
`