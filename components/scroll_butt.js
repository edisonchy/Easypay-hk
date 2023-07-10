"use client";

import React, { useState, useEffect } from "react";
import ScrollButtClick from "./scroll_button_click";

export default function ScrollButton() {
  const [showTopBtn, setShowTopBtn] = useState(true);

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
