import { createRoot, type Root } from "react-dom/client";
import { useEffect, type RefObject } from "react";
import LeadCaptureForm from "./LeadCaptureForm";

type Props = {
  containerRef: RefObject<HTMLElement | null>;
  /** Re-run when article HTML changes */
  bodyHtml: string;
};

/**
 * Turns toolbar-inserted `[data-montfort="contact-form"]` placeholders into live lead forms.
 */
export default function LeadFormHydrator({ containerRef, bodyHtml }: Props) {
  useEffect(() => {
    const rootEl = containerRef.current;
    if (!rootEl) return;

    const hosts = Array.from(rootEl.querySelectorAll<HTMLElement>('[data-montfort="contact-form"]'));
    const mounts: { host: HTMLElement; root: Root }[] = [];

    for (const host of hosts) {
      if (host.dataset.hydrated === "1") continue;
      host.dataset.hydrated = "1";
      host.innerHTML = "";
      host.classList.add("cms-lead-form--live");
      const root = createRoot(host);
      root.render(
        <div className="cms-lead-form-inner">
          <p className="cms-lead-form-title">Get in touch</p>
          <LeadCaptureForm formType="blog-embed" submitLabel="Send message" compact />
        </div>,
      );
      mounts.push({ host, root });
    }

    return () => {
      for (const { host, root } of mounts) {
        root.unmount();
        delete host.dataset.hydrated;
      }
    };
  }, [containerRef, bodyHtml]);

  return null;
}
