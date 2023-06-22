import {useTranslations} from 'next-intl'
import Pick from '../../components/pick'
import SwitchLanguage from '../../components/switch_language'
import Social from '../../components/social'
import Nav from '../../components/nav'
import Title from '@/components/title'

export default function Home({params}) {
  const t = useTranslations('Index');

  return (
    <div>
        <Title />
        <Nav shop={t('shop')} purchase={t('purchase')} tos={t('tos')}/>
        <Pick />
        <Social />
        <SwitchLanguage params={params.locale} className={"relative top-[170px] w-full flex justify-center"} language={t('language')}/>
        <div className={"relative top-[170px] w-full invisible"}>easypayhk</div>
    </div>
  )
}
