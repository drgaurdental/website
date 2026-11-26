import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PlayCircle } from "lucide-react";
import { smileCases, surgicalCases, clinicPhotos, campPhotos, kidsPhotos } from "@/lib/gallery";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/schema";
import { CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { GalleryGrid } from "@/components/interactive";

export const metadata: Metadata = pageMeta({
  title: "Smile Gallery — Before & After Dental Results",
  description:
    "Real before-and-after results from Dr. Gaur Dental Hospital, Behror: zirconia crowns, bridges, smile makeovers, wisdom tooth removal, plus photos of our clinic, young patients and free dental camps.",
  path: "/gallery",
});

const videos = [
  {
    src: "/videos/painless-extraction.mp4",
    poster: "/videos/painless-extraction.jpg",
    title: "Painless tooth extraction",
    description: "A patient's tooth extraction performed gently under local anaesthesia at Dr. Gaur Dental Hospital, Behror.",
    aspect: "aspect-[9/16] max-w-sm",
    duration: "PT12S",
  },
  {
    src: "/videos/kids-extraction.mp4",
    poster: "/videos/kids-extraction.jpg",
    title: "Painless extraction for a child",
    description: "A calm, gentle milk-tooth extraction for a young patient at Dr. Gaur Dental Hospital, Behror.",
    aspect: "aspect-video",
    duration: "PT1M6S",
  },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={videos.map((v) => ({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: v.title,
          description: v.description,
          thumbnailUrl: absoluteUrl(v.poster),
          contentUrl: absoluteUrl(v.src),
          uploadDate: "2026-02-14",
          duration: v.duration,
          publisher: { "@type": "Organization", name: site.name },
        }))}
      />
      <PageHero
        title="Smile gallery"
        intro="Real results from real patients at our Behror clinic. Faces are blurred to protect privacy; results vary from person to person."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smile Gallery", path: "/gallery" },
        ]}
      >
        <nav aria-label="Gallery sections" className="mt-8 flex flex-wrap gap-2">
          {[
            ["#smiles", "Before & after"],
            ["#surgery", "Surgery & X-rays"],
            ["#videos", "Videos"],
            ["#clinic", "Our clinic"],
            ["#camps", "Dental camps"],
            ["#kids", "Little smiles"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
              {label}
            </a>
          ))}
        </nav>
      </PageHero>

      <section id="smiles" className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Before & after" title="Smile transformations" intro="Crowns, bridges, restorations and full-mouth rehabilitation." />
          <div className="mt-12">
            <GalleryGrid images={smileCases} />
          </div>
        </div>
      </section>

      <section id="surgery" className="section bg-brand-50/60">
        <div className="container-page">
          <SectionHeading eyebrow="Oral surgery & diagnostics" title="Wisdom tooth surgery & X-rays" />
          <div className="mt-12">
            <GalleryGrid images={surgicalCases} />
          </div>
        </div>
      </section>

      <section id="videos" className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Watch" title="See how gentle treatment can be" />
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[auto_1fr]">
            {videos.map((v) => (
              <figure key={v.src} className="mx-auto w-full">
                <div className={`mx-auto w-full overflow-hidden rounded-3xl bg-black shadow-xl ${v.aspect}`}>
                  <video controls preload="none" playsInline poster={v.poster} className="size-full object-contain" aria-label={v.title}>
                    <source src={v.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
                <figcaption className="mt-4 flex items-start gap-2 text-sm text-slate-600">
                  <PlayCircle className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                  <span>
                    <span className="block font-semibold text-slate-900">{v.title}</span>
                    {v.description}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="clinic" className="section bg-brand-50/60">
        <div className="container-page">
          <SectionHeading eyebrow="Our clinic" title="A clean, modern space in Behror" />
          <div className="mt-12">
            <GalleryGrid images={clinicPhotos} />
          </div>
        </div>
      </section>

      <section id="camps" className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Community" title="Free dental check-up camps" intro="Spreading oral-health awareness in schools and villages around Behror." />
          <div className="mt-12">
            <GalleryGrid images={campPhotos} />
          </div>
        </div>
      </section>

      <section id="kids" className="section bg-brand-50/60">
        <div className="container-page">
          <SectionHeading eyebrow="Kids dentistry" title="Little smiles" intro="Gentle, friendly care that helps children feel at ease in the dental chair." />
          <div className="mt-12">
            <GalleryGrid images={kidsPhotos} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </div>
      </section>

      <CtaBand title="Want results like these?" />
    </>
  );
}
