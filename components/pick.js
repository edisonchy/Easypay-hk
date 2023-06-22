import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next-intl/link'
import nitro from '../public/nitro.png'
import spotify from '../public/spotify.png'

export default function Pick() {
  const t = useTranslations('Index');

  return (
    <div className={'relative top-[140px] justify-center flex flex-row flex-wrap'}>
      <div className={"bg-gradient-to-b from-bloo to-purp from-0% to-70% backdrop-blur-sm shadow-lg shadow-black rounded-[10px] w-[270px] h-[270px] m-[20px] transition-transform hover:scale-110 ease-in-out duration-700"}>
        <Link className={"w-full h-full flex flex-col justify-center items-center"} href="/shop/discord" prefetch={false}>
          <h2 className={"relative drop-shadow-lg w-full bottom-5 pl-5"}>{t('nitro')}</h2>    
          <Image src={nitro} alt="nitro" width="181" height="140"/>
          <p className={"relative drop-shadow-lg flex w-full justify-end top-5 pr-5 overflow-hidden"}>{t('learn more')}</p>
        </Link>
    </div>
    <div className={"bg-gradient-to-b from-bloo to-purp from-0% to-70% backdrop-blur-sm shadow-lg shadow-black rounded-[10px] w-[270px] h-[270px] m-[20px] transition-transform hover:scale-110 ease-in-out duration-700"}>
        <Link className={"w-full h-full flex flex-col justify-center items-center"} href="/shop/spotify" prefetch={false}>
          <h2 className={"relative drop-shadow-2xl w-full bottom-5 pl-5"}>{t('spotify')}</h2>    
          <Image src={spotify} alt="spotify" width="140" height="140"/>
          <p className={"relative flex w-full justify-end top-5 pr-5"}>{t('learn more')}</p>
        </Link>
      </div>
    </div>
  )
}