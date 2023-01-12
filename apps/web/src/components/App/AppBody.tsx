import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  max-width: 436px;
  width: 100%;
  z-index: 1;
  background: radial-gradient(78.23% 34.54% at 49.89% 118.47%, #00f666 0%, rgba(2, 73, 32, 0.2) 100%);
  backdrop-filter: blur(5.5px);

  transform: matrix(1, 0, 0, 1, 0, 0);
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
