import { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import { ChainId, Token } from '@pancakeswap/sdk'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { Flex, Box, SwapVertIcon, IconButton, Pool } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useIntersectionObserver } from '@pancakeswap/hooks'
import useGetTopFarmsByApr from 'views/Home/hooks/useGetTopFarmsByApr'
import useGetTopPoolsByApr from 'views/Home/hooks/useGetTopPoolsByApr'
import { vaultPoolConfig } from 'config/constants/pools'
import { useVaultApy } from 'hooks/useVaultApy'
import TopFarmPool from './TopFarmPool'
import RowHeading from './RowHeading'


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-columns: repeat(5, auto);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
  }
`

const FarmsPoolsRow = () => {
  const [showFarms, setShowFarms] = useState(true)
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const { topFarms, fetched } = useGetTopFarmsByApr(isIntersecting)
  const { topPools } = useGetTopPoolsByApr(fetched && isIntersecting)
  const { lockedApy } = useVaultApy()

  const timer = useRef<ReturnType<typeof setTimeout>>(null)
  const isLoaded = topFarms[0] && topPools[0]

  const startTimer = useCallback(() => {
    timer.current = setInterval(() => {
      setShowFarms((prev) => !prev)
    }, 6000)
  }, [timer])

  useEffect(() => {
    if (isLoaded) {
      startTimer()
    }

    return () => {
      clearInterval(timer.current)
    }
  }, [timer, isLoaded, startTimer])

  const getPoolText = (pool: Pool.DeserializedPool<Token>) => {
    if (pool.vaultKey) {
      return vaultPoolConfig[pool.vaultKey].name
    }

    return t('Stake %stakingSymbol% - Earn %earningSymbol%', {
      earningSymbol: pool.earningToken.symbol,
      stakingSymbol: pool.stakingToken.symbol,
    })
  }

  const UserBannerWrapper = styled.div`
  
    background: 'radial-gradient(52.44% 52.44% at 50.26% 115.85%, #00F666 0%, rgba(2, 73, 32, 0.2) 100%)',
    backdropFilter: "blur(5.5px)",
    color:"white",
    padding:"24px",
    marginTop:"24px",
    boxSizing: "border-box",
   boxShadow:"1px 1px 2px #00f666, 1px -2px 0px #00f666"
   
  `

//  const Mystyle={
//    background: 'radial-gradient(52.44% 52.44% at 50.26% 115.85%, #00F666 0%, rgba(2, 73, 32, 0.2) 100%)',
//     backdropFilter: "blur(5.5px)",
//     color:"white",
//     padding:"24px",
//     marginTop:"24px",
//     boxSizing: "border-box",
//    boxShadow:" 1px 1px 2px #00f666, 1px -2px 0px #00f666"

//  }

  return (
    
   
    <div    ref={observerRef}>

      <UserBannerWrapper>
      
      <Flex justifyContent="center"  flexDirection="column" mt="24px" >
        <Flex mb="24px" justifyContent="center">

      
          <RowHeading    text={showFarms ? t('Top  Farms') : t('Top Syrup Pools')} />
     

        
          {chainId === ChainId.BSC && (
            <IconButton
              variant="text"
              height="100%"
              width="auto"
              onClick={() => {
                setShowFarms((prev) => !prev)
                clearInterval(timer.current)
                startTimer()
              }}
            >
              <SwapVertIcon height="24px" width="24px" color="#00F666"/>
            </IconButton>
          )}
        </Flex>
        <Box   height={['240px', null, '100px']}>
          <Grid>
            {topFarms.map((topFarm, index) => (
              <TopFarmPool
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={topFarm?.lpSymbol}
                percentage={topFarm?.apr + topFarm?.lpRewardsApr}
                index={index}
                visible={showFarms}
              />
            ))}
          </Grid>
          {chainId === ChainId.BSC && (
            <Grid>
              {topPools.map((topPool, index) => (
                <TopFarmPool
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  title={topPool && getPoolText(topPool)}
                  percentage={topPool?.sousId === 0 ? +lockedApy : topPool?.apr}
                  index={index}
                  visible={!showFarms}
                />
              ))}
            </Grid>
          )}
        </Box>
      </Flex>
      </UserBannerWrapper>
    </div>

  )
}

export default FarmsPoolsRow
