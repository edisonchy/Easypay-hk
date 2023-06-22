"use client";

export default function ScrollButtClick({ words }) {
  const click = () => {
    const scrollContent = document.querySelector("#this");

    scrollContent.scrollTo({
      top: scrollContent.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={click}
      className={
        "z-10 relative animate-move bg-purry hover:bg-gree shadow-md shadow-black/50 rounded w-[35px] h-[35px] text-xs"
      }
    >
      ⬇
    </button>
  );
}
