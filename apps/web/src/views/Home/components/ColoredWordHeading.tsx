import { useMemo } from 'react'
import { Colors, Heading, TextProps } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

interface HeadingProps extends TextProps {
  text: string
  firstColor?: keyof Colors
}

const ColoredWordHeading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  text,
  firstColor,
  mb = '24px',
  ...props
}) => {
  const { theme } = useTheme()
  const { firstWord, remainingWords } = useMemo(() => {
    const split = text.split(' ')
    let first = split[0]
    first = first + ' ' + split[1]
    const remaining = split.slice(2).join(' ')
    return { firstWord: first, remainingWords: remaining }
  }, [text])
  const displayedColor = (theme.colors[firstColor] as string) ?? theme.colors.primary

  return (
    <>
      <Heading scale="xl" mb={mb} {...props} textTransform="uppercase">
        <span style={{ color: displayedColor }}>{firstWord} </span>
      </Heading>
      <Heading scale="xl" textAlign="center">
        {remainingWords}
      </Heading>
    </>
  )
}

export default ColoredWordHeading
