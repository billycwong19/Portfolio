import React from 'react'
import { RepoCardContainer } from './RepoCard.style'

const RepoCard = ({ repo }) => {
  return (
    <RepoCardContainer>
            <div>
                <h1><a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a></h1>
                <p>{repo.description}</p>
            </div>
            <div>
                <p>{repo.language}</p>
                <p>{repo.license && repo.license.name}</p>
            </div>
            <div>
                forks: {repo.forks} stargazers: {repo.stargazers_count}
            </div>
                <p>
                {repo.updated_at}
                </p>
    </RepoCardContainer>
  
  )
}

export default RepoCard