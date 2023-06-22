import { useTranslations } from "next-intl";
import Image from "next/image";
import fps from "../public/fps.png";
import alipay from "../public/alipay.png";
import payme from "../public/payme.png";
import wa from "../public/wa.png";
import tg from "../public/tg.png";
import ScrollButton from "./scroll_butt";

export default function PurchaseComp() {
  const t = useTranslations("Index");

  return (
    <div className="relative top-[140px] w-auto flex flex-col items-center">
      <div className="m-[20px] bg-gradient-to-b from-bloo to-purp backdrop-blur-sm from-0% to-70% shadow-lg rounded-[10px] p-5">
        <div
          id="this"
          className={"relative overflow-y-scroll max-h-[412px] max-w-[412px]"}
        >
          <ScrollButton />
          <h1 className={"text-litbloo text-2xl relative text-center mb-2"}>
            {t("payment1")}
          </h1>
          <h2 className={"text-lg text-gree"}>{t("payment2")}</h2>
          <p>{t("payment3")}</p>
          <ol>
            <li>{t("payment4")}</li>
            <li>{t("payment5")}</li>
            <li>{t("payment6")}</li>
          </ol>
          <br />
          <p>{t("payment7")}</p>
          <br />
          <h3 className={"text-md text-litbloo"}>{t("payment15")}</h3>
          <div className={"flex flex-row justify-between w-[170px] my-2"}>
            <div>
              <Image src={fps} alt="FPS" height="35" />
            </div>
            <div>
              <Image src={alipay} alt="Payme" height="35" />
            </div>
            <div>
              <Image src={payme} alt="Alipay" height="35" />
            </div>
          </div>
          <h3 className={"text-md text-litbloo"}>{t("payment8")}</h3>
          <div className={"flex flex-row justify-between w-[100px] mt-2 ml-1"}>
            <a href="https://wa.me/message/WZZPEKZTMVQOJ1" target="_blank">
              <Image
                className={
                  "transition duration-500 ease-in-out hover:scale-120"
                }
                src={wa}
                alt="Whatsapp"
                height="35"
              />
            </a>
            <a href="https://t.me/easypayhk" target="_blank">
              <Image
                className={
                  "transition duration-500 ease-in-out hover:scale-120"
                }
                src={tg}
                alt="Telegram"
                height="35"
              />
            </a>
          </div>
          <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur" />
          <h2 className={"text-lg text-gree"}>{t("payment9")}</h2>
          <p>{t("payment10")}</p>
          <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur" />
          <h2 className={"text-lg text-gree"}>{t("payment11")}</h2>
          <p>{t("payment12")}</p>
          <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur" />
          <h2 className={"text-lg text-gree"}>{t("payment13")}</h2>
          <p>{t("payment14")}</p>
        </div>
      </div>
    </div>
  );
}
