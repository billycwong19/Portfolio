import styled from 'styled-components'
import { ReactLogo, Html5, Nodejs, Figma, Css3 } from '@styled-icons/boxicons-logos'
import { Styledcomponents, Mongodb, Handlebarsdotjs } from '@styled-icons/simple-icons'
import { CommentDots, UserFriends } from '@styled-icons/fa-solid'
import { Details } from '@styled-icons/material-sharp/Details'
import { AllInclusive } from '@styled-icons/material/AllInclusive'
import { Heart, MusicPlayerFill } from '@styled-icons/bootstrap'
import { Plant } from '@styled-icons/remix-fill/Plant'
import { PersonFeedback } from '@styled-icons/fluentui-system-filled/PersonFeedback'
import { CodeWorking } from '@styled-icons/ionicons-outline/CodeWorking'

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        width: 100%;
        text-align: center;
    }
    
    
    @media only screen and (min-width: 666px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const SkillsLegend = styled.div`
    display: flex;
    align-items: center;
    height: 2.5em;
    width: 100%;
    font-size: 12px;
    border-top: 2px solid ${({ theme }) => theme.fontColor };
    border-left: 2px solid ${({ theme }) => theme.fontColor };
    border-bottom: 2px solid ${({ theme }) => theme.fontColor };

    div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;
        border-right: 2px solid ${({ theme }) => theme.fontColor };
    }
    @media only screen and (min-width: 666px) {
        width: 33%;     
    }
`
export const SkillIcon = styled(CodeWorking)`
    height: 16px;
    color: ${({ theme }) => theme.fontColor};
    margin: 0 0 0 .5em;
`
export const SkillsCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media only screen and (min-width: 666px) {
        width: 50%;     
    }


    div {
        margin: .66em 0;
        display: flex;
        align-items: center;
    }
`
export const StyledIcon = styled(Styledcomponents)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const ReactIcon = styled(ReactLogo)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const HtmlIcon = styled(Html5)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const CssIcon = styled(Css3)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const NodeIcon = styled(Nodejs)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const MongoIcon = styled(Mongodb)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const FigmaIcon = styled(Figma)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const HandlebarsIcon = styled(Handlebarsdotjs)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const CommunicateIcon = styled(CommentDots)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const TeamIcon = styled(UserFriends)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const DetailIcon = styled(Details)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const InclusiveIcon = styled(AllInclusive)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const HeartIcon = styled(Heart)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const MusicIcon = styled(MusicPlayerFill)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const PlantIcon = styled(Plant)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const FeedbackIcon = styled(PersonFeedback)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

