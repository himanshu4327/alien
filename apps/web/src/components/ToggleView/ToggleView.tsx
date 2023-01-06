import { useCallback } from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon, IconButton } from '@pancakeswap/uikit'
import { ViewMode } from 'state/user/actions'

interface ToggleViewProps {
  idPrefix: string
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`
  margin-left: -8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
  }
`

const ToggleView: React.FunctionComponent<React.PropsWithChildren<ToggleViewProps>> = ({
  idPrefix,
  viewMode,
  onToggle,
}) => {
  const handleToggleCard = useCallback(() => {
    if (viewMode !== ViewMode.CARD) {
      onToggle(ViewMode.CARD)
    }
  }, [onToggle, viewMode])

  const handleToggleTable = useCallback(() => {
    if (viewMode !== ViewMode.TABLE) {
      onToggle(ViewMode.TABLE)
    }
  }, [onToggle, viewMode])

  return (
    <Container>
      <IconButton   id={`${idPrefix}CardView`} onClick={handleToggleCard}>
        <CardViewIcon color={viewMode === ViewMode.CARD ? '0px 0px 11px -1px #00F666' : 'textDisabled'} />
      </IconButton>
      <IconButton  id={`${idPrefix}TableView`} onClick={handleToggleTable}>
        <ListViewIcon color={viewMode === ViewMode.TABLE ? '' : 'textDisabled'} />
      </IconButton>
    </Container>
  )
}

export default ToggleView