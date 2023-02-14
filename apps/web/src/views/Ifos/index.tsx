import { SubMenuItems } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { PageMeta } from 'components/Layout/Page'
import { useRouter } from 'next/router'
import { useFetchIfo } from 'state/pools/hooks'
import Hero from './components/Hero'
import IfoProvider from './contexts/IfoContext'

export const IfoPageLayout = ({ children }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const isExact = router.route === '/ifo'
  useFetchIfo()

  return (
    <IfoProvider>
      <PageMeta />
      <SubMenuItems
        items={[
          {
            label: t('Latest'),
            href: '/iao',
          },
          // {
          //   label: t('Finished'),
          //   href: '/ilo/history',
          // },
        ]}
        activeItem={isExact ? '/ilo' : '/ilo/history'}
      />
      <Hero />
      {children}
    </IfoProvider>
  )
}
