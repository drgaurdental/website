"use client";

import Link from "next/link";
import { Home, Phone, RotateCw } from "lucide-react";
import { site } from "@/lib/site";
import { ToothIcon } from "@/components/icons";

/** Fallback shown if a page crashes while rendering. Header and footer stay visible. */
export default function Error({ retry }: { error: unknown; retry: () => void }) {
  return (
    <section className="section">
      <div className="container-page max-w-2xl text-center">
        <span className="mx-auto grid size-20 place-items-center rounded-3xl bg-brand-50 text-brand-700">
          <ToothIcon className="size-10" />
        </span>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Something went wrong</h1>
        <p className="mt-4 text-slate-600">
          This page didn&apos;t load properly. Please try again, or call us directly to book your visit.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => retry()} className="btn-primary">
            <RotateCw className="size-5" aria-hidden /> Try again
          </button>
          <Link href="/" className="btn-outline">
            <Home className="size-5" aria-hidden /> Go home
          </Link>
          <a href={site.phoneHref} className="btn-outline">
            <Phone className="size-5" aria-hidden /> Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
