import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'
import { USDC, USDT, WBTC_ETH } from '@pancakeswap/tokens'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
  usdt: USDT[ChainId.ETHEREUM],
  usdc: USDC[ChainId.ETHEREUM],
  wbtc: WBTC_ETH,
  ether: new ERC20Token( 
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'Ether',
    'ETH',
    'https://ethereum.org/en/',
  ),

  alien: new ERC20Token(
    ChainId.ETHEREUM,
    '0x43F9C3aF0deDE1112e3B2660298Ab85c9d022788',
    18,
    'AlienFi',
    'ALIEN',
    'https://ethereum.org/en/',
    
  ),
}
