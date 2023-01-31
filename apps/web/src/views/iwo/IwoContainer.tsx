import { ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, Box, Container, LinkExternal } from '@pancakeswap/uikit'
// import IfoLayout, { IfoLayoutWrapper } from '../Ifos/components/IfoLayout'
// import IfoPoolVaultCard from '../Ifos/components/IfoPoolVaultCard'
// import IfoQuestions from '../Ifos/components/IfoContainer'

// const IwoStepBackground = styled(Box)`
//   background: ${({ theme }) => theme.colors.gradientBubblegum};
// `

interface TypeProps {
  ifoSection?: ReactElement
  ifoSteps?: ReactElement
}

const IwoContainer: React.FC<React.PropsWithChildren<TypeProps>> = ({ ifoSection, ifoSteps }) => {
  const { t } = useTranslation()

  return <Flex width="100%" height="400px" border="1px solid" />
}

export default IwoContainer
