import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import logoMark from "@/images/logo-mark.webp";
import { site, fullAddress, whatsappLink } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-950 pb-24 text-brand-100 lg:pb-0">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-2xl bg-white p-1.5">
              <Image src={logoMark} alt="" width={48} height={48} className="object-contain" />
            </span>
            <span>
              <span className="block text-lg font-bold text-white">{site.name}</span>
              <span className="font-hindi block text-sm text-brand-200">{site.nameHindi}</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-200">
            {site.tagline}. {site.accreditation.full}, trusted for family dental care since {site.foundedYear} — root canals,
            implants, braces, cosmetic and children&apos;s dentistry under one roof.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
              <FacebookIcon className="size-5" />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
              <InstagramIcon className="size-5" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Treatments</h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
            {treatments.slice(0, 8).map((t) => (
              <li key={t.slug}>
                <Link href={`/treatments/${t.slug}`} className="text-brand-200 hover:text-white">
                  {t.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/treatments" className="font-semibold text-gold-300 hover:text-gold-200">
                All treatments →
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Clinic</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/doctors", "Our Doctors"],
              ["/gallery", "Smile Gallery"],
              ["/contact", "Contact & Location"],
              ["/contact#book", "Book Appointment"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-brand-200 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Visit us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {fullAddress}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <span>
                {site.hours.slots.map((s) => (
                  <span key={s.label} className="block">
                    {s.label}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Siren className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <span>{site.hours.emergency}</span>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}, {site.address.locality}. All rights reserved.
          </p>
          <p>Information on this website is for general awareness and is not a substitute for a dental consultation.</p>
        </div>
      </div>
    </footer>
  );
}

/** Sticky call / WhatsApp / book bar on phones — the fastest way for a patient to reach the clinic. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-bar backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={site.phoneHref} className="flex flex-col items-center gap-0.5 rounded-xl py-1.5 text-xs font-semibold text-brand-800 active:bg-brand-50">
          <Phone className="size-5" aria-hidden /> Call
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5 rounded-xl py-1.5 text-xs font-semibold text-whatsapp-700 active:bg-green-50">
          <WhatsAppIcon className="size-5" /> WhatsApp
        </a>
        <Link href="/contact#book" className="flex flex-col items-center gap-0.5 rounded-xl bg-brand-700 py-1.5 text-xs font-semibold text-white active:bg-brand-800">
          <CalendarIcon /> Book
        </Link>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
    </svg>
  );
}

/** Floating WhatsApp button for desktop. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center rounded-full bg-whatsapp-500 text-white shadow-xl shadow-whatsapp-500/30 transition hover:scale-105 lg:grid"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
