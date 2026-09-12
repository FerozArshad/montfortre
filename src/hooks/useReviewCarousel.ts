import { useEffect } from "react";

function initReviewCarousel() {
  const cleanups: Array<() => void> = [];
  const onClick = (el: Element | null, fn: () => void) => {
    if (!el) return;
    if (el.hasAttribute("onclick")) return;
    const h = (e: Event) => {
      e.preventDefault();
      fn();
    };
    el.addEventListener("click", h);
    cleanups.push(() => el.removeEventListener("click", h));
  };

  const track = document.getElementById("review-track");
  if (!track || track.children.length === 0) {
    return () => cleanups.forEach((fn) => fn());
  }

  const count = track.children.length;
  const dots = Array.from(document.querySelectorAll<HTMLElement>(".rev-dot"));
  const current = () => {
    const w = track.clientWidth;
    if (!w) return 0;
    return Math.round(track.scrollLeft / w);
  };
  const go = (i: number) => {
    const w = track.clientWidth;
    if (!w) return;
    const n = ((i % count) + count) % count;
    track.scrollTo({ left: n * w, behavior: "smooth" });
  };

  let timer = 0;
  let paused = false;
  const AUTO_MS = 4200;
  const startAuto = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => {
      if (!document.hidden && !paused) go(current() + 1);
    }, AUTO_MS);
  };
  const onTouch = () => startAuto();
  const pause = () => {
    paused = true;
  };
  const resume = () => {
    paused = false;
    startAuto();
  };
  track.addEventListener("pointerdown", onTouch, { passive: true });
  track.addEventListener("pointerenter", pause);
  track.addEventListener("pointerleave", resume);
  cleanups.push(() => {
    track.removeEventListener("pointerdown", onTouch);
    track.removeEventListener("pointerenter", pause);
    track.removeEventListener("pointerleave", resume);
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
    }),
  );

  let raf = 0;
  const paint = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const n = current();
      Array.from(track.children).forEach((child, i) => {
        child.classList.toggle("is-active", i === n);
      });
      dots.forEach((dot, i) => {
        const active = i === n;
        dot.classList.toggle("is-active", active);
        if (active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    });
  };
  track.addEventListener("scroll", paint, { passive: true });
  paint();
  // Layout can settle after mount (fonts/images); re-paint so the first dot activates.
  const onResize = () => paint();
  window.addEventListener("resize", onResize);
  const settle = window.setTimeout(paint, 120);
  cleanups.push(() => {
    track.removeEventListener("scroll", paint);
    window.removeEventListener("resize", onResize);
    window.clearTimeout(settle);
    cancelAnimationFrame(raf);
  });

  return () => cleanups.forEach((fn) => fn());
}

/** Wire review carousel after slides mount or update (Places / curated reviews). */
export default function useReviewCarousel(slideCount: number) {
  useEffect(() => {
    if (slideCount === 0) return;
    const cleanup = initReviewCarousel();
    return cleanup;
  }, [slideCount]);
}
