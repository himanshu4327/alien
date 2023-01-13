import { Flex, Text, Box, Heading, Spinner, NextLinkFromReactRouter as RouterLink } from '@pancakeswap/uikit'

import Image from 'next/image'
import useTheme from 'hooks/useTheme'
import styled, { keyframes } from 'styled-components'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'
// import styled from 'styled-components'

// import fired from '../../../../../public/images/alien/fireBurner.gif'
// import { StartInSecondSectionData } from '../SalesSection/data';

// interface SalesSectionButton {
//   to: string
//   text: string
//   external: boolean
// }

export interface StartInSecondSectionDataProps {
  headingText: string
  bodyText: string
  reverse: boolean
  images: CompositeImageProps
}

const StartInSecondSectionData: React.FC<React.PropsWithChildren<StartInSecondSectionDataProps>> = (props) => {
  const { headingText, bodyText, reverse, images } = props

  const StyledHeading = styled(Heading)`
    letter-spacing: 0.12em;
    color: #ffffff;
    // text-shadow: -1px 0px 12px #00f666;
    position: relative;
  `
  const StyledSpan = styled.span`
    color: #00f666;

    text-shadow: -1px 0px 12px #00f666;
  `

  const Grid = styled.div`
    display: grid;
  `
  const Boxstyle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 161px;

    box-shadow: 1px 1px 2px #00f666, 1px -2px 0px #00f666;
    position: relative;
  `

  const StyledImage = styled.img`
    position: absolute;
    top: -50%;
  `
  const StyledBox = styled.div`
    width: 100%;
    height: 150px;
    padding: 20px;
    background: radial-gradient(53.64% 53.64% at 50.26% 107.66%, #00f666 0%, rgba(2, 73, 32, 0.2) 100%);
    backdrop-filter: blur(5.5px);
  `

  return (
    <StyledBox>
      <Box>
        <Heading>Starts in seconds</Heading>
      </Box>
    </StyledBox>
  )
}

export default StartInSecondSectionData
