import { useEffect } from "react";

/**
 * On devices without hover (tablets/touch laptops at desktop widths), the
 * desktop nav dropdowns (.mnav-item:hover > .mnav-drop) never open. This
 * effect makes a first tap on a .mnav-top link open its dropdown (navigation
 * prevented), a second tap follow the link, and a tap outside close it.
 *
 * Uses event delegation on document because the page HTML (including the
 * desktop header) is re-rendered on every route change. The .mnav-open class
 * is styled in src/responsive.css. Page markup is never modified.
 */
export default function useTouchDropdowns() {
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return;

    const closeAll = () =>
      document
        .querySelectorAll(".mnav-item.mnav-open")
        .forEach((el) => el.classList.remove("mnav-open"));

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      const top = target.closest(".mnav-top");
      if (top) {
        const item = top.closest(".mnav-item");
        if (item && item.querySelector(".mnav-drop")) {
          if (!item.classList.contains("mnav-open")) {
            e.preventDefault();
            closeAll();
            item.classList.add("mnav-open");
          } else {
            closeAll(); // second tap: let the link navigate
          }
          return;
        }
      }

      if (!target.closest(".mnav-item")) closeAll();
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      closeAll();
    };
  }, []);
}
