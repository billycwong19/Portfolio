import React from   'react'
import { HeroContainer, NameContainer, PositionContainer, Letter } from './Hero.style'

const name = `William Wong`
const position = `Web Developer`

export default function Hero({ props }){
    return(
        <>
        <HeroContainer>
            {props.themeState === 'light' ? 
                <img src='./images/williamwonghero.png' alt='hero banner' />
            :
                <img src='./images/darkhero.png' alt='darkhero banner' />
            }
            <NameContainer>
            { name.split('').map((letter, i) => 
                <Letter key={`name ${letter} at ${i}`}>{letter}</Letter>
            )}
            </NameContainer>
            <PositionContainer>
            { position.split('').map((letter, i) => 
                <Letter key={`position ${letter} at ${i}`}><em>{letter}</em></Letter>
            )}
            </PositionContainer>
        </HeroContainer>
        </>
    )
}