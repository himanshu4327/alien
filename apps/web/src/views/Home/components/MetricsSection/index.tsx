/* eslint-disable react/jsx-no-comment-textnodes */
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon, Card } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from '@pancakeswap/utils/formatBalance'
import styled from 'styled-components'
import useSWRImmutable from 'swr/immutable'
import Image from 'next/image'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
// import GradientLogo from '../GradientLogoSvg'
import GradientLogo from '../../../../../public/images/Gradient-logo.png'

const StyledHeading = styled(Heading)`
  text-shadow: -1px 0px 12px #00f666;
  letter-spacing: 0.12em;
  font-family: 'Alien';
`
const StyledSpan = styled.span`
  letter-spacing: 0.12em;
  text-shadow: -1px 0px 12px #00f666;
  color: #00f666;
  font-family: 'Alien';
`

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <img src={GradientLogo.src} alt="" height={100} width={100} />
      <StyledHeading textAlign="center" scale="xl" textTransform="uppercase">
        WHICH SIDE ARE <StyledSpan>YOU ON? </StyledSpan>
      </StyledHeading>

      <Flex flexDirection={['column', null, null, 'row']} mt="50px">
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          {/* <StatCardContent
            headingText={t('%users% users', { users })}
            bodyText={t('in the last 30 days')}
            highlightColor={theme.colors.primary}
          /> */}
          <Flex flexDirection="column" alignItems="center" minWidth="250px">
            <Heading scale="xl" fontFamily="Alien" my="20px">
              Users
            </Heading>
            <Heading scale="lg" color="#ccc" fontWeight="400">
              N/A
            </Heading>
          </Flex>
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          {/* <StatCardContent
            headingText={t('%trades% trades', { trades })}
            bodyText={t('made in the last 30 days')}
            highlightColor={theme.colors.primary}
          /> */}
          <Flex flexDirection="column" alignItems="center" minWidth="250px">
            <Heading scale="xl" fontFamily="Alien" my="20px">
              Trades
            </Heading>
            <Heading scale="lg" color="#ccc" fontWeight="400">
              N/A
            </Heading>
          </Flex>
        </IconCard>
        <IconCard {...StakedCardData}>
          {/* <StatCardContent
            headingText={t('$%tvl% staked', { tvl: tvlString })}
            bodyText={t('Total Value Locked')}
            highlightColor={theme.colors.primary}
          /> */}
          <Flex flexDirection="column" alignItems="center" minWidth="250px">
            <Heading scale="xl" fontFamily="Alien" my="20px">
              Staked
            </Heading>
            <Heading scale="lg" color="#ccc" fontWeight="400">
              N/A
            </Heading>
          </Flex>
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
