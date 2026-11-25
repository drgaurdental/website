import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, CheckCircle2, ClipboardList, HeartPulse, Phone, Stethoscope } from "lucide-react";
import { treatments, getTreatment } from "@/lib/treatments";
import { site, whatsappLink } from "@/lib/site";
import { faqSchema, treatmentSchema } from "@/lib/schema";
import { CtaBand, Faq, JsonLd, PageHero, TreatmentCard } from "@/components/ui";
import { TreatmentIcon, WhatsAppIcon } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/treatments/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return pageMeta({ title: t.headline, description: t.metaDescription, path: `/treatments/${t.slug}` });
}

export default async function TreatmentPage({ params }: PageProps<"/treatments/[slug]">) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const related = t.related.map(getTreatment).filter((x) => x !== undefined);

  return (
    <>
      <JsonLd data={[treatmentSchema(t), faqSchema(t.faqs)]} />
      <PageHero
        title={t.headline}
        intro={t.short}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
          { name: t.name, path: `/treatments/${t.slug}` },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact#book" className="btn-gold">
            <CalendarCheck className="size-5" aria-hidden /> Book a consultation
          </Link>
          <a href={site.phoneHref} className="btn border border-white/30 text-white hover:bg-white/10">
            <Phone className="size-5" aria-hidden /> {site.phone}
          </a>
        </div>
      </PageHero>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1fr_22rem] lg:py-20">
        <article className="min-w-0">
          <section className="prose-clinic">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">About {t.name.toLowerCase().startsWith("kids") ? "children's dentistry" : t.name}</h2>
            {t.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </section>

          {t.image && (
            <figure className="mt-10 overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
              <Image src={t.image.src} alt={t.image.alt} placeholder="blur" sizes="(min-width:1024px) 60vw, 100vw" className="max-h-[32rem] w-full object-contain" />
              <figcaption className="px-5 py-3 text-sm text-slate-500">{t.image.alt} — treated at {site.name}.</figcaption>
            </figure>
          )}

          <section className="mt-14">
            <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
              <Stethoscope className="size-7 text-brand-600" aria-hidden /> When you might need it
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.signs.map((s) => (
                <li key={s} className="flex gap-3 rounded-2xl bg-brand-50 p-4 text-slate-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden /> {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
              <ClipboardList className="size-7 text-brand-600" aria-hidden /> What happens during treatment
            </h2>
            <ol className="relative mt-8 space-y-8 border-l-2 border-dashed border-brand-200 pl-8">
              {t.steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[3.05rem] grid size-9 place-items-center rounded-full bg-brand-700 text-sm font-bold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-mint-50 p-6">
              <h2 className="text-xl font-bold">Benefits</h2>
              <ul className="mt-4 space-y-2.5">
                {t.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-slate-700">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-mint-600" aria-hidden /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gold-100/60 p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <HeartPulse className="size-5 text-gold-600" aria-hidden /> Aftercare tips
              </h2>
              <ul className="mt-4 space-y-2.5">
                {t.aftercare.map((a) => (
                  <li key={a} className="flex gap-2.5 text-slate-700">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-600" aria-hidden /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-6">
              <Faq items={t.faqs} />
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="card p-6">
            <span className="grid size-14 place-items-center rounded-2xl bg-brand-700 text-white">
              <TreatmentIcon name={t.icon} className="size-7" />
            </span>
            <h2 className="mt-4 text-xl font-bold">Book your {t.name.split(" (")[0].toLowerCase()} consultation</h2>
            <p className="mt-2 text-sm text-slate-600">
              Get an examination, X-ray if needed, and a clear treatment plan with costs — before anything begins.
            </p>
            <div className="mt-5 grid gap-2.5">
              <Link href="/contact#book" className="btn-primary">
                <CalendarCheck className="size-5" aria-hidden /> Book appointment
              </Link>
              <a href={whatsappLink(`Hello, I would like to know more about ${t.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="size-5" /> Ask on WhatsApp
              </a>
              <a href={site.phoneHref} className="btn-outline">
                <Phone className="size-5" aria-hidden /> {site.phone}
              </a>
            </div>
            <dl className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Timings</dt>
                <dd className="text-right font-medium text-slate-800">
                  {site.hours.slots.map((s) => (
                    <span key={s.label} className="block">
                      {s.label}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Emergency</dt>
                <dd className="font-medium text-slate-800">24 hours</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-brand-50/60 py-16">
          <div className="container-page">
            <h2 className="text-2xl font-bold sm:text-3xl">Related treatments</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {related.map((r) => (
                <TreatmentCard key={r.slug} t={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
