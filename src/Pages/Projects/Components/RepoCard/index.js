import React from 'react'
import { RepoCardContainer, ProjectIcon, RepoLanguage, JsIcon } from './RepoCard.style'

const RepoCard = ({ repo }) => {
  return (
    <RepoCardContainer>
            <div>
            <ProjectIcon />
            <a href={repo.html_url} target='_blank' rel="noreferrer">
                {repo.name}</a>
                <p>{repo.description}</p>
            </div>
            <RepoLanguage>
                <JsIcon />
                <p>{repo.language}</p>
            </RepoLanguage>
    </RepoCardContainer>
  
  )
}

export default RepoCard