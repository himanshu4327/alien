import styled from 'styled-components'
import { Box, Flex, Text, Heading, Link, Image, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { BallWithNumber, PoolAllocationChart } from '../svgs'

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 40px 0;
  width: 100%;
`
const StyledBalls = styled.div`
  width: 32px;
  height: 32px;
  line-height: 2;
  text-align: center;
  border-radius: 50%;
  margin: 5px;
  color: #fff;
  font-weight: bold;
  background: radial-gradient(52.44% 52.44% at 50.26% 115.85%, #00f666 0%, rgba(2, 73, 32, 0.2) 100%);
  backdrop-filter: blur(5.5px);
`
const StyledAMatchingBalls = styled(StyledBalls)`
  background: none;
  color: #00f666;
`
const StyledANonMatchingBalls = styled(StyledAMatchingBalls)`
  color: #fff;
`
const BulletList = styled.ul`
  list-style-type: none;
  margin-left: 8px;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
  }
  li::before {
    content: '•';
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
  li::marker {
    font-size: 12px;
  }
`

const StyledHeading = styled(Heading)`
  font-family: Alien;
`

const StepContainer = styled(Flex)`
  gap: 24px;
  width: 100%;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`
const ExampleBalls = () => {
  return (
    <Flex justifyContent="center">
      <StyledBalls>7</StyledBalls>
      <StyledBalls>3</StyledBalls>
      <StyledBalls>2</StyledBalls>
      <StyledBalls>0</StyledBalls>
      <StyledBalls>5</StyledBalls>
      <StyledBalls>4</StyledBalls>
    </Flex>
  )
}
const MatchExampleA = () => {
  return (
    <Flex justifyContent="center">
      <Flex border="1px solid #00F666" borderRadius="100px">
        <StyledAMatchingBalls>7</StyledAMatchingBalls>
        <StyledAMatchingBalls>3</StyledAMatchingBalls>
        <StyledAMatchingBalls>2</StyledAMatchingBalls>
      </Flex>
      <Flex>
        <StyledANonMatchingBalls>9</StyledANonMatchingBalls>
        <StyledANonMatchingBalls>6</StyledANonMatchingBalls>
        <StyledANonMatchingBalls>4</StyledANonMatchingBalls>
      </Flex>
    </Flex>
  )
}
const MatchExampleB = () => {
  return (
    <Flex justifyContent="center">
      <StyledANonMatchingBalls>0</StyledANonMatchingBalls>
      <StyledAMatchingBalls>3</StyledAMatchingBalls>
      <StyledAMatchingBalls>2</StyledAMatchingBalls>
      <StyledAMatchingBalls>0</StyledAMatchingBalls>
      <StyledAMatchingBalls>5</StyledAMatchingBalls>
      <StyledAMatchingBalls>4</StyledAMatchingBalls>
    </Flex>
  )
}
const StyledStepCard = styled(Box)`
  display: flex;
  align-self: baseline;
  position: relative;
  padding: 1px 1px 3px 1px;
`

const StepCardInner = styled(Box)`
  width: 100%;
  padding: 15px;
  background: rgba(0, 246, 102, 0.09);
  backdrop-filter: blur(5.5px);
  box-shadow: 0px -1px 1px #00f666, -1px 1px 1px #00f666;
`

type Step = { title: string; subtitle: string; label: string }

const StepCard: React.FC<React.PropsWithChildren<{ step: Step }>> = ({ step }) => {
  return (
    <StyledStepCard width="100%">
      <StepCardInner minHeight={['200px', '180px', 'auto', 'auto']}>
        <Text mb="16px" fontSize="12px" bold textAlign="center" textTransform="uppercase">
          {step.label}
        </Text>
        <Heading mb="16px" scale="lg" color="secondary" textAlign="center">
          {step.title}
        </Heading>
        <Text color="textSubtle" textAlign="center">
          {step.subtitle}
        </Text>
      </StepCardInner>
    </StyledStepCard>
  )
}

const BallsContainer = styled(Flex)`
  padding-left: 28px;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xs} {
    gap: 7px;
    padding-left: 36px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    gap: 15px;
    padding-left: 40px;
  }
`

const InlineLink = styled(Link)`
  display: inline;
`

// const ExampleBalls = () => {
//   const { isDesktop } = useMatchBreakpoints()
//   const ballSize = isDesktop ? '22px' : '36px'
//   const fontSize = isDesktop ? '14px' : '16px'
//   return (
//     <BallsContainer>
//       <BallWithNumber size={ballSize} fontSize={fontSize} color="yellow" number="7" />
//       <BallWithNumber size={ballSize} fontSize={fontSize} color="green" number="3" />
//       <BallWithNumber size={ballSize} fontSize={fontSize} color="aqua" number="2" />
//       <BallWithNumber size={ballSize} fontSize={fontSize} color="teal" number="0" />
//       <BallWithNumber size={ballSize} fontSize={fontSize} color="lilac" number="5" />
//       <BallWithNumber size={ballSize} fontSize={fontSize} color="pink" number="4" />
//     </BallsContainer>
//   )
// }

const MatchExampleContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
`

const MatchExampleCard = () => {
  const { isDark } = useTheme()
  const { isXs } = useMatchBreakpoints()
  const { t } = useTranslation()
  const exampleWidth = isXs ? '210px' : '258px'
  return (
    <StyledStepCard width={['280px', '330px', '330px']}>
      <StepCardInner height="210px">
        <MatchExampleContainer>
          <ExampleBalls />
          <Flex my="15px">
            <Text textAlign="right" color="secondary" bold mr="20px">
              {t('A')}
            </Text>
            <MatchExampleA />
          </Flex>
          <Flex>
            <Text textAlign="right" color="secondary" bold mr="20px">
              {t('B')}
            </Text>
            <MatchExampleB />
          </Flex>
        </MatchExampleContainer>
      </StepCardInner>
    </StyledStepCard>
  )
}

const AllocationGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-auto-rows: max-content;
  row-gap: 4px;
`

const AllocationColorCircle = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`

const AllocationMatch: React.FC<React.PropsWithChildren<{ color: string; text: string }>> = ({ color, text }) => {
  return (
    <Flex alignItems="center">
      <AllocationColorCircle color={color} />
      <Text color="textSubtle">{text}</Text>
    </Flex>
  )
}

const PoolAllocations = () => {
  const { t } = useTranslation()
  return (
    <StyledStepCard width={['280px', '330px', '380px']}>
      <StepCardInner height="auto">
        <Flex mb="32px" justifyContent="center">
          <PoolAllocationChart width="100px" height="100px" />
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="12px" bold textTransform="uppercase">
            {t('Digits matched')}
          </Text>
          <Text fontSize="12px" bold textAlign="right" textTransform="uppercase">
            {t('Prize pool allocation')}
          </Text>
        </Flex>
        <AllocationGrid>
          <AllocationMatch color="#F9FBEF" text={t('Matches first %digits%', { digits: 1 })} />
          <Text textAlign="right" bold>
            2%
          </Text>
          <AllocationMatch color="#E3EECA" text={t('Matches first %digits%', { digits: 2 })} />
          <Text textAlign="right" bold>
            3%
          </Text>
          <AllocationMatch color="#C5E0A0" text={t('Matches first %digits%', { digits: 3 })} />
          <Text textAlign="right" bold>
            5%
          </Text>
          <AllocationMatch color="#A8D279" text={t('Matches first %digits%', { digits: 4 })} />
          <Text textAlign="right" bold>
            10%
          </Text>
          <AllocationMatch color="#8BC550" text={t('Matches first %digits%', { digits: 5 })} />
          <Text textAlign="right" bold>
            20%
          </Text>
          <AllocationMatch color="#00F666" text={t('Matches all 6')} />
          <Text textAlign="right" bold>
            40%
          </Text>
          <AllocationMatch color="#00F666" text={t('Burn Pool')} />
          <Text textAlign="right" bold>
            20%
          </Text>
        </AllocationGrid>
      </StepCardInner>
    </StyledStepCard>
  )
}

const GappedFlex = styled(Flex)`
  margin-top: 148px;
`

const HowToPlay: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  const steps: Step[] = [
    {
      label: t('Step %number%', { number: 1 }),
      title: t('Buy Tickets'),
      subtitle: t('Prices are set when the round starts, equal to 5 USD in CAKE per ticket.'),
    },
    {
      label: t('Step %number%', { number: 2 }),
      title: t('Wait for the Draw'),
      subtitle: t('There is one draw every day alternating between 0 AM UTC and 12 PM UTC.'),
    },
    {
      label: t('Step %number%', { number: 3 }),
      title: t('Check for Prizes'),
      subtitle: t('Once the round’s over, come back to the page and check to see if you’ve won!'),
    },
  ]
  return (
    <Box width="100%">
      <Flex mb="40px" alignItems="center" flexDirection="column">
        <StyledHeading mb="24px" scale="xl" color="#fff">
          {t('How to Play ?')}
        </StyledHeading>
        <Text textAlign="center" maxWidth="900px">
          {t(
            'If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.',
          )}
        </Text>
        <Text>{t('Simple!')}</Text>
      </Flex>
      <StepContainer>
        {steps.map((step) => (
          <StepCard key={step.label} step={step} />
        ))}
      </StepContainer>
      {/* <Divider /> */}
      <GappedFlex flexDirection="column">
        <Flex flexDirection="column">
          <Heading mb="24px" scale="lg" textAlign="center">
            {t('Winning Criteria')}
          </Heading>
          <Heading mb="24px" scale="md" textAlign="center">
            {t('The digits on your ticket must match in the correct order to win.')}
          </Heading>
        </Flex>
        <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
          <Flex flexDirection="column">
            <Text mb="16px" color="textSubtle">
              {t('Here’s an example lottery draw, with two tickets, A and B.')}
            </Text>
            <BulletList>
              <li>
                <Text display="inline" color="textSubtle">
                  {t(
                    'Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.',
                  )}
                </Text>
              </li>
              <li>
                <Text display="inline" color="textSubtle">
                  {t(
                    'Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.',
                  )}
                </Text>
              </li>
            </BulletList>
            <Text mt="16px" color="textSubtle">
              {t(
                'Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.',
              )}
            </Text>
          </Flex>
          <Flex justifyContent="center" m="15px">
            <MatchExampleCard />
          </Flex>
        </Flex>
      </GappedFlex>
      <GappedFlex flexDirection="column">
        <Flex flexDirection="column">
          <Flex flexDirection="column">
            <Heading mb="24px" scale="lg" textAlign="center">
              {t('Prize Funds')}
            </Heading>
            <Text textAlign="center" color="textSubtle">
              {t('The prizes for each lottery round come from three sources:')}
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
          <Flex flexDirection="column">
            <Heading my="16px" scale="md">
              {t('Ticket Purchases')}
            </Heading>
            <BulletList>
              <li>
                <Text display="inline" color="textSubtle">
                  {t('100% of the CAKE paid by people buying tickets that round goes back into the prize pools.')}
                </Text>
              </li>
            </BulletList>
            <Heading my="16px" scale="md">
              {t('Rollover Prizes')}
            </Heading>
            <BulletList>
              <li>
                <Text display="inline" color="textSubtle">
                  {t(
                    'After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.',
                  )}
                </Text>
              </li>
            </BulletList>
            <Heading my="16px" scale="md">
              {t('CAKE Injections')}
            </Heading>
            <BulletList>
              <li>
                <Text display="inline" color="textSubtle">
                  {t(
                    'An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to ',
                  )}
                  <InlineLink href="https://docs.pancakeswap.finance/tokenomics/cake/cake-tokenomics">
                    {t('CAKE Tokenomics')}
                  </InlineLink>
                </Text>
              </li>
            </BulletList>
          </Flex>

          <Flex justifyContent="center" m="20px">
            <PoolAllocations />
          </Flex>
        </Flex>
      </GappedFlex>
    </Box>
  )
}

export default HowToPlay
