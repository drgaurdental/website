import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { treatments } from "@/lib/treatments";
import { CtaBand, JsonLd, PageHero, TreatmentCard } from "@/components/ui";
import { absoluteUrl } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Dental Treatments in Behror — RCT, Implants, Braces & More",
  description:
    "Explore dental treatments at Dr. Gaur Dental Hospital, Behror: root canal, implants, braces, clear aligners, crowns, dentures, cleaning, whitening, fillings and kids dentistry.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Dental treatments at Dr. Gaur Dental Hospital",
          itemListElement: treatments.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
            url: absoluteUrl(`/treatments/${t.slug}`),
          })),
        }}
      />
      <PageHero
        title="Dental treatments in Behror"
        intro="Comprehensive, gentle dental care for every member of your family — explained clearly, priced honestly and delivered with modern equipment."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ]}
      />
      <section className="section">
        <div className="container-page grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {treatments.map((t) => (
            <TreatmentCard key={t.slug} t={t} />
          ))}
        </div>
      </section>
      <CtaBand title="Not sure which treatment you need?" text="Book a check-up — we'll examine your teeth, explain your options and help you decide." />
    </>
  );
}
