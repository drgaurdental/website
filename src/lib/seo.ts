import type { Metadata } from "next";
import { site } from "./site";

const DEFAULT_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: `${site.name}, ${site.address.locality}` };

/**
 * Builds complete page metadata. Next.js replaces (not merges) `openGraph`
 * and `twitter` objects from the layout, so every page needs the full set.
 */
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [DEFAULT_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_IMAGE.url],
    },
  };
}
