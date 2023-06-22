"use client";

import { useRouter } from "next/navigation";

export default function Button({ words }) {
  const router = useRouter();

  return (
    <>
      <button
        className={
          "mt-[25px] w-3/5 h-[35px] rounded-lg shadow-md shadow-black/20 drop-shadow-lg relative bg-[linear-gradient(90deg,_#68d391,_#f687b3,_#9333ea,_#68d391)] bg-[size:300%] animate-left hover:scale-110 hover:duration-700 hover:ease-in-out"
        }
        type="button"
        onClick={() => window.open("/purchase", "_blank")}
      >
        {words}
      </button>
      <div
        className={
          "bottom-[35px] w-3/5 h-[35px] rounded-lg relative bg-[linear-gradient(90deg,_#03a9f4,_#f441a5,_#ffeb3b,_#03a9f4)] bg-[size:300%] -z-10  blur-[18px] animate-left"
        }
      ></div>
    </>
  );
}
