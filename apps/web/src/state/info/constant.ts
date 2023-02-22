import { BLOCKS_CLIENT, BLOCKS_CLIENT_ETH, INFO_CLIENT, INFO_CLIENT_ETH } from 'config/constants/endpoints'
import { infoClientETH, infoClient, infoStableSwapClient } from 'utils/graphql'

import { ChainId } from '@pancakeswap/sdk'
import { ETH_TOKEN_BLACKLIST, PCS_ETH_START, PCS_V2_START, TOKEN_BLACKLIST } from 'config/constants/info'
import { CHAIN_ID } from '@gelatonetwork/limit-orders-lib/dist/constants'

export type MultiChainName = 'BSC' | 'ETH' | 'ARBITRUM'

export const multiChainQueryMainToken = {
  BSC: 'BNB',
  ETH: 'ETH',
  ARBITRUM: 'ARBITRUM',
}

export const multiChainBlocksClient = {
  BSC: BLOCKS_CLIENT,
  ETH: BLOCKS_CLIENT_ETH,
  ARBITRUM: BLOCKS_CLIENT 
}

export const multiChainStartTime = {
  BSC: PCS_V2_START,
  ARBITRUM: PCS_V2_START,
  ETH: PCS_ETH_START,
}

export const multiChainId = {
  BSC: ChainId.BSC,
  ETH: ChainId.ETHEREUM,
  ARBITRUM: ChainId.ARBITRUM,
}

export const multiChainPaths = {
  [ChainId.BSC]: '',
  [ChainId.ETHEREUM]: '/eth',
  [ChainId.ARBITRUM]: '',
}

export const multiChainQueryClient = {
  BSC: infoClient,
  ARBITRUM: infoClient,
  ETH: infoClientETH,
}

export const multiChainQueryEndPoint = {
  BSC: INFO_CLIENT,
  ARBITRUM: INFO_CLIENT,
  ETH: INFO_CLIENT_ETH,
}

export const multiChainScan = {
  BSC: 'BscScan',
  ETH: 'EtherScan',
  ARBITRUM: 'Arbiscan',
}

export const multiChainTokenBlackList = {
  BSC: TOKEN_BLACKLIST,
  ETH: ETH_TOKEN_BLACKLIST,
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
