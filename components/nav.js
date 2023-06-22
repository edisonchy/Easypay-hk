"use client";

import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

export default function Nav({ shop, purchase, tos }) {
  const pathname = usePathname();

  let guts;

  switch (pathname) {
    case "/":
      guts = (
        <>
          <li
            className={
              "drop-shadow-lg inline-block w-[100px] px-[4px] rounded-[10px] bg-gradient-to-t from-transparent from 40% to-white/10 shadow-md shadow-black/40"
            }
          >
            {shop}
          </li>
          <Link href="/purchase" prefetch={false}>
            <li
              className={
                "drop-shadow-lg inline-block w-[100px] px-[4px] shadow-black/40 rounded-[10px] hover:text-litbloo"
              }
            >
              {purchase}
            </li>
          </Link>
          <Link href="/tos" prefetch={false}>
            <li
              className={
                "drop-shadow-lg inline-block w-[100px] px-[4px] shadow-black/40 rounded-[10px] hover:text-litbloo"
              }
            >
              {tos}
            </li>
          </Link>
        </>
      );
      break;
    case "/purchase":
      guts = (
        <>
          <Link href="/" prefetch={false}>
            <li
              className={
                "drop-shadow-lg inline-block w-[100px] px-[4px] shadow-black/40 rounded-[10px] hover:text-litbloo"
              }
            >
              {shop}
            </li>
          </Link>
          <li
            className={
              "drop-shadow-lg inline-block w-[100px] px-[4px] rounded-[10px] bg-gradient-to-t from-transparent from 40% to-white/10 shadow-md shadow-black/40"
            }
          >
            {purchase}
          </li>
          <Link href="/tos" prefetch={false}>
            <li
              className={
                "drop-shadow-lg inline-block w-[100px] px-[4px] shadow-black/40 rounded-[10px] hover:text-litbloo"
              }
            >
              {tos}
            </li>
          </Link>
        </>
      );
      break;
    case "/tos":
      guts = (
        <>
          <Link href="/" prefetch={false}>
            <li
              className={
                "drop-shadow-lg inline-block w-[100px] px-[4px] shadow-black/40 rounded-[10px] hover:text-litbloo"
              }
            >
              {shop}
            </li>
          </Link>
          <Link href="/purchase" prefetch={false}>
            <li
              className={
                "drop-shadow-lg inline-block w-[100px] px-[4px] shadow-black/40 rounded-[10px] hover:text-litbloo"
              }
            >
              {purchase}
            </li>
          </Link>
          <li
            className={
              "drop-shadow-lg inline-block w-[100px] px-[4px] rounded-[10px] bg-gradient-to-t from-transparent from 40% to-white/10 shadow-md shadow-black/40"
            }
          >
            {tos}
          </li>
        </>
      );
      break;
  }

  return (
    <nav
      className={"relative w-full text-center top-[130px] flex justify-center"}
    >
      <ul
        className={
          "p-[8px] w-350 flex justify-evenly shadow-md shadow-black/40 rounded-[10px] bg-gradient-to-b from-bloo to-purp"
        }
      >
        {guts}
      </ul>
    </nav>
  );
}
