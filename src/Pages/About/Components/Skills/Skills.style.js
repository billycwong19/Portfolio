import styled from 'styled-components'
import { ReactLogo, Nodejs, Figma, Bootstrap } from '@styled-icons/boxicons-logos'
import { Styledcomponents, Mongodb, Handlebarsdotjs, Express, Bulma, Nextdotjs, Mysql } from '@styled-icons/simple-icons'
import { CommentDots, UserFriends } from '@styled-icons/fa-solid'
import { Details } from '@styled-icons/material-sharp/Details'
import { AllInclusive } from '@styled-icons/material/AllInclusive'
import { Heart, MusicPlayerFill } from '@styled-icons/bootstrap'
import { Plant } from '@styled-icons/remix-fill/Plant'
import { PersonFeedback } from '@styled-icons/fluentui-system-filled'
import { CodeWorking } from '@styled-icons/ionicons-outline/CodeWorking'


export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

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
        width: 45%;     
    }
`
export const SkillIcon = styled(CodeWorking)`
    height: 16px;
    color: ${({ theme }) => theme.skillIcon};
    margin: 0 0 0 .5em;
`
export const SkillsCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media only screen and (min-width: 666px) {
        width: 33%;     
    }


    div {
        margin: .5em 0;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.fontColor};
        padding: 0 .5em;
        border-radius: 10px;
        padding: 0.5em;
        &:hover {
            background-color: ${({ theme }) => theme.borderHighlight}; 
        }
    } 
    
`
export const StyledIcon = styled(Styledcomponents)`
    height: 32px;
    margin-right: .5em;
`

export const ReactIcon = styled(ReactLogo)`
    height: 32px;
    margin-right: .5em;
`

export const NodeIcon = styled(Nodejs)`
    height: 32px;
    margin-right: .5em;
`
export const ExpressIcon = styled(Express)`
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
export const BootstrapIcon = styled(Bootstrap)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const BulmaIcon = styled(Bulma)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const NextIcon = styled(Nextdotjs)`
    height: 32px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const MysqlIcon = styled(Mysql)`
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

