import type { Metadata } from "next";
import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { ToothIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page max-w-2xl text-center">
        <span className="mx-auto grid size-20 place-items-center rounded-3xl bg-brand-50 text-brand-700">
          <ToothIcon className="size-10" />
        </span>
        <h1 className="mt-6 text-4xl font-bold">Oops — this page is missing, like a lost tooth!</h1>
        <p className="mt-4 text-slate-600">The page you&apos;re looking for doesn&apos;t exist. Try one of these instead:</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="size-5" aria-hidden /> Go home
          </Link>
          <a href={site.phoneHref} className="btn-outline">
            <Phone className="size-5" aria-hidden /> Call {site.phone}
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {treatments.slice(0, 6).map((t) => (
            <li key={t.slug}>
              <Link href={`/treatments/${t.slug}`} className="rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-50">
                {t.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
