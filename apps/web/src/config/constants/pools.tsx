import { BigNumber } from '@ethersproject/bignumber'
import { Pool } from '@pancakeswap/uikit'
import { SerializedWrappedToken } from '@pancakeswap/token-lists'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { arbitrumTokens } from '@pancakeswap/tokens'
import { PoolCategory } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto Alien</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 800000,
    tokenImage: {
      primarySrc: `/images/tokens/${arbitrumTokens.alien.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake Alien</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 800000,
    tokenImage: {
      primarySrc: `/images/tokens/${arbitrumTokens.alien.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible Alien</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 800000,
    tokenImage: {
      primarySrc: `/images/tokens/${arbitrumTokens.alien.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake Alien to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${arbitrumTokens.alien.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: Pool.SerializedPoolConfig<SerializedWrappedToken>[] = [
  {
    sousId: 0,
    stakingToken: arbitrumTokens.alien,
    earningToken: arbitrumTokens.alien,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
      42161: '0xa9CEb12419942df3989397027D240f9cd9547DB1'
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4',
    isFinished: false,
  },
].map((p) => ({
  ...p,
  isFinished: false,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [

].map((p) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export default [...livePools, ...finishedPools] as Pool.SerializedPoolConfig<SerializedWrappedToken>[]
