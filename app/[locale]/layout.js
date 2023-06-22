import "./globals.css";
import { Poppins } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next-intl/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "easypayHK",
  description: "A shop by easypayHK",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
