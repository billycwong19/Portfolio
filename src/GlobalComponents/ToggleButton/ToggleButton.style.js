import styled from 'styled-components'

// taken from w3 schools 'how to toggle switch' and then manipulated from there
export const ToggleContainer = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    input:checked + span {
        background-color: ${({ theme }) => theme.fontGreen };
    }
    input:focus + span {
        box-shadow: 0 0 1px ${({ theme }) => theme.fontGreen };
    }
    input:checked + span:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

`
export const Toggler = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.borderHighlight };
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: ${({ theme }) => theme.fontColor };
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`