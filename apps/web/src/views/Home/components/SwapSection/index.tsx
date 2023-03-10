import styled from 'styled-components'
import {
  Flex,
  Text,
  Button,
  Link,
  NextLinkFromReactRouter as RouterLink,
  Heading,
  NextLinkFromReactRouter,
} from '@pancakeswap/uikit'
import Image from 'next/image'
// eslint-disable-next-line lodash/import-scope
import { reverse } from 'lodash'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'
import BurningGif from '../../../../../public/images/alien/fireBurner.gif'

const StyledHeading = styled(Heading)`
  letter-spacing: 0.1em;
  color: #00f666;
  font-family: 'Alien';
  text-shadow: -1px 0px 12px #00f666;
`

const StyledSubHeading = styled(Heading)`
  text-shadow: -1px 0px 12px #00f666;
  font-family: 'Alien';
  color: #fff;
`
const StyledSpan = styled.span`
  text-shadow: -1px 0px 12px #00f666;
  font-family: 'Alien';
  color: #fff;
`
interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton?: SalesSectionButton
  secondaryButton?: SalesSectionButton
  images: CompositeImageProps
  firstWordlen?: number
}

const SwapSection = () => {
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" alignItems={['flex-end', null, null, 'center']}>
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <StyledHeading scale="xl" textTransform="uppercase" textAlign="center">
            Trade anything <StyledSpan>No</StyledSpan>
          </StyledHeading>
          <StyledSubHeading scale="xl" textTransform="uppercase" textAlign="center">
            registration,no hassle
          </StyledSubHeading>

          <Flex
            flex={[null, null, null, '1']}
            mt="5rem"
            mb={['24px', null, null, '0']}
            maxWidth="2000px"
            alignItems="center"
          >
            <img src={BurningGif.src} alt="gif" width={900} height={700} />
          </Flex>
          <Text fontSize="16px" color="textSubtle" mb="24px" textAlign="center" width="80%" margin="0 auto">
            AlienFi provides safe & low-cost trading experience
          </Text>
          <Flex justifyContent="center" my="10px">
            <NextLinkFromReactRouter to="/swap">
              <Button mr="10px">Trade Now</Button>
            </NextLinkFromReactRouter>
            <Link external href="https://alien-2.gitbook.io/alien-finance/trading/alienfi-swap">
              <Text style={{ fontSize: '16px' }}>Learn</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SwapSection
