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
  const current = () =>
    track.clientWidth ? Math.round(track.scrollLeft / track.clientWidth) : 0;
  const go = (i: number) => {
    const n = ((i % count) + count) % count;
    track.scrollTo({ left: n * track.clientWidth, behavior: "smooth" });
  };

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
        const active = i === n;
        dot.style.background = active ? "#C29B5C" : "#D9CFA6";
        dot.style.width = active ? "28px" : "9px";
        if (active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    });
  };
  track.addEventListener("scroll", paint, { passive: true });
  paint();
  cleanups.push(() => {
    track.removeEventListener("scroll", paint);
    cancelAnimationFrame(raf);
  });

  return () => cleanups.forEach((fn) => fn());
}

/** Wire review carousel after slides mount or update (dynamic ReputationHub fetch). */
export default function useReviewCarousel(slideCount: number) {
  useEffect(() => {
    if (slideCount === 0) return;
    const cleanup = initReviewCarousel();
    return cleanup;
  }, [slideCount]);
}
