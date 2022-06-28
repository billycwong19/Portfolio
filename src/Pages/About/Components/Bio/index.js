import React, { useState } from 'react'
import { BioContainer, HiddenBio, MoreInfo, InfoBoxes, EducationContainer, CertificateIcon, RibbonIcon, InternetIcon, CodingEducationContainer} from './Bio.style'

export default function Bio(){
    const [moreInfoState, setMoreInfoState] = useState(false)
    const displayMoreInfo = () => setMoreInfoState(!moreInfoState)
    return (
        <BioContainer>
            <h2>I am a self-taught developer with a curiosity towards pixel perfection and crafting satisfying UI/UX interfaces.</h2> 
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
                        <h3><em>Education</em></h3>
                        <RibbonIcon />
                            <p>Berklee College of Music</p>
                    </EducationContainer>
                    <CodingEducationContainer>
                        <h3><em>Coding Education</em></h3>
                        <CertificateIcon />
                            <p>UT Coding Bootcamp</p>
                        <InternetIcon />
                            <p>Internet University</p>
                    </CodingEducationContainer>
                </InfoBoxes>
            <p>Currently, I am creating a React component library that contains highly reusable UI components such as a contact form, navbar, or calendar. The code base for the components are simple and I intend to expand on the features and accumulate a UI library for myself and the internet at large to use. </p>
            <p>It goes without saying that I couldn't be where I am without the support of my loving partner, Sasha. Her love keeps me on my toes and without her I wouldn't have been able to pursue and continue my studies in web development. Our two little furry boys make sure I understand unconditional love and patience and I'd do anything to keep them happy and healthy. </p>
            </HiddenBio>
        </BioContainer>
    )
}