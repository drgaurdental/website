"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Clock, MapPin, Menu, Phone, X, CalendarCheck } from "lucide-react";
import logoMark from "@/images/logo-mark.webp";
import { site } from "@/lib/site";
import type { IconName } from "@/lib/treatments";
import { TreatmentIcon } from "./icons";

type NavTreatment = { slug: string; name: string; short: string; icon: IconName };

const links = [
  { href: "/", label: "Home" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/gallery", label: "Smile Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header({ treatments }: { treatments: NavTreatment[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);

  // Close menus on navigation
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setMegaOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Info strip */}
      <div className="hidden bg-brand-950 text-brand-100 md:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-gold-400" aria-hidden /> {site.address.locality}, {site.address.region}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-gold-400" aria-hidden /> {site.hours.slots.map((s) => s.label).join(" · ")}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="font-medium text-gold-300">24-hour emergency</span>
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold text-white hover:text-gold-300">
              <Phone className="size-3.5" aria-hidden /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
            <Image src={logoMark} alt="" width={44} height={44} priority className="size-10 object-contain lg:size-11" />
            <span className="leading-tight">
              <span className="block text-base font-extrabold text-brand-800 lg:text-lg">Dr. Gaur Dental</span>
              <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-500">
                Hospital · Behror
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            <li>
              <Link href="/" className={navCls(isActive("/"))}>
                Home
              </Link>
            </li>
            <li
              ref={megaRef}
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                className={`${navCls(pathname.startsWith("/treatments"))} inline-flex items-center gap-1`}
                aria-expanded={megaOpen}
                aria-controls="mega-menu"
                onClick={() => setMegaOpen((o) => !o)}
              >
                Treatments <ChevronDown className={`size-4 transition ${megaOpen ? "rotate-180" : ""}`} aria-hidden />
              </button>
              <div
                id="mega-menu"
                className={`absolute left-1/2 top-full w-[min(56rem,90vw)] -translate-x-1/2 pt-3 transition duration-200 ${
                  megaOpen ? "visible opacity-100" : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <div className="card grid grid-cols-3 gap-1 p-3">
                  {treatments.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/treatments/${t.slug}`}
                      className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-brand-50"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                        <TreatmentIcon name={t.icon} className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-900">{t.name}</span>
                        <span className="mt-0.5 block text-xs leading-snug text-slate-500">{t.short}</span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/treatments"
                    className="col-span-3 mt-1 rounded-2xl bg-brand-50 p-3 text-center text-sm font-semibold text-brand-700 hover:bg-brand-100"
                  >
                    View all treatments →
                  </Link>
                </div>
              </div>
            </li>
            {links.slice(1).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={navCls(isActive(l.href))}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/contact#book" className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
              <CalendarCheck className="size-4" aria-hidden /> Book Appointment
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full text-brand-800 hover:bg-brand-50 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 md:top-26 overflow-y-auto bg-white transition duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="container-page py-6 pb-28">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block rounded-2xl px-4 py-3 text-lg font-semibold ${
                    isActive(l.href) ? "bg-brand-50 text-brand-700" : "text-slate-800"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Treatments</p>
          <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-slate-700 hover:bg-brand-50"
                >
                  <TreatmentIcon name={t.icon} className="size-5 text-brand-600" />
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 px-1">
            <Link href="/contact#book" className="btn-primary">
              <CalendarCheck className="size-5" aria-hidden /> Book Appointment
            </Link>
            <a href={site.phoneHref} className="btn-outline">
              <Phone className="size-5" aria-hidden /> Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function navCls(active: boolean) {
  return `rounded-full px-4 py-2 text-[15px] font-medium transition ${
    active ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
  }`;
}
