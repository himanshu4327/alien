import styled from 'styled-components'
import { Flex, Heading, Text, Link, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
// import Container from 'components/Layout/Container'
import { useAccount } from 'wagmi'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'
import spaceUFO from '../../../../public/images/alien/space.svg'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const Container = styled(Flex)`
  width: 100%;
  height: 150px;
  flex-direction: column;
  position: relative;
  background: radial-gradient(53.64% 53.64% at 50.26% 107.66%, #00f666 0%, rgba(2, 73, 32, 0.2) 100%);
  backdrop-filter: blur(5.5px);
  margin: 100px 0;
  border-right: 1px solid #00f666;
  border-bottom: 1px solid #00f666;
  border-top: 1px solid #00f666;
  @media only screen and (min-width: 852px) {
    height: 200px;
  }
`

const StyledHeading = styled(Heading)`
  letter-spacing: 0.12em;
  font-family: 'Alien';
  width: 100%;
`
const StyledSpan = styled.span`
  color: #00f666;
  font-family: 'Alien';
`
const StyledBox = styled.div`
  height: 300px;
  position: absolute;
  left: 0px;
  right: 10px;
  bottom: -145px;
  width: 100%;
`
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`
const StyledText = styled(Text)`
  opacity: 0.5;
`
const StyledConntectButton = styled(ConnectWalletButton)`
  color: #00f666;
`
const Footer = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isTablet, isDesktop } = useMatchBreakpoints()

  return (
    <>
      <Wrapper>
        <Container>
          <StyledHeading my="24px" scale="xl" color="white" textAlign="center">
            Start in <StyledSpan>seconds.</StyledSpan>
          </StyledHeading>
          <StyledBox>
            <StyledImage src={spaceUFO.src} alt="ufo" />
          </StyledBox>
        </Container>

        <StyledText textAlign="center" color="white" mb="10px">
          Alien token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck,
          you can even vote with it!
        </StyledText>

        {!account && <StyledConntectButton />}
      </Wrapper>
    </>
  )
}

export default Footer
