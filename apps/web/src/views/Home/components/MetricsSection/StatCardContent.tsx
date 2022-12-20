import { Heading, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'

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
    >
      <Heading color={highlightColor} scale="xl" mb="24px" textAlign="center">
        {firstWord}
      </Heading>
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading scale="lg" textTransform="uppercase" textAlign="center">
          {remainingWords}
        </Heading>
      ) : (
        <Heading scale="xl" textTransform="uppercase" textAlign="center">
          {remainingWords}
        </Heading>
      )}

      <Text color="textSubtle" textAlign="center">
        {bodyText}
      </Text>
    </Flex>
  )
}

export default StatCardContent
