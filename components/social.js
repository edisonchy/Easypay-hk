import { useTranslations } from "next-intl";
import Image from "next/image";
import cs from "../public/cs.png";
import ig from "../public/ig.png";
import dc from "../public/dc.png";
import wa from "../public/wa.png";
import tg from "../public/tg.png";

export default function Pick() {
  const t = useTranslations("Index");

  return (
    <div
      className={"relative top-[150px] justify-center flex flex-row flex-wrap"}
    >
      <div className={"flex flex-row justify-between w-[270px]"}>
        <a href="https://wa.me/message/WZZPEKZTMVQOJ1" target="_blank">
          <Image
            className={
              "drop-shadow-lg transition duration-500 ease-in-out hover:scale-120"
            }
            src={wa}
            alt="wa"
            height="35"
          />
        </a>
        <a href="https://t.me/easypayhk" target="_blank">
          <Image
            className={
              "drop-shadow-lg transition duration-500 ease-in-out hover:scale-120"
            }
            src={tg}
            alt="th"
            height="35"
          />
        </a>
        <a href="https://discord.gg/aMZQ2nDgmC" target="_blank">
          <Image
            className={
              "drop-shadow-lg transition duration-500 ease-in-out hover:scale-120"
            }
            src={dc}
            alt="dc"
            height="35"
          />
        </a>
        <a href="https://instagram.com/easypayhk/" target="_blank">
          <Image
            className={
              "drop-shadow-lg transition duration-500 ease-in-out hover:scale-120"
            }
            src={ig}
            alt="ig"
            height="35"
          />
        </a>
        <a href="https://www.carousell.com.hk/u/easypay_hk/" target="_blank">
          <Image
            className={
              "drop-shadow-lg transition duration-500 ease-in-out hover:scale-120"
            }
            src={cs}
            alt="cs"
            height="35"
          />
        </a>
      </div>
    </div>
  );
}
