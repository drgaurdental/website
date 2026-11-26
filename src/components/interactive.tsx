"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight, MapPin, Pause, Play, Send, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import { site, whatsappLink } from "@/lib/site";

/**
 * Google Maps facade: shows a lightweight placeholder and loads the heavy
 * iframe only when the visitor asks for it (keeps the page fast).
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-brand-50 ${className}`}>
      {show ? (
        <iframe
          title={`Map showing ${site.name}, ${site.address.locality}`}
          src={site.mapsEmbedUrl}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,var(--color-brand-100),var(--color-brand-50))] p-6 text-center">
          <div>
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-700 text-white shadow-lg">
              <MapPin className="size-7" aria-hidden />
            </span>
            <p className="mt-4 font-semibold text-slate-900">{site.name}</p>
            <p className="text-sm text-slate-600">
              {site.address.locality}, {site.address.region}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <button type="button" onClick={() => setShow(true)} className="btn-primary px-5 py-2.5 text-sm">
                Show map
              </button>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-2.5 text-sm">
                Get directions
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

/** How long autoplay waits after the visitor swipes, scrolls or clicks inside the row. */
const RESUME_AFTER_MS = 6000;

/**
 * Horizontal snap row that advances one card at a time and loops back to the start.
 * Pauses on hover, focus or touch, while off-screen or in a background tab, and is
 * off for visitors who prefer reduced motion. Includes a pause/play button.
 */
export function AutoScrollRow({
  children,
  label,
  interval = 3500,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  interval?: number;
  className?: string;
}) {
  const rowRef = useRef<HTMLUListElement>(null);
  const holdRef = useRef(false);
  const lastInteractionRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const playing = !paused && !reducedMotion;

  useEffect(() => {
    const row = rowRef.current;
    if (!row || !playing) return;

    let inView = false;
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry?.isIntersecting ?? false;
    }, { threshold: 0.3 });
    observer.observe(row);

    const timer = window.setInterval(() => {
      const recentlyTouched = Date.now() - lastInteractionRef.current < RESUME_AFTER_MS;
      if (!inView || holdRef.current || recentlyTouched || document.hidden) return;
      const card = row.firstElementChild;
      if (!(card instanceof HTMLElement)) return;
      const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
      const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;
      row.scrollTo({ left: atEnd ? 0 : row.scrollLeft + card.offsetWidth + gap, behavior: "smooth" });
    }, interval);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [playing, interval]);

  const markInteraction = () => {
    lastInteractionRef.current = Date.now();
  };

  return (
    <div className={className}>
      <ul
        ref={rowRef}
        aria-label={label}
        className="snap-row"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") holdRef.current = true;
        }}
        onPointerLeave={() => {
          holdRef.current = false;
        }}
        onPointerDown={markInteraction}
        onTouchStart={markInteraction}
        onWheel={markInteraction}
        onFocus={() => {
          holdRef.current = true;
        }}
        onBlur={() => {
          holdRef.current = false;
        }}
      >
        {children}
      </ul>
      {!reducedMotion && (
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="grid size-10 place-items-center rounded-full border border-brand-200 bg-white text-brand-700 transition hover:bg-brand-50"
          >
            {paused ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
          </button>
        </div>
      )}
    </div>
  );
}

/** Responsive image grid with an accessible lightbox. */
export function GalleryGrid({ images, columns = "sm:grid-cols-2 lg:grid-cols-3" }: { images: GalleryImage[]; columns?: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? null : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [index, close, step]);

  const current = index === null ? null : (images[index] ?? null);

  if (images.length === 0) {
    return (
      <p className="rounded-3xl border border-dashed border-brand-200 bg-brand-50 px-6 py-10 text-center text-sm text-slate-600">
        Photos are coming soon.
      </p>
    );
  }

  return (
    <>
      <ul className={`grid grid-cols-1 gap-5 ${columns}`}>
        {images.map((img, i) => (
          <li key={img.src.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group block w-full overflow-hidden rounded-3xl border border-slate-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="relative block aspect-4/3 overflow-hidden bg-slate-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className={`object-cover transition duration-500 group-hover:scale-105 ${img.focus ?? ""}`}
                  placeholder="blur"
                />
              </span>
              <span className="block px-5 py-4 text-sm font-semibold text-slate-800">{img.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-60 flex items-center justify-center bg-brand-950/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="size-6" />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} className="max-h-[80vh] w-auto rounded-2xl object-contain" sizes="90vw" />
            <figcaption className="mt-3 text-center text-sm text-brand-100">{current.caption}</figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </>
  );
}

/**
 * Appointment request form. No backend needed: it builds a WhatsApp message
 * with the patient's details and opens WhatsApp to send it to the clinic.
 */
/** Today's date in the visitor's time zone, as YYYY-MM-DD (the format date inputs use). */
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function BookingForm({ treatments }: { treatments: { slug: string; name: string }[] }) {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!name || !/^[0-9+\s-]{10,15}$/.test(phone)) {
      setError("Please enter your name and a valid 10-digit phone number.");
      return;
    }
    const date = String(data.get("date") || "");
    // Plain string comparison works for YYYY-MM-DD. Checked here too because some browsers let you type a past date.
    if (date && date < todayISO()) {
      setError("Please choose today or a future date.");
      return;
    }
    setError("");
    const lines = [
      "Hello Dr. Gaur Dental Hospital, I would like to book an appointment.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      data.get("treatment") ? `Treatment: ${data.get("treatment")}` : "",
      date ? `Preferred date: ${date.split("-").reverse().join("/")}` : "",
      data.get("time") ? `Preferred time: ${data.get("time")}` : "",
      data.get("message") ? `Details: ${data.get("message")}` : "",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <label className="block text-sm font-medium text-slate-700">
        Full name *
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Phone number *
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} placeholder="98XXXXXXXX" />
      </label>
      <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
        Treatment
        <select name="treatment" className={field} defaultValue="">
          <option value="">General check-up / Not sure</option>
          {treatments.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Preferred date
        <input
          name="date"
          type="date"
          // Set in the browser: the page is pre-rendered, so "today" must come from the visitor's clock.
          ref={(el) => {
            if (el) el.min = todayISO();
          }}
          className={field}
        />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Preferred time
        <select name="time" className={field} defaultValue="">
          <option value="">Any time</option>
          <option>Morning (8 AM – 1 PM)</option>
          <option>Evening (2 PM – 8 PM)</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
        Describe your problem (optional)
        <textarea name="message" rows={3} className={field} placeholder="e.g. pain in lower left tooth for 3 days" />
      </label>
      {error && (
        <p role="alert" className="text-sm font-medium text-red-600 sm:col-span-2">
          {error}
        </p>
      )}
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn-whatsapp">
          <Send className="size-5" aria-hidden /> Send request on WhatsApp
        </button>
        <p className="text-xs text-slate-500">
          Opens WhatsApp with your details filled in. Prefer a form?{" "}
          <a href={site.bookingFormUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline">
            Use our online form
          </a>
          .
        </p>
      </div>
    </form>
  );
}
