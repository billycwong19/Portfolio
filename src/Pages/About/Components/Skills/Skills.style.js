import styled from 'styled-components'
import { ReactLogo, Html5, Nodejs, Figma, Css3 } from '@styled-icons/boxicons-logos'
import { Styledcomponents, Mongodb, Handlebarsdotjs } from '@styled-icons/simple-icons'
import { CommentDots, UserFriends } from '@styled-icons/fa-solid'
import { Details } from '@styled-icons/material-sharp/Details'
import { AllInclusive } from '@styled-icons/material/AllInclusive'
import { Heart, MusicPlayerFill } from '@styled-icons/bootstrap'
import { Plant } from '@styled-icons/remix-fill/Plant'
import { PersonFeedback } from '@styled-icons/fluentui-system-filled/PersonFeedback'

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
`
export const SkillsCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    line-height: 0;

    div {
        margin: .66em 0;
        display: flex;
        align-items: center;
    }
`
export const StyledIcon = styled(Styledcomponents)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const ReactIcon = styled(ReactLogo)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const HtmlIcon = styled(Html5)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const CssIcon = styled(Css3)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const NodeIcon = styled(Nodejs)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const MongoIcon = styled(Mongodb)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const FigmaIcon = styled(Figma)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const HandlebarsIcon = styled(Handlebarsdotjs)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const CommunicateIcon = styled(CommentDots)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const TeamIcon = styled(UserFriends)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const DetailIcon = styled(Details)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const InclusiveIcon = styled(AllInclusive)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const HeartIcon = styled(Heart)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const MusicIcon = styled(MusicPlayerFill)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`

export const PlantIcon = styled(Plant)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`
export const FeedbackIcon = styled(PersonFeedback)`
    height: 22px;
    color: ${({ theme }) => theme.fontColor};
    margin-right: .5em;
`