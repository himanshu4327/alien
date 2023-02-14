import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No registration,no hassle.'),
  bodyText: t('Trade any token on Arbitrum in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/alien/fireBurner.gif',
    attributes: [{ src: 'fireBurner', alt: t('Fire gif') }],
  },
  firstWordlen: 2,
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('Alien makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Tarde Now'),
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/alien/skull.gif',
    attributes: [{ src: 'skull', alt: t('Pie chart') }],
  },
  firstWordlen: 3,
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Aliens knew The universe better'),

  images: {
    path: '/images/alien/skeleton.gif',
    attributes: [{ src: 'skeleton', alt: t('Small 3d Alien') }],
  },
  bodyText: t(
    'Alien token is at the heart of the Alienswap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it.',
  ),

  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: t('Learn'),
    external: true,
  },
  firstWordlen: 1,
})
