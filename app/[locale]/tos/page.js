import {useTranslations} from 'next-intl';
import Nav from '../../../components/nav';
import TosComp from '../../../components/tos_comp'
import Title from '@/components/title';

export default function Tos() {
  const t = useTranslations('Index');

  return (
    <div>
        <Title />
        <Nav shop={t('shop')} purchase={t('purchase')} tos={t('tos')}/>
        <TosComp />
        <div className={"relative top-[150px] w-full invisible"}>easypayhk</div>
    </div>
  )
}

