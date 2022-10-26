import React, { useState } from 'react'
import { BioContainer, HiddenBio, MoreInfo, InfoBoxes, EducationContainer, CertificateIcon, RibbonIcon, InternetIcon, CodingEducationContainer} from './Bio.style'

export default function Bio(){
    const [moreInfoState, setMoreInfoState] = useState(false)
    const displayMoreInfo = () => setMoreInfoState(!moreInfoState)
    return (
        <BioContainer>
            <h2>I am a MERN full-stack developer with a curiosity towards pixel perfection.</h2> 
                { moreInfoState === false ? 
                <MoreInfo onClick={() => displayMoreInfo()}>
                    more info 
                </MoreInfo>
                :
                <MoreInfo onClick={() => displayMoreInfo()}>
                    hide 
                </MoreInfo>
                }
            
            <HiddenBio moreInfoState={moreInfoState}>
                <InfoBoxes>
                    <EducationContainer>
                        <h2><em>Education</em></h2>
                        <RibbonIcon />
                            <p>Berklee College of Music</p>
                    </EducationContainer>
                    <CodingEducationContainer>
                        <h2><em>Coding Education</em></h2>
                        <CertificateIcon />
                            <p>University of Texas at Austin Full-Stack Coding Bootcamp</p>
                    </CodingEducationContainer>
                </InfoBoxes>
            <p>For a list of certifications please visit my <a href='https://www.linkedin.com/in/williamcwong19/details/certifications/' target='_blank' rel='noreferrer'>LinkedIn</a>.</p>
            <p>Please check out my <a href='https://github.com/billycwong19' target='_blank' rel='noreferrer'>Github</a> profile or the <a href='#projects'>Projects</a> section of my portfolio to see what I've been up to.</p>
            </HiddenBio>
        </BioContainer>
    )
}