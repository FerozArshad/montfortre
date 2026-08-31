import type { ReactNode } from "react";

type IconProps = { className?: string; size?: number };

function Ico({ className, size = 18, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconBold(props: IconProps) {
  return (
    <Ico {...props}>
      <path
        fill="currentColor"
        d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5zm0 2v5h5.5a3 3 0 0 0 0-6H8zM6 4h6.5a4.5 4.5 0 0 1 3.5 7.5A5 5 0 0 1 18 20H6V4z"
      />
    </Ico>
  );
}

export function IconItalic(props: IconProps) {
  return (
    <Ico {...props}>
      <path fill="currentColor" d="M10 4h9v2h-3.5l-4 12H6v-2h3.5l4-12H10z" />
    </Ico>
  );
}

export function IconUnderline(props: IconProps) {
  return (
    <Ico {...props}>
      <path fill="currentColor" d="M8 4v7a4 4 0 0 0 8 0V4h2v7a6 6 0 0 1-12 0V4h2zm-2 14h12v2H6v-2z" />
    </Ico>
  );
}

export function IconAlignLeft(props: IconProps) {
  return (
    <Ico {...props}>
      <path fill="currentColor" d="M4 5h16v2H4V5zm0 6h10v2H4v-2zm0 6h16v2H4v-2zm0-12h16v2H4V5z" />
    </Ico>
  );
}

export function IconAlignCenter(props: IconProps) {
  return (
    <Ico {...props}>
      <path fill="currentColor" d="M4 5h16v2H4V5zm3 6h10v2H7v-2zm-3 6h16v2H4v-2z" />
    </Ico>
  );
}

export function IconAlignRight(props: IconProps) {
  return (
    <Ico {...props}>
      <path fill="currentColor" d="M4 5h16v2H4V5zm6 6h10v2H10v-2zm-6 6h16v2H4v-2z" />
    </Ico>
  );
}

export function IconBulletList(props: IconProps) {
  return (
    <Ico {...props}>
      <circle cx="5" cy="7" r="1.5" fill="currentColor" />
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="5" cy="17" r="1.5" fill="currentColor" />
      <path fill="currentColor" d="M9 6h12v2H9V6zm0 5h12v2H9v-2zm0 5h12v2H9v-2z" />
    </Ico>
  );
}

export function IconNumberList(props: IconProps) {
  return (
    <Ico {...props}>
      <path fill="currentColor" d="M4 6h2v2H4V6zm0 5h2v2H4v-2zm0 5h2v2H4v-2zM8 6h13v2H8V6zm0 5h13v2H8v-2zm0 5h13v2H8v-2z" />
    </Ico>
  );
}

export function IconLink(props: IconProps) {
  return (
    <Ico {...props}>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M10 14a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 1 0-5-5l-1 1M14 10a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 1 0 5 5l1-1"
      />
    </Ico>
  );
}

export function IconUnlink(props: IconProps) {
  return (
    <Ico {...props}>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M8 8l8 8M10 14a3.5 3.5 0 0 0 5 0l1-1M14 10a3.5 3.5 0 0 0-5 0l-1 1M6 6l12 12"
      />
    </Ico>
  );
}

export function IconImage(props: IconProps) {
  return (
    <Ico {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9" cy="11" r="2" fill="currentColor" />
      <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M7 17l4-4 3 3 3-4 3 5" />
    </Ico>
  );
}

export function IconForm(props: IconProps) {
  return (
    <Ico {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M8 8h8M8 12h8M8 16h5" />
    </Ico>
  );
}

export function IconTable(props: IconProps) {
  return (
    <Ico {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path stroke="currentColor" strokeWidth="1.8" d="M3 10h18M3 14h18M10 5v14M15 5v14" />
    </Ico>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Ico {...props}>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M16 16l4 4" />
    </Ico>
  );
}

export function IconHome(props: IconProps) {
  return (
    <Ico {...props}>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"
      />
    </Ico>
  );
}

export function IconReadMore(props: IconProps) {
  return (
    <Ico {...props}>
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 12h16M12 6v12" />
    </Ico>
  );
}

export function IconClearFormat(props: IconProps) {
  return (
    <Ico {...props}>
      <path fill="currentColor" d="M6 4h8l4 4v12H6V4zm2 2v12h8V9h-4V6H8zm2 2h2v2h-2V8z" />
      <path stroke="currentColor" strokeWidth="1.5" d="M4 20l16-16" />
    </Ico>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Ico {...props}>
      <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
    </Ico>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <Ico {...props}>
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12h14" />
    </Ico>
  );
}

export function IconTag(props: IconProps) {
  return (
    <Ico {...props}>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4 12V4h8l8 8-8 8-8-8zM8.5 8.5h.01"
      />
    </Ico>
  );
}

export function IconButton(props: IconProps) {
  return (
    <Ico {...props}>
      <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M8 12h8" />
    </Ico>
  );
}
