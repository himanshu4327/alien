import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'







export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No  registration,no hassle.'),
  bodyText: t('Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/alien/fireBurner.gif',
    attributes: [{ src: 'fireBurner', alt: t('Fire gif') }],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('PancakeSwap makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Tarde Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/alien/skull.gif',
    attributes: [
      { src: 'skull', alt: t('Pie chart') },
      // { src: 'stonks', alt: t('Stocks chart') },
      // { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Aliens   knew    The universe better'),

  images: {
    path: '/images/alien/skeleton.gif',
    attributes: [
      { src: 'skeleton', alt: t('Small 3d pancake') },
     
    ],
  },
  bodyText: t(''),
  



  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

 
})
// export const StartInSecondSectionData = (t: TranslateFunction): SalesSectionProps => ({
  
//   headingText: t('START IN SECONDS'),

//   images: {
//     path: '/images/alien/space.svg',
//     attributes: [
//       { src: 'space', alt: t('Small 3d pancake') },
     
//     ],
//   },
//   bodyText: t(
//     'CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it',
//   ),



//   reverse: false,
//   primaryButton: {
//     to: '',
//     text: t(''),
//     external: false,
//   },
//   secondaryButton: {
//     to: '',
//     text: t(''),
//     external:false,
//   },


// })