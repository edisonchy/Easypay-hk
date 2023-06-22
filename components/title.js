import Link from "next-intl/link";

export default function Title() {
  return (
    <div
      className={
        "w-full relative top-[100px] text-4xl font-bold  drop-shadow-lg opacity-80 flex justify-center"
      }
    >
      <Link href="/">
        Easypay
        <span
          className={
            "bg-clip-text text-transparent bg-gradient-to-r from-gree via-pin to-pur"
          }
        >
          HK
        </span>
      </Link>
    </div>
  );
}
