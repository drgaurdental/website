import Link from "next/link";
import { ChevronRight, Phone, CalendarCheck, ArrowRight, Plus } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import type { Treatment } from "@/lib/treatments";
import { TreatmentIcon, WhatsAppIcon } from "./icons";

/** Renders structured data. `<` is escaped to prevent script injection. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">{title}</Tag>
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{intro}</p>}
    </div>
  );
}

export function TreatmentCard({ t }: { t: Treatment }) {
  return (
    <Link
      href={`/treatments/${t.slug}`}
      className="group card relative flex h-full flex-col p-4 transition sm:p-6 duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
    >
      <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white sm:size-14">
        <TreatmentIcon name={t.icon} className="size-6 sm:size-7" />
      </span>
      <h3 className="mt-3 text-[15px] font-semibold leading-snug sm:mt-5 sm:text-lg">{t.name}</h3>
      <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-slate-600 sm:block">{t.short}</p>
      <span className="mt-5 hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
        Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-1 sm:px-7 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-slate-900">
            {f.q}
            <Plus className="size-5 shrink-0 text-brand-600 transition group-open:rotate-45" aria-hidden />
          </summary>
          <p className="pb-5 leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1 text-brand-200">
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-white">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-white">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/** Purple banner used at the top of inner pages. */
export function PageHero({
  title,
  intro,
  crumbs,
  children,
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div aria-hidden className="absolute -right-24 -top-24 size-96 rounded-full bg-brand-600/40 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 left-10 size-80 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="container-page relative py-14 sm:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-5 max-w-4xl text-3xl font-bold text-white sm:text-5xl sm:leading-tight">{title}</h1>
        {intro && <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-100 sm:text-lg">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready for a healthier, brighter smile?",
  text = "Book a visit with our experienced dentists in Behror. Same-week appointments and 24-hour emergency support.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div aria-hidden className="absolute -left-10 -top-10 size-60 rounded-full bg-gold-400/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-16 -right-10 size-72 rounded-full bg-brand-400/30 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-brand-100">{text}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact#book" className="btn-gold">
              <CalendarCheck className="size-5" aria-hidden /> Book Appointment
            </Link>
            <a href={site.phoneHref} className="btn border border-white/30 text-white hover:bg-white/10">
              <Phone className="size-5" aria-hidden /> {site.phone}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="size-5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
