import {useTranslations} from 'next-intl';
import Nav from '../../../components/nav';
import PurchaseComp from '@/components/purchase_comp';
import Title from '@/components/title';

export default function Purchase() {
  const t = useTranslations('Index');

  return (
    <div>
        <Title />
        <Nav shop={t('shop')} purchase={t('purchase')} tos={t('tos')}/>
        <PurchaseComp />
        <div className={"relative top-[130px] w-full invisible"}>easypayhk</div>
    </div>
  )
}

