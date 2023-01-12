import { useMemo } from 'react'
import { Colors, Heading, TextProps, Text } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import styled, { keyframes } from 'styled-components'

interface HeadingProps extends TextProps {
  text: string
  firstColor?: keyof Colors
  firstWordlen?: number
}

const ColoredWordHeading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  text,
  firstColor,
  mb = '24px',
  ...props
}) => {
  const { theme } = useTheme()
  // const { firstWord, remainingWords } = useMemo(() => {
  //   const split = text.split(' ')
  //   let sum = ''
  //   for (let i = 0; i < firstWordlen; i++) {
  //     sum = `${sum} ${split[i]}`
  //   }
  //   const remaining = split.slice(firstWordlen).join(' ')
  //   return { firstWord: sum, remainingWords: remaining }
  // }, [text])

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
    margin: -10px 0;
  `
  const StyledSpan = styled.span`
    text-shadow: -1px 0px 12px #00f666;
    font-family: 'Alien';
    color: #fff;
  `
  const displayedColor = (theme.colors[firstColor] as string) ?? theme.colors.secondary

  return (
    <>
      {text === 'Trade anything. No registration,no hassle.' && (
        <>
          <StyledHeading mb={mb} scale="xl" textTransform="uppercase" textAlign="center">
            Trade anything <StyledSpan>No</StyledSpan>
          </StyledHeading>
          <StyledSubHeading scale="xl" textTransform="uppercase" textAlign="center">
            registration,no hassle.
          </StyledSubHeading>
        </>
      )}
      {text === 'Earn passive income with crypto.' && (
        <>
          <StyledHeading scale="xl" mb={mb} {...props} textTransform="uppercase" textAlign="center">
            Earn passive income
          </StyledHeading>
          <StyledSubHeading scale="xl" textTransform="uppercase" textAlign="center">
            with crypto.
          </StyledSubHeading>
        </>
      )}
      {text === 'Aliens knew The universe better' && (
        <>
          <StyledHeading scale="xl" mb={mb} {...props} textTransform="uppercase">
            Aliens <StyledSpan>knew</StyledSpan>
          </StyledHeading>
          <StyledSubHeading scale="xl" textTransform="uppercase" textAlign="center">
            The universe better
          </StyledSubHeading>
        </>
      )}
    </>
  )
}

export default ColoredWordHeading
