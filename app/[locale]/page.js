import { useTranslations } from "next-intl";
import Pick from "../../components/pick";
import SwitchLanguage from "../../components/switch_language";
import Social from "../../components/social";
import Nav from "../../components/nav";
import Title from "@/components/title";
import SwitchLanguageIcon from "@/components/switch_language_icon";

export default function Home({ params }) {
  const t = useTranslations("Index");

  return (
    <div>
      <Title />
      <Nav shop={t("shop")} purchase={t("purchase")} tos={t("tos")} />
      <Pick />
      <Social />
      {/* <SwitchLanguage
        params={params.locale}
        className={"z-10 fixed top-5 right-5 sm:relative sm:top-[170px] sm:w-full sm:flex sm:justify-center"}
        language={t("language")}
      />  */}
      <SwitchLanguageIcon
        params={params.locale}
        className={"z-10 fixed top-5 right-5 sm:relative sm:top-[170px] sm:flex sm:justify-center sm:right-0"}
        language={t("language")}
      /> 
      <footer className={"relative top-[170px] w-full invisible"}>easypayhk</footer>
    </div>
  );
}
