import styled from 'styled-components'

export const ContactBody = styled.div`
    color: ${({ theme }) => theme.fontColor };
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4em 0;

`

export const ContactBanner = styled.img`
    max-height: 150px;
    max-width: 100%;
    opacity: 0.9;
`

export const ContactForm = styled.form`
    margin: 4em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;

    @media only screen and (min-width: 415px) {
        width: 85%;        
    }
    @media only screen and (min-width: 666px) {
        width: 50%;        
    }
    
`

export const TextInput = styled.input`
    color:${({ theme }) => theme.fontGreen};
    width: 80%;
    font-size: 14px;
    padding: 1em ;
    margin-bottom: 1em;
    display: block;
    border: 2px solid rgba(0, 0, 0, 0.0);
    border-radius: 5px;
    box-sizing: border-box;

    &:focus {
        border: 2px solid ${({ theme }) => theme.borderHighlight};
        outline: none;    
    }
`

export const TextAreaInput = styled.textarea`
    width: 80%;
    font-size: 14px;
    padding: 1em ;
    margin-bottom: 1em;
    display: block;
    border: 2px solid rgba(0, 0, 0, 0.0);
    border-radius: 5px;
    box-sizing: border-box;
    height: 10em;
    resize: none;

    &:focus {
        border: 2px solid ${({ theme }) => theme.borderHighlight};
        outline: none;
    }
    
`

export const ContactSubmit = styled.input`
    width: 50%;
    border: none;
    height: 3em;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.fontGreen};
    color: ${({ theme }) => theme.backgroundColor };

    &:hover {
        background-color: ${({ theme }) => theme.borderHighlight};
        color: ${({ theme }) => theme.fontColor };
        cursor: pointer;
        
    }
    &:active {
        width: 49%;
    }
`

export const MessageSent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme  }) => theme.bodyBackground};
    font-size: 14px;
    border-radius: 5px;
    height: 5em;
    width: 200px;
    position: fixed;
    bottom: 24em;
    background-color: ${({ theme  }) => theme.fontColor};
    opacity: 0;
    z-index: ${({ messageSentState }) => (messageSentState ? '5' : '-5')};
    transition: .2s ease-in-out;
    opacity: ${({ messageSentState }) => (messageSentState ? '1' : '0')};
    box-shadow: 0 0 10px ${({ theme  }) => theme.fontColor};


    p {
        margin: 0;
        text-align: center;
        padding: 0;
    }

    
`
