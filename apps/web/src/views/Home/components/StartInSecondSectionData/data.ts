import { TranslateFunction } from '@pancakeswap/localization'
import { StartInSecondSectionDataProps } from '.'

export const swapStartInSecondData = (t: TranslateFunction): StartInSecondSectionDataProps => ({
  headingText: t('START IN  SECONDS'),
  bodyText: t(
    'Alien token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it.',
  ),
  reverse: false,

  images: {
    path: '/images/alien/space.svg',
    attributes: [{ src: 'space', alt: t('Fire gif') }],
  },
})
