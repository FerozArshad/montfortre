import { useEffect } from "react";

/** Powers the design's style-hover attributes (hover styles on inline-styled elements). */
export default function useStyleHover() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>("[style-hover]").forEach((el) => {
      const base = el.getAttribute("style") || "";
      const hov = el.getAttribute("style-hover") || "";
      const enter = () => el.setAttribute("style", base + ";" + hov);
      const leave = () => el.setAttribute("style", base);
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);
}
