import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Box, Button, Container, Flex, Heading, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'

const StyledHero = styled(Box)`
  //background-image: url('/images/ifos/assets/ifo-banner-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: auto 100%;
`

const StyledHeading = styled(Heading)`
  font-size: 40px;
  font-family: Alien;
  color: #fff;
  text-align: center;
  text-shadow: -1px 0px 12px #00f666;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 64px;
  }
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 13px;
  height: auto;
  text-transform: uppercase;
  align-self: flex-start;
  font-size: 12px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  border-radius: 8px;
  margin-left: 8px;
`

const DesktopButton = styled(Button)`
  align-self: flex-end;
`

const StyledSubTitle = styled(Text)`
  font-size: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
  }
`

const Hero = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const handleClick = () => {
    const howToElem = document.getElementById('ifo-how-to')
    if (howToElem != null) {
      howToElem.scrollIntoView()
    } else {
      router.push('/ifo#ifo-how-to')
    }
  }

  return (
    <Box mb="8px">
      <StyledHero py={['16px', '16px', '32px']} minHeight={['212px', '212px', '197px']}>
        <Container>
          <Flex
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            style={{ gap: '4px' }}
          >
            <Box m="0 auto">
              <StyledHeading as="h1" mb={['12px', '12px', '16px']}>
                <span style={{ fontFamily: 'Alien', color: '#00F666' }}>ILO:</span> initial LOREM offering
              </StyledHeading>
              <StyledSubTitle bold textAlign="center">
                {t('Buy new tokens launching on BNB Smart Chain')}
                {/* {isMobile && <StyledButton onClick={handleClick}>{t('How does it work?')}</StyledButton>} */}
              </StyledSubTitle>
            </Box>
          </Flex>
        </Container>
      </StyledHero>
    </Box>
  )
}

export default Hero
