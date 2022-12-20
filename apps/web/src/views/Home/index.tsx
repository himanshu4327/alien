import styled, { keyframes } from 'styled-components'
import PageSection from 'components/PageSection'
import { useAccount } from 'wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'
import { Box, Button, Flex, Heading, NextLinkFromReactRouter, Text } from '@pancakeswap/uikit'
import { StyledText } from '@pancakeswap/uikit/src/components/Footer/styles'
import ConnectWalletButton from 'components/ConnectWalletButton'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`
const floatingAnim = (x: string, y: string) => keyframes`
  from {
    transform: rotate(50deg);
    transform: translate(50%, 0px);
  }
  50% {
    transform: rotate(100deg);
       
  }
  75% {
    transform:rotate(40deg);
    transform: translate(100%, 600px);
  }
  100%{
    transform: translate(0px, 0px);
  }

`
const FloatingUfos = styled.div`
  background-image: url('/images/alien/ufos.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  animation: ${floatingAnim('50%', '200px')} 15s ease-in-out infinite;
  animation-delay: 1s;
`
const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`
const StyledHeading = styled(Heading)`
  letter-spacing: 0.12em;
  color: #ffffff;
  text-shadow: -1px 0px 12px #00f666;
`
const StyledSpan = styled.span`
  color: #00f666;
  text-shadow: -1px 0px 12px #00f666;
`
const StyledSubHeading = styled(Text)`
  opacity: 0.5;
`
const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <style jsx global>{`
        #home-1 .page-bg {
          background: linear-gradient(139.73deg, #e6fdff 0%, #f3efff 100%);
        }
        [data-theme='dark'] #home-1 .page-bg {
          background-image: url('/images/bg-hero.png');
          background-size: cover;
        }

        #home-2 .page-bg {
          background: linear-gradient(180deg, #ffffff 22%, #d7caec 100%);
        }
        [data-theme='dark'] #home-2 .page-bg {
          background: #000;
        }
        #home-3 .page-bg {
          background: linear-gradient(180deg, #6fb6f1 0%, #eaf2f6 100%);
        }
        [data-theme='dark'] #home-3 .page-bg {
          background: #000;
        }
        #home-4 .inner-wedge svg {
          fill: #d8cbed;
        }
        [data-theme='dark'] #home-4 .inner-wedge svg {
          fill: #000;
        }
      `}</style>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        {/* {account && chainId === ChainId.BSC && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )} */}
        {/* <MultipleBanner /> */}
        <Flex marginTop="150px" zIndex="2">
          <StyledHeading scale="xxl" textTransform="uppercase" textAlign="center">
            The world is ruled by humans, Universe IS by <StyledSpan>Alien</StyledSpan>
          </StyledHeading>
        </Flex>
        <Box maxWidth="700px" margin="50px auto">
          <StyledSubHeading fontSize="24px" textTransform="uppercase" textAlign="center">
            Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.
          </StyledSubHeading>
        </Box>
        <Flex justifyContent="center">
          {!account && <ConnectWalletButton mr="8px" />}
          <NextLinkFromReactRouter to="/swap">
            <Button variant={'Alien'}>{t('Trade Now')}</Button>
          </NextLinkFromReactRouter>
        </Flex>
        {/* <Hero /> */}
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-2',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <FloatingUfos />
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        containerProps={{
          id: 'home-4',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradientCardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData(t)} />
        {/* TODO: until we are enable fetch multi-chain farms */}
        {chainId === ChainId.BSC && <FarmsPoolsRow />}
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        containerProps={{
          id: 'home-3',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
