import React from   'react'
import { HeroContainer } from './Hero.style'

export default function Hero({ props }){
    return(
        <>
        <HeroContainer>
            {props.themeState === 'light' ? 
                <img src='./images/williamwonghero.png' alt='hero banner' />
            :
                <img src='./images/darkhero.png' alt='darkhero banner' />
            }
        </HeroContainer>
        </>
    )
}