"use client";

import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

export default function SwitchLanguage({ params, className, language }) {
  const pathname = usePathname();

  const locale = params == "zh" ? "en" : "zh";

  return (
    <Link href={pathname} locale={locale} className={className}>
      <p className={"hover:text-gree underline"}>{language}</p>
    </Link>
  );
}
