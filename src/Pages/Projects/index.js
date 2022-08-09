import { useState, useEffect } from 'react'
import { ProjectsBody, ProjectsBanner, ProjectsContainer } from "./Projects.style";
import data from './data'
import RepoCard from './Components/RepoCard/'

import axios from 'axios'


export default function Projects(){
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

        const github = axios.create({
            baseURL: 'https://api.github.com',
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
        })

        const getRepos = async () => {
            try {
            const repos = await github.get('/users/billycwong19/repos')
            console.log(repos.data)
            return setRepos(repos.data)
            } catch (error) {
                console.log(error)
            }
        }
        getRepos()
    }, [])

    return(
        <ProjectsBody id={'projects'}>
            <ProjectsBanner src='./images/projectsbanner.png' />

            <ProjectsContainer>
            
            { data.map((repo, i) => 
  
            <RepoCard repo={repo} key={repo.name + i} />
            
            )}
        
            { repos.filter(r => r.archived === false && r.name !== 'portfolio' && r.name !== 'billycwong19').map((repo) => 
            
            <RepoCard repo={repo} key={repo.id} />
            
            )}
            </ProjectsContainer>
        </ProjectsBody>
    )
}