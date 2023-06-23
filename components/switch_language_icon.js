"use client";

import Link from "next-intl/link";
import Image from "next/image";
import translate from "../public/translate.png";

import { usePathname } from "next-intl/client";

export default function SwitchLanguageIcon({ params, className, language }) {
  const pathname = usePathname();

  const locale = params == "zh" ? "en" : "zh";

  return (
    <div className={className}>
      <div className={"h-[50px] w-[50px] rounded-[50%] bg-litbloo -z-10 animate-pinger absolute md:h-[40px] md:w-[40px]"}>
      </div>
        <Link
          href={pathname}
          locale={locale}
          className={
            "h-[50px] w-[50px] rounded-[50%] bg-gradient-to-b from-bloo to-purp from-0% to-70% backdrop-blur-sm shadow-lg flex justify-center items-center z-10 active:from-purry active:from-0% active:to-100% active:to-pur md:h-[40px] md:w-[40px] md:hover:animate-spinny" 
          }
        >
          <Image
            src={translate}
            alt="translate"
            height="20"
            className={"h-[50%] w-auto"}
          />
        </Link>
    </div>
  );
}
