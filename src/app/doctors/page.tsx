import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CalendarCheck, Stethoscope } from "lucide-react";
import { doctors } from "@/lib/doctors";
import { doctorsSchema } from "@/lib/schema";
import { CtaBand, JsonLd, PageHero } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Our Dentists — Dr. Saurabh Gaur, Dr. Avantika Gaur & Dr. Gaurav Arya",
  description:
    "Meet the dentists at Dr. Gaur Dental Hospital, Behror: Dr. Saurabh Gaur (certified rotary endodontist & implantologist), Dr. Avantika Gaur and orthodontist Dr. Gaurav Arya (MDS).",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <JsonLd data={doctorsSchema()} />
      <PageHero
        title="Meet our dentists"
        intro="An experienced, caring team combining general, cosmetic, endodontic, implant and orthodontic expertise — so most of your dental needs are handled under one roof."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Our Doctors", path: "/doctors" },
        ]}
      />

      <div className="container-page space-y-20 py-16 lg:space-y-28 lg:py-24">
        {doctors.map((d, i) => (
          <section key={d.slug} id={d.slug} aria-labelledby={`${d.slug}-name`} className="grid items-start gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
            <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-100 shadow-2xl shadow-brand-900/15">
                <Image
                  src={d.clinicPhoto}
                  alt={`${d.name} at Dr. Gaur Dental Hospital, Behror`}
                  fill
                  placeholder="blur"
                  sizes="(min-width:1024px) 26rem, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{d.role}</p>
                <p className="mt-0.5 text-sm font-medium text-slate-600">{d.experience}</p>
              </div>
            </div>

            <div className="pt-4">
              <h2 id={`${d.slug}-name`} className="text-3xl font-bold sm:text-4xl">
                {d.name}
              </h2>
              <p className="mt-1 text-lg font-medium text-brand-700">{d.qualifications}</p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {d.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 rounded-2xl bg-brand-50 p-3.5 text-sm font-medium text-slate-800">
                    <BadgeCheck className="size-5 shrink-0 text-brand-600" aria-hidden /> {h}
                  </li>
                ))}
              </ul>

              <div className="prose-clinic mt-8">
                {d.bio.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <h3 className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                <Stethoscope className="size-4" aria-hidden /> Areas of expertise
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {d.expertise.map((e) => (
                  <li key={e} className="rounded-full border border-brand-200 px-3.5 py-1.5 text-sm font-medium text-brand-800">
                    {e}
                  </li>
                ))}
              </ul>

              <Link href="/contact#book" className="btn-primary mt-8">
                <CalendarCheck className="size-5" aria-hidden /> Book with {d.name}
              </Link>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
