import type { ReactNode } from "react";
import "../../styles/faq-accordion.css";

interface FaqAccordionProps {
  children: ReactNode;
}

/** Collapsible FAQ list. Styling mirrors the blog article accordion. */
export function FaqAccordion({ children }: FaqAccordionProps) {
  return <div className="faq-ac">{children}</div>;
}

interface FaqItemProps {
  question: ReactNode;
  children: ReactNode;
}

export function FaqItem({ question, children }: FaqItemProps) {
  return (
    <details className="faq-ac-item">
      <summary>
        <span className="faq-ac-q">{question}</span>
        <span className="faq-ac-mark" aria-hidden="true" />
      </summary>
      <div className="faq-ac-body">{children}</div>
    </details>
  );
}

export default FaqAccordion;
