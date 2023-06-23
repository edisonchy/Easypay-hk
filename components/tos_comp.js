import { useTranslations } from "next-intl";

export default function TosComp() {
  const t = useTranslations("Index");

  return (
    <div className="relative top-[140px] w-auto flex flex-col items-center">
      <div className="m-[20px] max-w-[470px] bg-gradient-to-b from-bloo to-purp from-0% to-70% backdrop-blur-sm shadow-lg rounded-[10px] p-5">
        <h2 className={"text-litbloo text-2xl relative text-center mb-2"}>
          {t("tos6")}
        </h2>
        <p>{t("tos2")}</p>
        <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur" />
        <p>{t("tos3")}</p>
        <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur" />
        <p>{t("tos4")}</p>
        <hr className="h-[3px] w-full border-0 my-4 rounded bg-gradient-to-r from-gree via-pin to-pur" />
        <p>{t("tos5")}</p>
      </div>
    </div>
  );
}
