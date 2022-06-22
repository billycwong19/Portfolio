import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: relative;
    bottom: -3em;
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColor };
    display: flex;
    border-top: 1px solid ${({ theme }) =>  theme.borderHighlight};
    flex-wrap: wrap;
    align-items:center;
`

export const FooterInfo = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    list-style: none;
    line-height: 2em;
    text-align: left;
    margin: 2em 0 1em 0;
    

    p {
        font-size: 20px;
        width: 20%;
        text-align: left;
        color: ${({ theme }) => theme.headerFontColor };
        padding: 0;
        margin: 0;
        @media only screen and (min-width: 415px) {
        width: 0%;
        }
    }

    li {
        width: 20%;
        text-align: left;
        color: ${({ theme }) => theme.fontColor };
        transition: .3s;

        @media only screen and (min-width: 415px) {
        width: 0%;
        }
    }   

    li:hover {
        color: ${({ theme }) => theme.fontHover };
        cursor: pointer;
    }

    
`

export const FooterIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    width: 50%;

    img {
        height: 32px;
        margin-top: .1em;
    }

    div {
        width:66%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

export const FooterCopyright = styled.div`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.fontColor };
    margin: 1em 0;
`