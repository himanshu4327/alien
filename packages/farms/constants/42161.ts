import { arbitrumTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */

  {
    pid: 0,
    lpSymbol: 'ALIEN',
    lpAddress: '0xDcC3D2cAd2C8C27A8ba4c4892ce8136116082e1A',
    token: arbitrumTokens.alien,
    isToken: true,
    quoteToken: arbitrumTokens.usdc,
  },
  {
    pid: 1,
    lpSymbol: 'USDC-ALIEN LP',
    lpAddress: '0xDcC3D2cAd2C8C27A8ba4c4892ce8136116082e1A',
    token: arbitrumTokens.alien,
    quoteToken: arbitrumTokens.usdc,
  },
  {
    pid: 2,
    lpSymbol: 'ETH-ALIEN LP',
    lpAddress: '0x32116401bdb5Ab9C30be88Dd546156f60458C9c7',
    token: arbitrumTokens.alien,
    quoteToken: arbitrumTokens.weth,
  },
  {
    pid: 3,
    lpSymbol: 'USDC-ETH LP',
    lpAddress: '0xB2C362Bf6C0e5ECba587732f5155981E60d9Da85',
    token: arbitrumTokens.usdc,
    quoteToken: arbitrumTokens.weth,
  },
  {
    pid: 4,
    lpSymbol: 'USDC-USDT LP',
    lpAddress: '0xB8aA98969728eAd6076FE9a72cAB65CeA5DEe023',
    token: arbitrumTokens.usdt,
    quoteToken: arbitrumTokens.usdc,
  },
  {
    pid: 5,
    lpSymbol: 'DAI-USDC LP',
    lpAddress: '0x57Bd1B981cdbefb2548F92CB4f79c611b2E34b9b',
    token: arbitrumTokens.dai,
    quoteToken: arbitrumTokens.usdc,
  },
  {
    pid: 6,
    lpSymbol: 'BTC-ETH LP',
    lpAddress: '0xB86aF5822Ec4d589f13a8f345BAe5cbAF76bEf5C',
    token: arbitrumTokens.wbtc,
    quoteToken: arbitrumTokens.weth,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
