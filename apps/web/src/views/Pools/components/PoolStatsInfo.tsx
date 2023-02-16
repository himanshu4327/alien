import { Flex, Link, LinkExternal, Skeleton, Text, TimerIcon, Balance, Pool } from '@pancakeswap/uikit'
import AddToWalletButton, { AddToWalletTextOptions } from 'components/AddToWallet/AddToWalletButton'
import { bsc } from '@pancakeswap/wagmi/chains'
import { useTranslation } from '@pancakeswap/localization'
import { memo } from 'react'
import { useCurrentBlock } from 'state/block/hooks'
import { useVaultPoolByKey } from 'state/pools/hooks'
import { VaultKey } from 'state/types'
import { getBlockExploreLink } from 'utils'
import { getAddress, getVaultPoolAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { getPoolBlockInfo } from 'views/Pools/helpers'
import { Token } from '@pancakeswap/sdk'
import MaxStakeRow from './MaxStakeRow'
import { AprInfo, DurationAvg, PerformanceFee, TotalLocked, TotalStaked } from './Stat'

interface ExpandedFooterProps {
  pool: Pool.DeserializedPool<Token>
  account: string
  showTotalStaked?: boolean
  alignLinksToRight?: boolean
}

const PoolStatsInfo: React.FC<React.PropsWithChildren<ExpandedFooterProps>> = ({
  pool,
  account,
  showTotalStaked = true,
  alignLinksToRight = true,
}) => {
  const { t } = useTranslation()
  const currentBlock = useCurrentBlock()

  const {
    stakingToken,
    earningToken,
    totalStaked,
    startBlock,
    endBlock,
    stakingLimit,
    stakingLimitEndBlock,
    contractAddress,
    vaultKey,
    profileRequirement,
    isFinished,
    userData: poolUserData,
  } = pool

  const stakedBalance = poolUserData?.stakedBalance ? poolUserData.stakedBalance : BIG_ZERO

  const {
    totalCakeInVault,
    totalLockedAmount,
    fees: { performanceFeeAsDecimal },
    userData,
  } = useVaultPoolByKey(vaultKey)

  const tokenAddress = earningToken.address || ''
  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getVaultPoolAddress(vaultKey)

  const { shouldShowBlockCountdown, blocksUntilStart, blocksRemaining, hasPoolStarted, blocksToDisplay } =
    getPoolBlockInfo(pool, currentBlock)

  return (
    <>
      <Flex
        flexDirection={['column', 'column', 'row', 'column', 'row']}
        justifyContent={['space-between', 'space-between', 'space-between', 'space-between', 'center']}
      >
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent="space-evenly"
          width={['100%', '100%', '50%', '100%', '50%']}
        >
          {!vaultKey && <AprInfo pool={pool} stakedBalance={stakedBalance} />}
          {showTotalStaked && (
            <TotalStaked totalStaked={vaultKey ? totalCakeInVault : totalStaked} stakingToken={stakingToken} />
          )}
          {vaultKey === VaultKey.CakeVault && (
            <TotalLocked totalLocked={totalLockedAmount} lockedToken={stakingToken} />
          )}
          {vaultKey === VaultKey.CakeVault && <DurationAvg />}
          {!isFinished && stakingLimit && stakingLimit.gt(0) && (
            <MaxStakeRow
              small
              currentBlock={currentBlock}
              hasPoolStarted={hasPoolStarted}
              stakingLimit={stakingLimit}
              stakingLimitEndBlock={stakingLimitEndBlock}
              stakingToken={stakingToken}
            />
          )}
          {vaultKey && <PerformanceFee userData={userData} performanceFeeAsDecimal={performanceFeeAsDecimal} />}
          {shouldShowBlockCountdown && (
            <Flex
              mb="2px"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={['row', 'row', 'row', 'column', 'column']}
            >
              <Text small color="textSubtle">
                {hasPoolStarted ? t('Ends in') : t('Starts in')}:
              </Text>
              {blocksRemaining || blocksUntilStart ? (
                <Flex alignItems="center">
                  <Link external href={getBlockExploreLink(hasPoolStarted ? endBlock : startBlock, 'countdown')}>
                    <Balance small value={blocksToDisplay} decimals={0} />
                    <Text small ml="4px" textTransform="lowercase">
                      {t('Blocks')}
                    </Text>
                    <TimerIcon ml="4px" />
                  </Link>
                </Flex>
              ) : (
                <Skeleton width="54px" height="21px" />
              )}
            </Flex>
          )}
        </Flex>
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent="space-evenly"
          // width={['100%', '100%', '50%', '100%', '50%']}
          // maxWidth="520px"
        >
          <Flex mb="2px" justifyContent="flex-start" mx={['0', '0', '0', '0', '5px']}>
            <LinkExternal href={`/info/token/${earningToken.address}`} bold={false} small>
              {t('See Token Info')}
            </LinkExternal>
          </Flex>
          {!vaultKey && (
            <Flex mb="2px" justifyContent="flex-start" mx={['0', '0', '0', '0', '5px']}>
              <LinkExternal href={earningToken.projectLink} bold={false} small>
                {t('View Project Site')}
              </LinkExternal>
            </Flex>
          )}
          {vaultKey && (
            <Flex mb="2px" justifyContent="flex-start" mx={['0', '0', '0', '0', '5px']}>
              <LinkExternal
                href="https://docs.pancakeswap.finance/products/syrup-pool/new-cake-pool"
                bold={false}
                small
              >
                {t('View Tutorial')}
              </LinkExternal>
            </Flex>
          )}
          {poolContractAddress && (
            <Flex mb="2px" justifyContent="flex-start" mx={['0', '0', '0', '0', '5px']}>
              <LinkExternal
                href={`${bsc.blockExplorers.default.url}/address/${
                  vaultKey ? cakeVaultContractAddress : poolContractAddress
                }`}
                bold={false}
                small
              >
                {t('View Contract')}
              </LinkExternal>
            </Flex>
          )}
          {account && tokenAddress && (
            <Flex justifyContent="flex-start" mx={['0', '0', '0', '0', '5px']}>
              <AddToWalletButton
                variant="text"
                p="0"
                height="auto"
                style={{ fontSize: '14px', fontWeight: '400', lineHeight: 'normal' }}
                marginTextBetweenLogo="4px"
                textOptions={AddToWalletTextOptions.TEXT}
                tokenAddress={tokenAddress}
                tokenSymbol={earningToken.symbol}
                tokenDecimals={earningToken.decimals}
                tokenLogo={`https://tokens.pancakeswap.finance/images/${tokenAddress}.png`}
              />
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default memo(PoolStatsInfo)
