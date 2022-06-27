import React, { useState } from 'react'
import { BioContainer, HiddenBio, MoreInfo } from './Bio.style'

export default function Bio(){
    const [moreInfoState, setMoreInfoState] = useState(false)
    const displayMoreInfo = () => setMoreInfoState(!moreInfoState)
    return (
        <BioContainer>
            <p>I am a self-taught developer with a curiosity towards pixel perfection and crafting satisfying UI/UX interfaces. 
                { moreInfoState === false ? 
                <MoreInfo onClick={() => displayMoreInfo()}>
                    more info 
                </MoreInfo>
                :
                <MoreInfo onClick={() => displayMoreInfo()}>
                    hide 
                </MoreInfo>
                }
            </p>
            <HiddenBio moreInfoState={moreInfoState}>
            <p>I have spent the past couple of years working under the guidance of Professor Internet and, recently, I have finished a three month bootcamp to blast over some technologies and practices that have helped me code with intent and with a new found love for CSS.</p>
            <p>Currently, I am creating a React component library that contains highly reusable UI components such as a contact form, navbar, or calendar. The code base for the components are simple and I intend to expand on the features and accumulate a UI library for myself and the internet at large to use. </p>
            <p>It goes without saying that I couldn't be where I am without the support of my loving partner, Sasha. Her love keeps me on my toes and without her I wouldn't have been able to pursue and continue my studies in web development. Our two little furry boys make sure I understand unconditional love and patience and I'd do anything to keep them happy and healthy. </p>
            </HiddenBio>
        </BioContainer>
    )
}