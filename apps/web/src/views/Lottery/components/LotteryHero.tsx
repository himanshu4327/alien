import styled, { keyframes } from 'styled-components'
import { Box, Flex, Heading, Skeleton, Balance } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from '@pancakeswap/utils/formatBalance'
import { TicketPurchaseCard } from '../svgs'
import BuyTicketsButton from './BuyTicketsButton'
import LotteryCard from './LotteryCard'

const floatingStarsLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }
`

const floatingStarsRight = keyframes`
  from {
    transform: translate(0,  0px), rotate(180deg);
  }
  50% {
    transform: translate(-10px, 10px) rotate(360deg);
  }
  to {
    transform: translate(0, -0px) rotate(180deg);
  }
`

const floatingTicketLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
`

const floatingTicketRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
`

const mainTicketAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(6deg);
  }
  to {
    transform: rotate(0deg);
  }
`

const TicketContainer = styled(Flex)`
  animation: ${mainTicketAnimation} 3s ease-in-out infinite;
`

const StyledBuyTicketButton = styled(BuyTicketsButton)<{ disabled: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : 'linear-gradient(180deg, #7645d9 0%, #452a7a 100%)'};
  width: 200px;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 240px;
  }
`

const ButtonWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-4deg);
`

const TicketSvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-4deg);
`

const Decorations = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(/images/decorations/bg-star.svg);
  background-repeat: no-repeat;
  background-position: center 0;
`
const AnimatedCardContainer = styled(Box)`
  position: absolute;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  & img {
    position: absolute;
  }
  & :nth-child(1) {
    animation: ${floatingStarsLeft} 3s ease-in-out infinite;
    animation-delay: 0.25s;
  }
  & :nth-child(2) {
    animation: ${floatingStarsLeft} 3.5s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  & :nth-child(3) {
    animation: ${floatingStarsRight} 15s ease-in-out infinite;
    animation-delay: 0.75s;
  }
  & :nth-child(4) {
    animation: ${floatingTicketLeft} 6s ease-in-out infinite;
    animation-delay: 0.2s;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & :nth-child(1) {
      left: 0%;
      top: 42%;
    }
    & :nth-child(2) {
      left: 0%;
      top: 23%;
    }
    & :nth-child(3) {
      right: 2%;
      top: 24%;
    }
    & :nth-child(4) {
      right: 24%;
      top: 54%;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & :nth-child(1) {
      left: 5%;
      top: 19%;
    }
    & :nth-child(2) {
      left: 0%;
      top: 43%;
    }
    & :nth-child(3) {
      right: 0%;
      top: 24%;
    }
    & :nth-child(4) {
      right: 5%;
      top: 54%;
    }
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    & :nth-child(1) {
      left: 10%;
      top: 22%;
    }
    & :nth-child(2) {
      left: 8%;
      top: 50%;
    }
    & :nth-child(3) {
      right: 9%;
      top: 24%;
    }
    & :nth-child(4) {
      right: 10%;
      top: 54%;
    }
  }
`
const LotteryHero = () => {
  const { t } = useTranslation()
  const {
    currentRound: { amountCollectedInCake, status },
    isTransitioning,
  } = useLottery()

  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  const prizeTotal = getBalanceNumber(prizeInBusd)
  const ticketBuyIsDisabled = status !== LotteryStatus.OPEN || isTransitioning

  const getHeroHeading = () => {
    if (status === LotteryStatus.OPEN) {
      return (
        <>
          {prizeInBusd.isNaN() ? (
            <Skeleton my="7px" height={60} width={190} />
          ) : (
            <PrizeTotalBalance fontSize="64px" bold prefix="$" value={prizeTotal} mb="8px" decimals={0} />
          )}
          <Heading mb="32px" scale="lg" color="#ffffff">
            {t('in prizes!')}
          </Heading>
        </>
      )
    }
    return (
      <Heading mb="24px" scale="xl" color="#ffffff">
        {t('Tickets on sale soon')}
      </Heading>
    )
  }

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <AnimatedCardContainer display={['none', 'none', 'none', 'block']}>
        <img src="/images/lottery/LotterySmallest.svg" width="54px" height="109px" alt="" />
        <img src="/images/lottery/LotterySmall.svg" width="124px" height="109px" alt="" />
        <img src="/images/lottery/LotterySmall.svg" width="124px" height="109px" alt="" />
        <img src="/images/lottery/LotterySmall.svg" width="84px" height="109px" alt="" />
      </AnimatedCardContainer>
      <LotteryCard prizeTotal={prizeTotal} />
      {/* <TicketContainer
        position="relative"
        width={['240px', '288px']}
        height={['94px', '113px']}
        alignItems="center"
        justifyContent="center"
      >
        <ButtonWrapper>
          <StyledBuyTicketButton disabled={ticketBuyIsDisabled} themeMode="light" />
        </ButtonWrapper>
        <TicketSvgWrapper>
          <TicketPurchaseCard width="100%" />
        </TicketSvgWrapper>
      </TicketContainer> */}
    </Flex>
  )
}

export default LotteryHero