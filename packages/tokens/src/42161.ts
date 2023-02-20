import { ChainId, WETHARBITRUM, ERC20Token } from '@pancakeswap/sdk'
import { ALIEN, ALIEN_MAINET, USDC_ARBITRUM, USDT_ARBITRUM, WBTC_ARBITRUM, DAI_ARBITRUM } from './common'

export const arbitrumTokens = {
  weth: WETHARBITRUM[ChainId.ARBITRUM],
  usdt: USDT_ARBITRUM,
  usdc: USDC_ARBITRUM,
  wbtc: WBTC_ARBITRUM,
  dai: DAI_ARBITRUM,
  ether: new ERC20Token(
    ChainId.ARBITRUM,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'Ether',
    'ETH',
    'https://ethereum.org/en/',
  ),
  alien: ALIEN_MAINET,
}
