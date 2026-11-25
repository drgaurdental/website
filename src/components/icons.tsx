import type { SVGProps } from "react";
import { Baby, Sparkles, Toothbrush } from "lucide-react";
import type { IconName } from "@/lib/treatments";

type P = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const TOOTH =
  "M7.5 3C5 3 3.5 5 3.5 7.6c0 1.9.7 3.4 1.3 4.9.6 1.6.8 3.3 1.1 5.1.3 1.9.8 3.4 2 3.4 1.5 0 1.6-2.2 2-4 .3-1.4.9-2.5 2.1-2.5s1.8 1.1 2.1 2.5c.4 1.8.5 4 2 4 1.2 0 1.7-1.5 2-3.4.3-1.8.5-3.5 1.1-5.1.6-1.5 1.3-3 1.3-4.9C20.5 5 19 3 16.5 3c-1.7 0-2.6.9-4.5.9S9.2 3 7.5 3z";

export const ToothIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d={TOOTH} />
  </svg>
);

const RootIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d={TOOTH} />
    <path d="M9.5 8.5c.8 1.5 1.2 3.2 1.4 5M14.5 8.5c-.8 1.5-1.2 3.2-1.4 5" strokeDasharray="1.5 1.8" />
  </svg>
);

const ImplantIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 2.5h10c1.8 0 2.6 1.3 2.1 3.1L18 9H6L4.9 5.6C4.4 3.8 5.2 2.5 7 2.5z" />
    <path d="M10 9v2h4V9" />
    <path d="M9 11h6l-1.2 10h-3.6z" />
    <path d="M9.2 14h5.6M9.5 17h5M9.9 20h4.2" />
  </svg>
);

const BracesIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 8.5c0-2 1.2-3.5 3-3.5s3 1.5 3 3.5v4c0 3-1 6.5-3 6.5S3 15.5 3 12.5zM9 8.5C9 6.5 10.3 5 12 5s3 1.5 3 3.5v4c0 3-1 6.5-3 6.5s-3-3.5-3-6.5zM15 8.5c0-2 1.2-3.5 3-3.5s3 1.5 3 3.5v4c0 3-1 6.5-3 6.5s-3-3.5-3-6.5z" />
    <path d="M2 11h20" />
    <rect x="4.6" y="9.8" width="2.8" height="2.4" rx=".5" />
    <rect x="10.6" y="9.8" width="2.8" height="2.4" rx=".5" />
    <rect x="16.6" y="9.8" width="2.8" height="2.4" rx=".5" />
  </svg>
);

const AlignerIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 9c0-3 4-5 9-5s9 2 9 5v2c0 1.5-1 2.5-2.5 2.5h-13C4 13.5 3 12.5 3 11z" />
    <path d="M7 13.5V9M12 13.5V8.5M17 13.5V9" opacity=".6" />
    <path d="M5 17.5c2 1.6 4.4 2.5 7 2.5s5-.9 7-2.5" strokeDasharray="2 2" />
  </svg>
);

const CrownIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 9.5 4 4.5l4 2.5 4-3.5 4 3.5 4-2.5-1 5" />
    <path d={TOOTH} transform="translate(3.6 7) scale(.7)" />
  </svg>
);

const DentureIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2.5 9.5C2.5 6 6.5 3.5 12 3.5s9.5 2.5 9.5 6c0 4.5-4 10.5-9.5 10.5S2.5 14 2.5 9.5z" />
    <path d="M6 9.5c0-1 .7-1.8 1.5-1.8S9 8.5 9 9.5v1.3H6zM9 9.3c0-1.2.8-2 1.5-2s1.5.8 1.5 2v1.5H9zM12 9.3c0-1.2.8-2 1.5-2s1.5.8 1.5 2v1.5h-3zM15 9.5c0-1 .7-1.8 1.5-1.8S18 8.5 18 9.5v1.3h-3z" />
  </svg>
);

const ExtractIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d={TOOTH} transform="translate(2.2 5.5) scale(.68)" />
    <path d="M17 2.5v6M14.5 5 17 2.5 19.5 5" />
  </svg>
);

const FillingIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d={TOOTH} />
    <path d="M9 7.2c1 .9 2 1.3 3 1.3s2-.4 3-1.3" fill="currentColor" fillOpacity=".25" />
  </svg>
);

const WhitenIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d={TOOTH} transform="translate(1 3.5) scale(.82)" />
    <path d="M19.5 1.8v3.4M17.8 3.5h3.4" />
  </svg>
);

const map: Record<IconName, (p: P) => React.JSX.Element> = {
  root: RootIcon,
  implant: ImplantIcon,
  braces: BracesIcon,
  aligner: AlignerIcon,
  sparkle: (p) => <Sparkles {...(p as object)} />,
  clean: (p) => <Toothbrush {...(p as object)} />,
  extract: ExtractIcon,
  denture: DentureIcon,
  whiten: WhitenIcon,
  crown: CrownIcon,
  filling: FillingIcon,
  kids: (p) => <Baby {...(p as object)} />,
};

export function TreatmentIcon({ name, ...p }: { name: IconName } & P) {
  const Icon = map[name];
  return <Icon {...p} />;
}

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.7c1.7.9 3.7 1.4 5.7 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4z" />
  </svg>
);

export const FacebookIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
  </svg>
);

export const InstagramIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </svg>
);
