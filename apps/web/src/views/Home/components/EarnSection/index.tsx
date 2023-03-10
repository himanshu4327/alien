import styled from 'styled-components'
import { Flex, Text, Button, Link, NextLinkFromReactRouter as RouterLink, Heading } from '@pancakeswap/uikit'
import Image from 'next/image'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'
import skull from '../../../../../public/images/alien/skull.gif'

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

const EarnSectionData = () => {
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" alignItems={['flex-end', null, null, 'center']}>
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, '64px']}
          mr={[null, null, null, '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <StyledHeading scale="xl" textTransform="uppercase" textAlign="center">
            Earn passive income
          </StyledHeading>
          <StyledSubHeading scale="xl" textTransform="uppercase" textAlign="center">
            with crypto
          </StyledSubHeading>

          <Flex
            flex={[null, null, null, '1']}
            mt="5rem"
            mb={['24px', null, null, '0']}
            maxWidth="2000px"
            alignItems="center"
          >
            <img src={skull.src} alt="gif" width={900} height={700} />
          </Flex>
          <Text fontSize="16px" color="textSubtle" mb="24px" textAlign="center" width="80%" margin="0 auto">
            Alien makes it easy to make your crypto work for you
          </Text>
          <Flex justifyContent="center" my="10px">
            <Button mr="16px">
              <Link external href="/farms">
                <Text style={{ fontSize: '16px' }} color="card" bold fontSize="16px">
                  Farm Now
                </Text>
              </Link>
            </Button>
            <Link external href="https://alien-2.gitbook.io/alien-finance/staking/alienfi-farms">
              <Text style={{ fontSize: '16px' }}>Learn</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default EarnSectionData
