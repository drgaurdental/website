import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
  ScanLine,
  ShieldCheck,
  Siren,
  Smile,
  Snowflake,
  Sparkles,
  Star,
  Wallet,
  Zap,
} from "lucide-react";

import heroImg from "@/images/clinic/operatory-1.webp";
import exterior from "@/images/clinic/exterior-signboard.webp";
import op1 from "@/images/clinic/treatment-room.webp";
import waiting from "@/images/clinic/waiting-area.webp";
import kids1 from "@/images/kids/kids-1.webp";
import kids2 from "@/images/kids/kids-2.webp";
import kids3 from "@/images/kids/kids-3.webp";

import { site, fullAddress, whatsappLink, yearsSince } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { doctors } from "@/lib/doctors";
import { smileCases, campPhotos } from "@/lib/gallery";
import { faqSchema } from "@/lib/schema";
import { CtaBand, Faq, JsonLd, SectionHeading, TreatmentCard } from "@/components/ui";
import { WhatsAppIcon, ToothIcon } from "@/components/icons";
import { AutoScrollRow, MapEmbed } from "@/components/interactive";

export const metadata: Metadata = pageMeta({
  title: "Dr. Gaur Dental Hospital | Best Dentist in Behror, Rajasthan",
  description:
    "Dr. Gaur Dental Hospital, Behror — trusted dentist since 2014. Painless root canal, dental implants, braces & aligners, crowns, dentures, teeth cleaning and kids dentistry. Call +91 97993 53531.",
  path: "/",
  absoluteTitle: true,
});

const homeFaqs = [
  {
    q: "Where is Dr. Gaur Dental Hospital located?",
    a: `We are in ${site.address.locality}, ${site.address.region} (${site.address.district} district, formerly Alwar). Patients visit us from Behror, Neemrana, Shahjahanpur, Kotputli, Mundawar and nearby villages. Tap "Get directions" on this page to open Google Maps.`,
  },
  {
    q: "What are your clinic timings?",
    a: `The clinic is open ${site.hours.slots.map((s) => s.label).join(" and ")}. For dental emergencies such as severe pain, swelling or injury, call ${site.phone} — 24-hour emergency support is available.`,
  },
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome, but booking ahead on call or WhatsApp means less waiting. You can also send an appointment request from our contact page.",
  },
  {
    q: "Is root canal treatment painful?",
    a: "With modern anaesthesia and rotary instruments, root canal treatment is usually no more uncomfortable than a filling. Dr. Saurabh Gaur is a certified rotary endodontist.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. We offer gentle children's dentistry — check-ups, fillings, painless extractions and early orthodontic advice — in a calm, friendly setting.",
  },
  {
    q: "How much does treatment cost?",
    a: "Cost depends on the treatment and materials chosen. After examining you, we explain all options and charges clearly before starting — no hidden costs.",
  },
];

const whyUs = [
  { icon: Award, title: `${yearsSince(site.foundedYear)}+ years of trust`, text: "Caring for Behror's smiles since 2014, led by Dr. Saurabh Gaur." },
  { icon: Zap, title: "Painless, modern treatment", text: "Rotary endodontics, effective anaesthesia and gentle techniques." },
  { icon: BadgeCheck, title: "Specialist team", text: "Certified endodontist & implantologist, plus an MDS orthodontist." },
  { icon: ShieldCheck, title: "QCI certified — 1st in Behror", text: "Behror's first dental clinic certified by the Quality Council of India, with strict hygiene and sterilisation for every patient." },
  { icon: Wallet, title: "Honest, affordable pricing", text: "Clear treatment plans and costs explained before we begin." },
  { icon: Siren, title: "24-hour emergency", text: "Severe pain, swelling or a broken tooth? Call us any time." },
];

const facilities = [
  { icon: Snowflake, title: "Fully air-conditioned cabins", text: "Comfortable, hygienic treatment rooms with drinking water." },
  { icon: ScanLine, title: "Digital X-ray & imaging", text: "Fast, low-radiation diagnostics for accurate treatment." },
  { icon: Sparkles, title: "Advanced dental equipment", text: "Modern chairs and rotary instruments for precise procedures." },
  { icon: Zap, title: "RF cautery", text: "Gentle, precise treatment for gum and oral lesions." },
  { icon: ShieldCheck, title: "Sterilisation protocols", text: "Every instrument is sterilised for your safety." },
  { icon: WhatsAppIcon, title: "WhatsApp consultation", text: "Share your problem and book appointments easily." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute -right-40 -top-40 size-[36rem] rounded-full bg-brand-200/50 blur-3xl" />
        <div aria-hidden className="absolute -left-20 top-60 size-80 rounded-full bg-gold-200/40 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <div className="animate-fade-up">
            <div className="mb-5">
              <p className="inline-flex items-center gap-3 rounded-2xl border border-gold-300 bg-gradient-to-r from-gold-100 via-gold-100/60 to-white py-2 pl-2 pr-5 shadow-md shadow-gold-500/10">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-brand-950 shadow">
                  <BadgeCheck className="size-6" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-extrabold uppercase tracking-wide text-brand-900">{site.accreditation.short}</span>
                  <span className="block text-xs font-semibold text-slate-600">{site.accreditation.full}</span>
                </span>
              </p>
            </div>
            <p className="eyebrow">
              <ToothIcon className="size-4" /> {site.tagline} · Since {site.foundedYear}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Trusted dentist in <span className="text-brand-700">Behror</span> for{" "}
              <span className="relative whitespace-nowrap">
                painless care
                <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full text-gold-400" preserveAspectRatio="none">
                  <path d="M2 9C60 3 140 2 298 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Root canals, dental implants, braces and family dentistry by Dr. Saurabh Gaur and team at{" "}
              <strong className="font-semibold text-slate-800">{site.name}</strong> — modern equipment, strict hygiene and
              a gentle touch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#book" className="btn-primary">
                <CalendarCheck className="size-5" aria-hidden /> Book Appointment
              </Link>
              <a href={site.phoneHref} className="btn-outline">
                <Phone className="size-5" aria-hidden /> {site.phone}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
              {["Certified Rotary Endodontist", "MDS Orthodontist", "24-hour emergency"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-mint-500" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20 ring-8 ring-white">
              <Image
                src={heroImg}
                alt="Modern treatment room at Dr. Gaur Dental Hospital, Behror"
                fill
                priority
                placeholder="blur"
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
              <span className="grid size-12 place-items-center rounded-xl bg-gold-100 text-gold-600">
                <Smile className="size-6" aria-hidden />
              </span>
              <span>
                <span className="block text-2xl font-extrabold text-slate-900">{site.patientsTreated}</span>
                <span className="block text-xs font-medium text-slate-500">happy patients treated</span>
              </span>
            </div>
            <div className="absolute -right-2 -top-5 hidden items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl sm:flex sm:-right-6">
              <div className="flex -space-x-3">
                {doctors.map((d) => (
                  <Image key={d.slug} src={d.portrait} alt="" width={40} height={40} className="size-10 rounded-full object-cover ring-2 ring-white" />
                ))}
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-800">
                3 experienced
                <br />
                dentists
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <section aria-label="Clinic highlights" className="border-y border-slate-100 bg-white">
        <dl className="container-page grid grid-cols-2 gap-6 py-10 text-center md:grid-cols-4">
          {[
            ["Since 2014", "Serving Behror"],
            [site.patientsTreated, "Patients treated"],
            ["12+", "Dental treatments"],
            ["24 hrs", "Emergency support"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="text-3xl font-extrabold text-brand-700 sm:text-4xl">{value}</dd>
              <dd className="mt-1 text-sm font-medium text-slate-500">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ───────── QCI CERTIFICATION ───────── */}
      <section aria-labelledby="qci-heading" className="relative overflow-hidden bg-brand-900 text-white">
        <div aria-hidden className="absolute -left-20 -top-24 size-72 rounded-full bg-gold-400/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 right-0 size-80 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="container-page relative flex flex-col items-center gap-6 py-10 text-center sm:py-12 md:flex-row md:gap-8 md:text-left">
          <span className="grid size-24 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 text-brand-950 shadow-xl shadow-gold-500/30 ring-8 ring-gold-400/20">
            <Award className="size-12" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-300">Quality Council of India</p>
            <h2 id="qci-heading" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {site.accreditation.full}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-brand-100">
              Certified by the Quality Council of India (QCI), the national body for quality standards — a mark of our
              commitment to hygiene, patient safety and quality care.
            </p>
          </div>
          <Link href="/contact#book" className="btn-gold shrink-0 md:ml-auto">
            <CalendarCheck className="size-5" aria-hidden /> Book a visit
          </Link>
        </div>
      </section>

      {/* ───────── TREATMENTS ───────── */}
      <section className="section bg-gradient-to-b from-white to-brand-50/60" aria-labelledby="treatments-heading">
        <div className="container-page">
          <div id="treatments-heading">
            <SectionHeading
              eyebrow="Our treatments"
              title="Complete dental care under one roof"
              intro="From a simple check-up to implants and braces — everything your family needs, done gently and explained clearly."
            />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {treatments.map((t) => (
              <TreatmentCard key={t.slug} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WHY US ───────── */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src={exterior} alt="Dr. Gaur Dental Hospital clinic entrance and signboard in Behror" fill placeholder="blur" sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image src={op1} alt="Air-conditioned dental operatory" fill placeholder="blur" sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image src={waiting} alt="Clean patient waiting area" fill placeholder="blur" sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              title="Why Behror families trust Dr. Gaur Dental Hospital"
              intro="We combine experienced hands with modern technology — and we always take the time to listen."
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {whyUs.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/20">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900">{title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── DOCTORS ───────── */}
      <section className="section bg-brand-50/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="Meet our dentists"
            title="Experienced doctors who genuinely care"
            intro={`Together our team has treated ${site.patientsTreated} patients across Behror and nearby towns.`}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {doctors.map((d) => (
              <Link key={d.slug} href={`/doctors#${d.slug}`} className="group card overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/4.2] overflow-hidden bg-brand-100">
                  <Image src={d.portrait} alt={`${d.name}, ${d.qualifications}`} fill placeholder="blur" sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-top transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{d.role}</p>
                  <h3 className="mt-1 text-xl font-bold">{d.name}</h3>
                  <p className="text-sm font-medium text-slate-500">{d.qualifications}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                    {d.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex gap-2">
                        <Star className="mt-0.5 size-4 shrink-0 fill-gold-400 text-gold-400" aria-hidden /> {h}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Read profile <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SMILE GALLERY ───────── */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Real results"
              title="Smiles we've transformed"
              intro="Before-and-after results from patients treated at our clinic. Faces are blurred to protect privacy."
            />
            <Link href="/gallery" className="btn-outline shrink-0">
              View full gallery <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <AutoScrollRow label="Before-and-after smile results" className="mt-10">
            {smileCases.slice(0, 8).map((c) => (
              <li key={c.src.src} className="w-72 shrink-0 sm:w-80">
                <figure className="card overflow-hidden">
                  <div className="relative aspect-[4/3.6] bg-slate-100">
                    <Image src={c.src} alt={c.alt} fill placeholder="blur" sizes="320px" className="object-cover" />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-semibold text-slate-800">{c.caption}</figcaption>
                </figure>
              </li>
            ))}
          </AutoScrollRow>
        </div>
      </section>

      {/* ───────── FACILITIES ───────── */}
      <section className="section bg-brand-950 text-brand-100">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow bg-white/10 text-gold-300">Clinic facilities</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Modern, comfortable and spotlessly clean</h2>
            <p className="mt-4 text-brand-200">Everything is designed around your comfort and safety — from the waiting room to the treatment chair.</p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <Icon className="size-8 text-gold-400" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-200">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── KIDS ───────── */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Kids dentistry"
              title="Nurturing young smiles, gently"
              intro="From the first tooth to the teenage years, we focus on building trust, teaching good habits and preventing problems before they start."
            />
            <ul className="mt-8 space-y-4">
              {[
                ["Painless extractions", "Gentle techniques that keep discomfort and anxiety to a minimum."],
                ["Tooth-coloured fillings", "Natural-looking fillings that treat cavities in milk and permanent teeth."],
                ["Smile correction", "Early orthodontic guidance to correct alignment as your child grows."],
              ].map(([title, text]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-mint-500" aria-hidden />
                  <span>
                    <span className="block font-semibold text-slate-900">{title}</span>
                    <span className="text-sm text-slate-600">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/treatments/kids-dentistry" className="btn-primary mt-8">
              About kids dentistry <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[kids1, kids2, kids3].map((img, i) => (
              <div key={i} className={`relative aspect-[3/4.5] overflow-hidden rounded-3xl ${i === 1 ? "translate-y-8" : ""}`}>
                <Image src={img} alt="Happy child at the dentist" fill placeholder="blur" sizes="(min-width:1024px) 16vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── COMMUNITY ───────── */}
      <section className="section bg-gradient-to-b from-brand-50/70 to-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Giving back"
            title="Free dental check-up camps"
            intro="Dr. Saurabh Gaur regularly organises free dental camps in schools and villages around Behror to spread oral-health awareness."
          />
          <ul className="snap-row mt-10">
            {campPhotos.map((c) => (
              <li key={c.src.src} className="w-72 shrink-0 sm:w-96">
                <figure className="card overflow-hidden">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image src={c.src} alt={c.alt} fill placeholder="blur" sizes="384px" className="object-cover" />
                  </div>
                  <figcaption className="flex items-center gap-2 px-5 py-4 text-sm font-semibold text-slate-800">
                    <HeartHandshake className="size-4 text-brand-600" aria-hidden /> {c.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQs"
            title="Questions patients often ask"
            intro={
              <>
                Can&apos;t find your answer? Call us at{" "}
                <a href={site.phoneHref} className="font-semibold text-brand-700 underline">
                  {site.phone}
                </a>{" "}
                or message us on WhatsApp.
              </>
            }
          />
          <Faq items={homeFaqs} />
        </div>
      </section>

      {/* ───────── LOCATION ───────── */}
      <section className="pb-4">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="card flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold">Visit our clinic in Behror</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden /> {fullAddress}
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                <span>{site.hours.slots.map((s) => s.label).join(" · ")}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                <a href={site.phoneHref} className="font-semibold hover:text-brand-700">
                  {site.phone}
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MapPin className="size-5" aria-hidden /> Get directions
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="size-5" /> WhatsApp
              </a>
            </div>
          </div>
          <MapEmbed className="min-h-80" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
