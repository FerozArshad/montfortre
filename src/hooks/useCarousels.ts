import { useEffect } from "react";

/**
 * Wires up the Home page carousels (reviews slider + listings scroller).
 *
 * The page markup is static HTML injected via dangerouslySetInnerHTML, so the
 * carousel buttons (#review-prev/next, .rev-dot, #listings-prev/next) render
 * without any behavior. This hook attaches the click handlers after mount.
 * Safe to call on pages without carousels (it no-ops when ids are missing).
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

    /* Reviews: full-width snap slides with prev/next arrows and dots. */
    const track = document.getElementById("review-track");
    if (track) {
      const count = track.children.length;
      const dots = Array.from(document.querySelectorAll<HTMLElement>(".rev-dot"));
      const current = () =>
        track.clientWidth ? Math.round(track.scrollLeft / track.clientWidth) : 0;
      const go = (i: number) => {
        const n = ((i % count) + count) % count;
        track.scrollTo({ left: n * track.clientWidth, behavior: "smooth" });
      };
      /* Auto-advance in a loop; any manual interaction restarts the timer. */
      let timer = 0;
      const startAuto = () => {
        window.clearInterval(timer);
        timer = window.setInterval(() => {
          if (!document.hidden) go(current() + 1);
        }, 5000);
      };
      const onTouch = () => startAuto();
      track.addEventListener("pointerdown", onTouch, { passive: true });
      cleanups.push(() => {
        track.removeEventListener("pointerdown", onTouch);
        window.clearInterval(timer);
      });
      startAuto();

      onClick(document.getElementById("review-prev"), () => {
        go(current() - 1);
        startAuto();
      });
      onClick(document.getElementById("review-next"), () => {
        go(current() + 1);
        startAuto();
      });
      dots.forEach((dot, i) =>
        onClick(dot, () => {
          go(i);
          startAuto();
        })
      );

      let raf = 0;
      const paint = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const n = current();
          dots.forEach((dot, i) => {
            dot.style.background = i === n ? "#C98A2C" : "#D9CFA6";
            dot.style.width = i === n ? "28px" : "9px";
          });
        });
      };
      track.addEventListener("scroll", paint, { passive: true });
      cleanups.push(() => {
        track.removeEventListener("scroll", paint);
        cancelAnimationFrame(raf);
      });
    }

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
