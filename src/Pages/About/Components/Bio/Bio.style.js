import styled from 'styled-components'
import { Certificate, Ribbon } from '@styled-icons/fluentui-system-regular'
import { Web } from '@styled-icons/foundation/Web'


export const BioContainer = styled.div`
    border-top: 2px solid ${({ theme }) => theme.fontColor};
    border-bottom: 2px solid ${({ theme }) => theme.fontColor};
    padding: 1em;
    text-align: center;
`

export const MoreInfo = styled.div`
    color: ${({ theme }) => theme.skillIcon};

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const HiddenBio = styled.div`
    display: ${({ moreInfoState }) => moreInfoState ? 'block' : 'none'};
    transition: 2s ease-in-out;
    opacity: ${({ moreInfoState }) => moreInfoState ? '1' : '0'};

    a {
        color: ${({ theme }) => theme.fontColor};
        text-decoration: none;
        font-weight: 500;
    }
    a:hover {
        text-decoration: underline;
    }
`
export const InfoBoxes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and (min-width: 666px) {
        flex-direction: row;
    }
`
export const EducationContainer = styled.div`
    padding: 0 .5em;

    p {
        font-size: 14px;
    }

    @media only screen and (min-width: 666px) {
        width: 30%;
    }
`

export const CertificateIcon = styled(Certificate)`
    color: ${({ theme  }) => theme.fontColor };
    height: 24px;    
`

export const RibbonIcon = styled(Ribbon)`
    color: ${({ theme  }) => theme.fontColor };
    height: 24px;   
`

export const InternetIcon = styled(Web)`
    color: ${({ theme  }) => theme.fontColor };
    height: 24px;   
`

export const CodingEducationContainer = styled(EducationContainer)`

`