import { Flex, Text, Box, Heading,   Spinner, NextLinkFromReactRouter as RouterLink } from '@pancakeswap/uikit'

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
  const ParentDiv = styled.div`
  background: radial-gradient(53.64% 53.64% at 50.26% 107.66%, #00F666 0%, rgba(2, 73, 32, 0.2) 100%);
  backdropFilter: 'blur(5.5px)';
  color: white;
  width: 1012px;
  height: 354px;

 padding-top: 20px;
  box-shadow:1px 0px 2px #00f666, 1px -1px 0px #00f666;
  boder:2px solid green;
  position: relative,
  margin-bottom: 12rem,

  }

`
 
  const StyledHeading = styled(Heading)`
    letter-spacing: 0.12em;
    color: #ffffff;
    // text-shadow: -1px 0px 12px #00f666;
    position : relative
  `
  const StyledSpan = styled.span`
    color: #00f666;

    text-shadow: -1px 0px 12px #00f666;
  `
  


  const Grid = styled.div`
  display: grid;
  
`
  const Boxstyle = styled.div`
  box-sizing: border-box;
  display:flex;
  justify-content:center;  
  width: 1012px;
 height: 354px;
//  background-image:url("../../../../../public/images/alien/Box.svg")
 box-shadow: 1px 1px 2px #00f666, 1px -2px 0px #00f666;

  @media only screen and (max-width: 380px) {
    box-sizing: border-box;
    display:flex;
    justify-content:center;  
    width: 100%;
    height: 136px;
   
    
   
  }
  @media only screen and (max-width: 500px){
    box-sizing: border-box;
    display:flex;
    justify-content:center;  
    width: 100%;
    height: 208px;
   
  }
  @media only screen and (min-width: 768px) and (max-width:868px) {
    box-sizing: border-box;
    display:flex;
    justify-content:center;  
    width: 100%;
    height: 258px;
   
  }


background: radial-gradient(53.64% 53.64% at 50.26% 107.66%, #00F666 0%, rgba(2, 73, 32, 0.2) 100%);
backdrop-filter: blur(5.5px);
`

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" alignItems={['flex-end', null, null, 'center']}>
      {/* <ParentDiv> */}
      <Flex justifyContent="center"  flexDirection="column" mt="24px" >
       <Boxstyle>

        <Box  height={['240px', null, '80px']}>
          <Grid>
      <StyledHeading scale="xl" paddingTop="55px" textTransform="uppercase" textAlign="center">
      START IN <StyledSpan>SECONDS</StyledSpan>
      </StyledHeading>

        </Grid>
          <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >


     <Image src={images.path} width={720} height={720} alt="ggf" />  
     </Flex>

        </Box>
       </Boxstyle>
      </Flex>
          <Text
            color="textSubtle"
            fontSize="16px"
            fontFamily="Aliensolid"
            textAlign="center"
            width="80%"
            margin="152px auto"

          >
            {bodyText}
          </Text>
       
    
      </Flex>
    </Flex>
  )
}

export default StartInSecondSectionData
