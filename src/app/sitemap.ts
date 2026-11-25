import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { treatments } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/treatments", 0.9),
    ...treatments.map((t) => page(`/treatments/${t.slug}`, 0.8)),
    page("/doctors", 0.8),
    page("/contact", 0.8),
    page("/gallery", 0.6),
  ];
}
