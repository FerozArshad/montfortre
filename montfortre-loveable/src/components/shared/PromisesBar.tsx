import "../../styles/home-promises.css";

export const DEFAULT_PROMISES = [
  "Smooth transaction with limited risk",
  "No pressure to over pay and buy within a certain time period",
  "A team of people that will be with you even after the transaction is complete",
] as const;

type PromisesBarVariant = "home" | "nbhd" | "light" | "about";

type PromisesBarProps = {
  /** Page theme: home / nbhd (dark) or light / about (cream bars on guide pages). */
  variant?: PromisesBarVariant;
  items?: readonly string[];
  screenLabel?: string;
  className?: string;
};

const VARIANT_CLASS: Record<PromisesBarVariant, string> = {
  home: "",
  nbhd: "home-promises--nbhd",
  light: "home-promises--light",
  about: "home-promises--about",
};

function CheckIcon({ fill, stroke }: { fill: string; stroke: string }) {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill={fill} />
      <path
        d="M7.4 12.3l3.1 3.1 6.1-6.6"
        stroke={stroke}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PromisesBar({
  variant = "home",
  items = DEFAULT_PROMISES,
  screenLabel = "Promises",
  className,
}: PromisesBarProps) {
  return (
    <section
      className={["home-promises", VARIANT_CLASS[variant], className].filter(Boolean).join(" ")}
      data-screen-label={screenLabel}
    >
      <div className="home-promises-inner">
        {items.map((text) => (
          <div key={text} className="home-promises-item">
            <CheckIcon fill="var(--promises-check-fill)" stroke="var(--promises-check-stroke)" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
