import styled from 'styled-components'
import { ChevronRightIcon, Button as UIKitButton, AutoRenewIcon, ChevronDownIcon, Box, Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

export enum ButtonArrangement {
  ROW = 'row',
  SEQUENTIAL = 'sequential',
}

interface ConfirmButtonProps {
  isConfirming: boolean
  isConfirmDisabled: boolean
  onConfirm: () => void
  buttonArrangement?: ButtonArrangement
  confirmLabel?: string
  confirmId?: string
}

const StyledApproveConfirmButtonRow = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  // ${({ theme }) => theme.mediaQueries.md} {
  //   grid-template-columns: 1fr 24px 1fr;
  // }
`

const Button = styled(UIKitButton)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 160px;
  }
`

const iconAttrs = { width: '24px', color: 'textDisabled' }

const ChevronRight = styled(ChevronRightIcon).attrs(iconAttrs)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const ChevronBottom = styled(ChevronDownIcon).attrs(iconAttrs)`
  display: block;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const spinnerIcon = <AutoRenewIcon spin color="currentColor" />

const ConfirmButton: React.FC<React.PropsWithChildren<ConfirmButtonProps>> = ({
  isConfirming,
  isConfirmDisabled,
  onConfirm,
  buttonArrangement = ButtonArrangement.ROW,
  confirmLabel,
  confirmId,
}) => {
  const { t } = useTranslation()
  const confirmButtonText = confirmLabel ?? t('Confirm')

  const ApproveConfirmRow = () => {
    return (
      <StyledApproveConfirmButtonRow>
        {/* <Box>
          <Button
            disabled={isApproveDisabled}
            onClick={onApprove}
            endIcon={isApproving ? spinnerIcon : undefined}
            isLoading={isApproving}
          >
            {isApproving ? t('Enabling') : t('Enable')}
          </Button>
        </Box> */}
        {/* <Flex justifyContent="center">
          <ChevronRight />
          <ChevronBottom />
        </Flex> */}
        <Flex justifyContent="center" border="1px solid black">
          <Button
            id={confirmId}
            onClick={onConfirm}
            disabled={isConfirmDisabled}
            isLoading={isConfirming}
            endIcon={isConfirming ? spinnerIcon : undefined}
          >
            {isConfirming ? t('Confirming') : confirmButtonText}
          </Button>
        </Flex>
      </StyledApproveConfirmButtonRow>
    )
  }

  const ApproveConfirmSequential = () => {
    return (
      <>
        <Box>
          <Button
            id={confirmId}
            onClick={onConfirm}
            disabled={isConfirmDisabled}
            isLoading={isConfirming}
            endIcon={isConfirming ? spinnerIcon : undefined}
          >
            {isConfirming ? t('Confirming') : confirmButtonText}
          </Button>
        </Box>
      </>
    )
  }

  return buttonArrangement === ButtonArrangement.ROW ? ApproveConfirmRow() : ApproveConfirmSequential()
}

export default ConfirmButton
