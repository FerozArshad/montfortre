import { useEffect } from "react";

/**
 * Wires up the Home page listings scroller.
 *
 * Safe to call on pages without carousels (no-ops when ids are missing).
 * Reviews load via the live ReputationHub widget iframe in ReviewsSection.
 */
export default function useCarousels() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const onClick = (el: Element | null, fn: () => void) => {
      if (!el) return;
      // Controls now carry self-contained inline onclick handlers (so they work
      // even when this hook isn't wired by the host app). Don't double-bind.
      if (el.hasAttribute("onclick")) return;
      const h = (e: Event) => {
        e.preventDefault();
        fn();
      };
      el.addEventListener("click", h);
      cleanups.push(() => el.removeEventListener("click", h));
    };

    /* Listings: horizontal card scroller, one card per click. */
    const listings = document.getElementById("listings-track");
    if (listings) {
      const step = () => {
        const card = listings.firstElementChild as HTMLElement | null;
        return card ? card.getBoundingClientRect().width + 24 : 320;
      };
      onClick(document.getElementById("listings-prev"), () =>
        listings.scrollBy({ left: -step(), behavior: "smooth" })
      );
      onClick(document.getElementById("listings-next"), () =>
        listings.scrollBy({ left: step(), behavior: "smooth" })
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
