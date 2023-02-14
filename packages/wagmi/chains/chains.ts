import { rinkeby, goerli } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}


export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }
const ethExplorer = { name: 'EtherScan', url: 'https://etherscan.io/' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://bsc-dataseed1.binance.org',
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 15921452,
  },
}

export const mainnet: Chain = {
  id: 1,
  name: 'Ethereum',
  network: 'mainnet',
  rpcUrls: {
    public: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    default: 'https://rpc.ankr.com/eth',
  },
  blockExplorers: {
    default: ethExplorer,
    etherscan: ethExplorer,
  },
  nativeCurrency: {
    name: 'Ethereum Mainnet',
    symbol: 'ETH',
    decimals: 18,
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 14353601,
  },
}


export const arbitrum: Chain = {
  id: 42161,
  name: 'Arbitrum One',
  network: 'arbitrum',
  rpcUrls: {
    public: 'https://rpc.ankr.com/arbitrum',
    default: 'https://arbitrum-mainnet.infura.io',
  },
  nativeCurrency: { name: 'Arbitrum One', symbol: 'ETH', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'Arbiscan',
      url: 'https://arbiscan.io/',
    },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 7654707,
  },
}


export const matic: Chain = {
  id: 137,
  name: 'Matic Mainnet',
  network: 'matic',
  nativeCurrency: {
    decimals: 18,
    name: 'MATIC',
    symbol: 'MATIC',
  },
  rpcUrls: {
    public: 'https://polygon-rpc.com',
    default: 'https://polygon-rpc.com',
  },
  blockExplorers: {
    default: { name: 'Polygonscan', url: 'https://polygonscan.com/' },
  },
  multicall: {
    address: '0x2FFd4c4ff5Ea683d68515e2FebCa0FB503E9F7b7',
    blockCreated: 35709658,
  },
}



export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s3.binance.org:8545',
    default: 'https://data-seed-prebsc-1-s3.binance.org:8545',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 17422483,
  },
  testnet: true,
}



export { rinkeby, goerli }
