import styled, { ThemeConsumer, keyframes } from 'styled-components'
import PageSection from 'components/PageSection'
import { useAccount } from 'wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { Box, Button, Flex, Heading, NextLinkFromReactRouter, Text } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { StyledText } from '@pancakeswap/uikit/src/components/Footer/styles'
import ConnectWalletButton from 'components/ConnectWalletButton'
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

import { swapStartInSecondData } from './components/StartInSecondSectionData/data'
import StartInSecondSectionData from './components/StartInSecondSectionData'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  border: 2px solid red ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const floatingAnimSm = (x: string, y: string) => keyframes`
  from {
    transform: rotate(10deg) translate(150%, 0px);
  }
  50% {
    transform: rotate(100deg) translate(200px, 100px);
  }
  75% {
    transform:rotate(200deg) translate(150px, -150px);
  }
  100%{
    transform: translate(100px, 0px);
  }

`

const floatingAnimRight = (x: string, y: string) => keyframes`
  from {
    transform: rotate(50deg);
    transform: translate(-50%, 0px);
  }
  50% {
    transform: rotate(100deg);
       
  }
  75% {
    transform:rotate(40deg);
    transform: translate(-100%, -600px);
  }
  100%{
    transform: translate(0px, 0px);
  }

`
const floatingAnimTopRight = (x: string, y: string) => keyframes`
from {
  -webkit-transform: rotateZ(360deg);
          transform: rotateZ(180deg);
}
to {
  -webkit-transform:  rotateZ(360deg);
          transform:  rotateZ(-360deg);
}


`

const FloatingUfos = styled.div`
  background-image: url('/images/alien/ufos.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  animation: ${floatingAnimSm('100%', '50px')} 25s ease-in-out infinite;
  animation-delay: 1s;
  overflow: hidden;
`
const FloatingUfosRight = styled.div`
  background-image: url('/images/alien/rightdown.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  animation: ${floatingAnimRight('50%', '200px')} 45s ease-in-out infinite;
  animation-delay: 1s;
  overflow: hidden;
`
const FloatingUfosTopRight = styled.div`
  background-image: url('/images/alien/spaceRight.svg');
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: -12rem;
  animation: ${floatingAnimTopRight('50%', '200%')} 43s linear infinite;
  animation-delay: 1s;
  width: 300px;
  height: 300px;
  display: none;
  overflow: hidden;
  @media only screen and (min-width: 856px) {
    display: block;
  }
`
const UserBannerWrapper = styled.div`
  margin-top: 52px;
  padding: 24px;
  background: radial-gradient(52.44% 52.44% at 50.26% 115.85%, #00f666 0%, rgba(2, 73, 32, 0.2) 100%);
  backdrop-filter: blur(5.5px);
  box-shadow: 0px 0px 2px #00f666, 1px -1px 0px #00f666;
  padding-bottom: 100px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 50px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: 24px;
  }
`

const StyledHeading = styled(Heading)`
  letter-spacing: 0.12em;
  color: #fffff;
  text-shadow: -1px 0px 12px #00f666;
  font-family: 'Alien';
`
const StyledSpan = styled.span`
  color: #00f666;
  font-family: Alien;
  text-shadow: -1px 0px 12px #00f666;
`
const StyledButton = styled(ConnectWalletButton)`
  color: #00f666;
`
const StyledSubHeading = styled(Heading)`
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
          background: url('/images/bg-hero.png') rgba(0, 0, 0, 0.6);
          background-blend-mode: multiply;
          background-size: cover;
          backgroun-repeat: no-repeat;
          background-position: 0 -200px;
          box-shadow: inset 0px -200px 100px #000;
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
        <Flex paddingTop="123px" zIndex="-1">
          <StyledHeading scale="xxl" textTransform="uppercase" textAlign="center">
            The world is ruled by humans, Universe IS by <StyledSpan>Alien</StyledSpan>
          </StyledHeading>
        </Flex>
        <Box maxWidth="700px" margin="50px auto">
          <StyledSubHeading scale="md" textTransform="uppercase" textAlign="center">
            Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.
          </StyledSubHeading>
        </Box>
        <Flex marginTop="120px" justifyContent="center">
          {!account && <StyledButton mr="8px" />}
          <NextLinkFromReactRouter to="/swap">
            <Button>{t('Trade Now')}</Button>
          </NextLinkFromReactRouter>
        </Flex>
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-2',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <div style={{ display: 'flex', justifyContent: 'end', position: 'relative' }}>
          <FloatingUfosTopRight />
        </div>

        <FloatingUfos />
        <MetricsSection />
        <div className="circle">
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <FloatingUfosRight />
          </div>
        </div>
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
        <SalesSection {...swapSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradientCardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...earnSectionData(t)} />
        {/* TODO: until we are enable fetch multi-chain farms */}

        <UserBannerWrapper>{chainId === ChainId.BSC && <FarmsPoolsRow />}</UserBannerWrapper>
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
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        {/* <StartInSecondSectionData {...swapStartInSecondData(t)} /> */}
        <div>
          <Footer />
        </div>
      </PageSection>
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
        index={2}
        hasCurvedDivider={false}
      >
      
        
        
      </PageSection> */}
    </>
  )
}

export default Home
