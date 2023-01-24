import { Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import getTimePeriods from '@pancakeswap/utils/getTimePeriods'
import Timer from './Timer'
import useNextEventCountdown from '../../hooks/useNextEventCountdown'

interface CountdownProps {
  nextEventTime: number
  preCountdownText?: string
  postCountdownText?: string
}

const Countdown: React.FC<React.PropsWithChildren<CountdownProps>> = ({
  nextEventTime,
  preCountdownText,
  postCountdownText,
}) => {
  const secondsRemaining = useNextEventCountdown(nextEventTime)
  const { days, hours, minutes } = getTimePeriods(secondsRemaining)

  return (
    <>
      {secondsRemaining ? (
        <Flex display="inline-flex" justifyContent="flex-end" alignItems="center">
          {preCountdownText && (
            <Heading mr="12px" color="#ffff">
              {preCountdownText}
            </Heading>
          )}
          <Timer minutes={minutes + 1} hours={hours} days={days} />
          {postCountdownText && (
            <Heading color="#ffff" maxWidth="150px">
              {postCountdownText}
            </Heading>
          )}
        </Flex>
      ) : (
        <Skeleton height="41px" width="250px" />
      )}
    </>
  )
}

export default Countdown
