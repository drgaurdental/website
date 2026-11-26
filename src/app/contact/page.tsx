import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { site, fullAddress, whatsappLink } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { PageHero } from "@/components/ui";
import { BookingForm, MapEmbed } from "@/components/interactive";
import { WhatsAppIcon } from "@/components/icons";
import { BookingDemo } from "./_components/BookingDemo";

export const metadata: Metadata = pageMeta({
  title: "Contact & Book an Appointment — Dentist in Behror",
  description: `Book an appointment at Dr. Gaur Dental Hospital, Behror. Call ${site.phone}, WhatsApp us, or get directions. Open 8 AM–1 PM & 2 PM–8 PM with 24-hour emergency support.`,
  path: "/contact",
});

export default function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: whatsappLink(), external: true },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Directions", value: "Open in Google Maps", href: site.mapsUrl, external: true },
  ];

  return (
    <>
      <PageHero
        title="Contact us & book an appointment"
        intro="Call, WhatsApp or send us your details below — we'll confirm a convenient time. Walk-ins are welcome too."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="container-page relative z-10 -mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="card group flex min-w-0 items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
              <Icon className="size-6" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span>
              <span className="block truncate font-semibold text-slate-900">{value}</span>
            </span>
          </a>
        ))}
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div id="book" className="card p-6 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Request an appointment</h2>
            <p className="mt-2 text-slate-600">Fill in your details and we&apos;ll get back to you to confirm the time.</p>
            <div className="mt-8">
              <BookingForm treatments={treatments.map(({ slug, name }) => ({ slug, name }))} />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">What happens after you send</h2>
              <p className="mt-1 mb-4 text-slate-600">WhatsApp opens with your request filled in, and we reply to confirm your time.</p>
              <BookingDemo />
            </div>
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-bold">Clinic details</h2>
              <address className="mt-5 space-y-4 not-italic text-slate-700">
                <p className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                  <span>
                    <strong className="block text-slate-900">{site.name}</strong>
                    <span className="font-hindi block text-sm text-slate-500">{site.nameHindi}</span>
                    {fullAddress}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                  <span>
                    {site.hours.slots.map((s) => (
                      <span key={s.label} className="block">
                        {s.label}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="flex gap-3 rounded-2xl bg-gold-100/70 p-3 text-sm font-medium text-slate-800">
                  <Siren className="size-5 shrink-0 text-gold-600" aria-hidden /> {site.hours.emergency}: {site.phone}
                </p>
              </address>
            </div>
            <MapEmbed className="aspect-[4/3.2]" />
            <p className="text-sm text-slate-500">
              We welcome patients from {site.areasServed.join(", ")} and surrounding villages.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
