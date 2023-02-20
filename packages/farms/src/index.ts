import { formatEther } from '@ethersproject/units'
import { MultiCallV2 } from '@pancakeswap/multicall'
import { ChainId } from '@pancakeswap/sdk'
import { masterChefAddresses } from './const'
import { farmV2FetchFarms, FetchFarmsParams, fetchMasterChefV2Data } from './fetchFarms'

const supportedChainId = [ChainId.ARBITRUM, ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET, ChainId.ETHEREUM]
// const supportedChainId = [ChainId.ARBITRUM]
export const bCakeSupportedChainId = [ChainId.BSC, ChainId.BSC_TESTNET]

export function createFarmFetcher(multicallv2: MultiCallV2) {
  const fetchFarms = async (
    params: {
      isTestnet: boolean
    } & Pick<FetchFarmsParams, 'chainId' | 'farms'>,
  ) => {
    const { isTestnet, farms, chainId } = params
    const masterChefAddress = isTestnet ? masterChefAddresses[ChainId.BSC_TESTNET] : masterChefAddresses[ChainId.ARBITRUM]
    const { poolLength, totalRegularAllocPoint, totalSpecialAllocPoint, alienPerBlock } = await fetchMasterChefV2Data({
      isTestnet,
      multicallv2,
      masterChefAddress,
    })

    const regularCakePerBlock = formatEther(alienPerBlock)
    console.log("regularCakePerBlock", regularCakePerBlock)

    const farmsWithPrice = await farmV2FetchFarms({
      multicallv2,
      masterChefAddress,
      isTestnet,
      chainId,
      farms: farms.filter((f) => !f.pid || poolLength.gt(f.pid)),
      totalRegularAllocPoint,
      totalSpecialAllocPoint,
    })

    console.log("farmsWithPrice", farmsWithPrice)

    return {
      farmsWithPrice,
      poolLength: poolLength.toNumber(),
      regularCakePerBlock: +regularCakePerBlock,
    }
  }
  return {
    fetchFarms,
    isChainSupported: (chainId: number) => supportedChainId.includes(chainId),
    supportedChainId,
    isTestnet: (chainId: number) => ![ChainId.BSC, ChainId.ARBITRUM, ChainId.ETHEREUM].includes(chainId),
  }
}

export * from './apr'
export * from './farmsPriceHelpers'
export * from './types'
