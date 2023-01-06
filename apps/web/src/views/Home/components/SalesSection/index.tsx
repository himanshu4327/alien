import { Flex, Text, Button, Link, NextLinkFromReactRouter as RouterLink } from '@pancakeswap/uikit'
import Image from 'next/image'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'
// import fired from '../../../../../public/images/alien/fireBurner.gif'
interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton?: SalesSectionButton
  secondaryButton?: SalesSectionButton
  images: CompositeImageProps
}

const SalesSection: React.FC<React.PropsWithChildren<SalesSectionProps>> = (props) => {
  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" alignItems={['flex-end', null, null, 'center']}>
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <ColoredWordHeading    text={headingText} textAlign="center" />

          <Flex
            flex={[null, null, null, '1']}
            mt="5rem"
            mb={['24px', null, null, '0']}
            maxWidth="2000px"
            alignItems="center"
          >
            <Image src={images.path} alt="gif" width={1200} height={1200} />
          </Flex>
          <Text fontSize="16px"   fontFamily="Aliensolid" color="textSubtle" mb="24px" textAlign="center" width="80%" margin="0 auto">
            {bodyText}
          </Text>
          <Flex justifyContent="center" my="10px">
            <Button mr="16px">
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text  style={{fontFamily: "AlienSolid" , fontSize:"16px"}} color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text  style={{fontFamily: "AlienSolid" , fontSize:"16px"}} color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </RouterLink>
              )}
            </Button>
            {secondaryButton.external ? (
              <Link external href={secondaryButton.to}>
               <Text  style={{fontFamily: "AlienSolid" , fontSize:"16px"}}>
               {secondaryButton.text}
                </Text> 
              </Link>
            ) : (
              <RouterLink to={secondaryButton.to}>{secondaryButton.text}</RouterLink>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SalesSection
