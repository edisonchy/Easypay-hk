import Image from 'next/image'
import Link from 'next-intl/link'
import {useTranslations} from 'next-intl';
import nitrobig from '../public/nitro.png'
import spotifybig from '../public/spotifybig.png'
import Button from './order_button'
import ScrollButton from './scroll_butt'

export default function Box({theone}) {
  const t = useTranslations('Index');

  let guts;

  if (theone == 'discord') {
    guts = (
      <>
        <div className={"w-full mb-5"}>
          <h1 className={"text-4xl"}>{t('nitro')}</h1>
          <h2 className={"text-litbloo text-2xl"}>{t('year')}</h2>
        </div>
        <div className={"flex flex-row flex-wrap justify-center gap-5"}>
          <div id="this" className={"block max-h-[300px] max-w-[490px] min-w-[200px] overflow-y-scroll flex-1 basis-40 relative"}>
            <ScrollButton />
            <ul className={"list-disc list-inside"}>
              <li>
                {t('discord2')}
              </li>
              <li>
                {t('discord3')}
              </li>
            </ul>
            <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur"/>
            <p>
              <span className={"text-gree"}>
                {t('discord4')}
              </span>
              <br/>
                {t('discord5')}
              <br/>
                {t('discord6')}
            </p>
            <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur"/>
            <p>
              <span className={"text-gree"}>
                {t('discord7')}
              </span>
            </p>
            <ol className={"list-decimal list-inside"}>
              <li>
                {t('discord8')}
              </li>
              <li>
                {t('discord9')}
              </li>
            </ol>
            <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur"/>
            <p>
              <span className={"text-gree"}>
                {t('discord10')}
              </span>
            </p>
            <ul className={"list-disc list-inside"}>
              <li>
                {t('discord11')}
              </li>
              <li>
                {t('discord12')}
              </li>
            </ul>
          </div>
          <div className={"w-full flex-1 flex flex-col justify-start items-center min-w-[200px]"}>
            <Image src={nitrobig} alt="nitro" width="250" priority="true"/>
            <Button words={t('order')}/>
          </div>
        </div>
      </>
    )
  }

  if (theone == 'spotify') {
    guts = (
      <>
        <div className={"w-full mb-5"}>
          <h1 className={"text-4xl"}>{t('spotify')}</h1>
          <h2 className={"text-litbloo text-2xl"}>{t('year')}</h2>
        </div>
        <div className={"flex flex-row flex-wrap justify-center gap-5"}>
        <div id="this" className={"block max-h-[300px] max-w-[490px] min-w-[200px] overflow-y-scroll flex-1 basis-40 relative"}>
            <ScrollButton />
            <p>
              {t('spotify2')}
            </p>
            <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur"/>
            {t('spotify7')}
            <br/>
            {t('spotify8')}
            <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur"/>
            <span className={"text-gree"}>
              {t('spotify3')}
            </span>
            <ol className={"list-decimal list-inside"}>
              <li>
                {t('spotify4')}
              </li>
              <li>
                {t('spotify5')}
              </li>
            </ol>
            <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur"/>
            <p>
              {t('spotify6')}
            </p>
          </div>
          <div className={"w-full flex-1 flex flex-col justify-start items-center min-w-[200px]"}>
            <Image src={spotifybig} alt="spotify" width="250" priority="true"/>
            <Button words={t('order')}/>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="relative top-[130px] w-auto flex flex-col items-center">
        <div className={"bg-gradient-to-b from-bloo to-purp from-0% to-70% backdrop-blur-sm shadow-lg rounded-[10px] max-w-[800px] flex flex-col p-[40px] mx-[20px]"}>
          {guts}
        </div>
        <Link href="/" className={"mt-3 underline"}>
        {t('back')}
      </Link>
      <div className={"relative top-[5px] w-full invisible"}>easypayhk</div>
      </div>
    </>  
  )
}