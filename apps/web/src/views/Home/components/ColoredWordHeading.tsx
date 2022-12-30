import { useMemo } from 'react'
import { Colors, Heading, TextProps } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import styled, { keyframes } from 'styled-components'
interface HeadingProps extends TextProps {
  text: string
  firstColor?: keyof Colors
  firstWordlen : number
}

const ColoredWordHeading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  text,
  firstColor,
  firstWordlen = 3,
  mb = '24px',
  ...props
}) => {
  const { theme } = useTheme()
  const { firstWord, remainingWords } = useMemo(() => {
    const split = text.split(' ')
    let sum = "";
    for(let i=0; i<firstWordlen ; i++ ){
       sum = `${sum} ${split[i]}`
    }  
    

    const remaining = split.slice(firstWordlen).join(' ')
    return { firstWord: sum, remainingWords: remaining }
  }, [text])
  
  
  const StyledHeading = styled.span`
  // letter-spacing: 0.12em;

  color: #ffffff;
  text-shadow: -1px 0px 12px #00f666;
`
const StyledSpan = styled.span`
   color: #00f666;

  text-shadow: -1px 0px 12px #00f666;
`
  const displayedColor = (theme.colors[firstColor] as string) ?? theme.colors.secondary

  return (
    <>
      <Heading scale="xl" mb={mb} {...props} textTransform="uppercase">
     <StyledHeading>
     {firstWord}
      </StyledHeading>  

      <StyledSpan>
      {remainingWords}
      </StyledSpan>
      </Heading>
   
    </>
  )
}

export default ColoredWordHeading
