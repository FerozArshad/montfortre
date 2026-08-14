import { useEffect } from "react";

/**
 * Hides the sticky header when scrolling down and fades it back in on scroll up.
 * Toggles classes on <html>: mfr-header-hidden, mfr-header-scrolled.
 * Call once from MobileHeader (always mounted).
 */
export default function useStickyHeader() {
  useEffect(() => {
    const root = document.documentElement;
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const goingDown = y > lastY + 6 && y > 80;
      const goingUp = y < lastY - 6;
      if (goingDown) {
        root.classList.add("mfr-header-hidden");
      } else if (goingUp || y <= 80) {
        root.classList.remove("mfr-header-hidden");
      }
      root.classList.toggle("mfr-header-scrolled", y > 8);
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("mfr-header-hidden", "mfr-header-scrolled");
    };
  }, []);
}
