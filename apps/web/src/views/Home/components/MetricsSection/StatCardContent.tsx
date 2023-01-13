import { Heading, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import styled from 'styled-components'

const StyledText = styled(Text)`
  opacity: 0.5;
`
const StatCardContent: React.FC<
  React.PropsWithChildren<{ headingText: string; bodyText: string; highlightColor: string }>
> = ({ headingText, bodyText, highlightColor }) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split(' ')
  const firstWord = split[0]
  const remainingWords = split.slice(1, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '32px']}
      mb={[null, null, null, '32px']}
      margin="0 auto"
    >
      <Heading
        style={{ textShadow: '-1px 0px 12px #00f666', letterSpacing: '0.12em' }}
        scale="xl"
        mb="24px"
        textAlign="center"
        fontFamily="Alien"
      >
        {firstWord}
      </Heading>

      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading
          style={{ textShadow: '-1px 0px 12px #00f666', letterSpacing: '0.12em' }}
          scale="lg"
          textTransform="uppercase"
          textAlign="center"
          fontFamily="Alien"
        >
          {remainingWords}
        </Heading>
      ) : (
        <Heading
          style={{ textShadow: '-1px 0px 12px #00f666', letterSpacing: '0.12em' }}
          scale="xl"
          textTransform="uppercase"
          textAlign="center"
          fontFamily="Alien"
        >
          {remainingWords}
        </Heading>
      )}

      <StyledText color="textSubtle" textAlign="center">
        {bodyText}
      </StyledText>
    </Flex>
  )
}

export default StatCardContent
