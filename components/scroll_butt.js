"use client";

import React, { useState, useEffect } from "react";
import ScrollButtClick from "./scroll_button_click";

export default function ScrollButton() {
  const [showTopBtn, setShowTopBtn] = useState(true);

  const butt = (
    <div className={"absolute flex w-full justify-end z-20 top-[230px]"}>
      <button className={"bg-black rounded w-[45px] h-[45px]"}>hi</button>
    </div>
  );

  useEffect(() => {
    const scrollContent = document.querySelector("#this");

    scrollContent.addEventListener(
      "scroll",
      () => {
        const scrolled = scrollContent.scrollTop;

        if (scrolled > 1) {
          setShowTopBtn(false);
        } else {
          setShowTopBtn(true);
        }
      },
      { passive: true }
    );
  }, []);

  return (
    <div className={"absolute flex justify-end top-[85%] right-[2%]"}>
      {showTopBtn && <ScrollButtClick />}
    </div>
  );
}
