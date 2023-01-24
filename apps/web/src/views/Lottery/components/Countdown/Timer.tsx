import styled from 'styled-components'
import { Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

export interface TimerProps {
  seconds?: number
  minutes?: number
  hours?: number
  days?: number
  wrapperClassName?: string
}

const StyledTimerFlex = styled(Flex)<{ showTooltip?: boolean }>`
  ${({ theme, showTooltip }) => (showTooltip ? ` border-bottom: 1px dashed ${theme.colors.textSubtle};` : ``)}
  div:last-of-type {
    margin-right: 0;
  }
`

const StyledTimerText = styled(Heading)`
  //background: ${({ theme }) => theme.colors.gradientGold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: #00f666;
`

const Wrapper: React.FC<React.PropsWithChildren<TimerProps>> = ({
  minutes,
  hours,
  days,
  seconds,
  wrapperClassName,
}) => {
  const { t } = useTranslation()

  return (
    <StyledTimerFlex alignItems="flex-end" className={wrapperClassName}>
      {Boolean(days) && (
        <>
          <StyledTimerText scale="xl">{days}</StyledTimerText>
          <StyledTimerText mr="12px" scale="xl">
            {t('d')}
          </StyledTimerText>
        </>
      )}
      {Boolean(hours) && (
        <>
          <StyledTimerText scale="xl">{hours}</StyledTimerText>
          <StyledTimerText scale="xl" mr="12px">
            {t('h')}
          </StyledTimerText>
        </>
      )}
      {Boolean(minutes) && (
        <>
          <StyledTimerText scale="xl">{minutes}</StyledTimerText>
          <StyledTimerText mr="12px" scale="xl">
            {t('m')}
          </StyledTimerText>
        </>
      )}
      {Boolean(seconds) && (
        <>
          <StyledTimerText scale="xl">{seconds}</StyledTimerText>
          <StyledTimerText mr="12px" scale="xl">
            {t('s')}
          </StyledTimerText>
        </>
      )}
    </StyledTimerFlex>
  )
}

export default Wrapper
