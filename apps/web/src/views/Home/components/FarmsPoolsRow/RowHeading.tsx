import { Heading, TextProps } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

interface HeadingProps extends TextProps {
  text: string
}

const RowHeading: React.FC<React.PropsWithChildren<HeadingProps>> = ({ text, ...props }) => {
  const { theme } = useTheme()
  const split = text.split(' ')
  const firstWord = split[0]
  const remainingWords = split.slice(1).join(' ')

  return (
    <Heading  style={{display:"flex" , justifyContent:"center",color:"#00F666" , fontFamily:"AlienSolid" }} {...props}>
       {firstWord}
      <span  style={{fontFamily:"AlienSolid"}} > {remainingWords}</span>
    </Heading>
  )
}

export default RowHeading
