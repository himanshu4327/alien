# Alien Frontend

<p align="center">
  <a href="https://pancakeswap.finance">
      <img src="https://pancakeswap.finance/logo.png" height="128">
  </a>
</p>

This project contains the main features of the Alien application.

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.

## Documentation

- [Info](doc/Info.md)
- [Cypress tests](doc/Cypress.md)

> Install dependencies using **yarn**

## `apps/web`

<details>
<summary>
How to start
</summary>

```sh
yarn
```

start the development server

```sh
yarn dev
```

build with production mode

```sh
yarn build

# start the application after build
yarn start
```

</details>

## `apps/aptos`

<details>
<summary>
How to start
</summary>

```sh
yarn dev:aptos
```

```sh
yarn turbo run build --filter=aptos-web
```

</details>

## Packages

| Package                                    | Description                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [sdk](/packages/swap-sdk)                  | An SDK for building applications on top of Pancakeswap                                                      |
| [aptos-swap-sdk](/packages/aptos-swap-sdk) | Aptos version of Swap SDK                                                                                   |
| [swap-sdk-core](/packages/swap-sdk-core)   | Swap SDK Shared code                                                                                        |
| [wagmi](/packages/wagmi)                   | Extension for [wagmi](https://github.com/wagmi-dev/wagmi), including bsc chain and binance wallet connector |
| [awgmi](/packages/awgmi)                   | connect to Aptos with similar wagmi React hooks.                                                            |




  

Arbitrum -> 


Factory    ------->   0x43F9C3aF0deDE1112e3B2660298Ab85c9d022788
Init       ------->   0x643fffe02529b0b145c9529d590ae772d3f4327ebac10f8d6a613a1ea11ccf23

Router     ------->   0xB8ca857dCd90AfBeD93B30DdCd4E4CC1327c9e5c
MM0        ------->   0x6740Acb82ac5C63A7ad2397ee1faed7c788F5f8c
MasterChef ------->   0x8923d3EFEE38e7bb1E8988B024D5169C962CFB73


Weth 	 --------->   0x82aF49447D8a07e3bd95BD0d56f35241523fBab1	       DECIMAL =18 
USDC   --------->   0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8         DECIMAL =6
USDT   --------->   0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9         DECIMAL =6 
WBTC   --------->   
DAI    --------->   