import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

const IfoLayout = styled(Box)`
  > div:not(.sticky-header) {
    margin-bottom: 32px;
  }
`
export const IfoLayoutWrapper = styled(IfoLayout)`
  column-gap: 32px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  max-width: 700px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: minmax(300px);
  }

  > div {
    margin: 0 auto;
  }
`

export default IfoLayout
