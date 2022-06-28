import styled from 'styled-components'

export const HeroContainer = styled.div`
    margin-top: 4em;
    

    img {
        width: 100%;
    }
`

export const NameContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    cursor: default;
    margin-left: 1em;
`

export const PositionContainer = styled (NameContainer)`
    div {
    font-size: 24px;
    }
`

export const Letter = styled.div`
    color: ${({ theme }) => theme.fontColor };
    height: 50px;
    font-size: 48px;
    font-weight: 400;
    transition: .2s ease-in-out;
    display: flex;
    justify-content: center;
    margin: .1em;
  

    &:hover {
        
        animation: lettering .66s 1;
        animation-timing-function: ease-in-out;
    }

    @keyframes lettering {
        0% { 
            transform: scale(1) rotate(0deg);
        }
        10% {
            transform: scale(1.05) rotate(3deg)
        }
        20% {
            transform: scale(1.05) rotate(6deg)
        }
        30% {
            transform: scale(1.1) rotate(9deg)
        }
        40% {
            transform: scale(1.1) rotate(6deg)
        }
        50% { 
            transform: scale(1.1) rotate(3deg);
        }
        60% {
            transform: scale(1.05) rotate(0deg)
        }
        70% {
            transform: scale(1.05) rotate(-2deg)
        }
        80% {
            transform: scale(1) rotate(-4deg)
        }
        90% {
            transform: scale(1) rotate(-3deg)
        }
        100% { 
            transform: scale(1) rotate(-2deg);
        }
    }

`