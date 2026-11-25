import { site } from "./site";
import { doctors } from "./doctors";
import type { Treatment } from "./treatments";

const ORG_ID = `${site.url}/#dentist`;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: [site.nameHindi, site.shortName, "Dr Gaur Dental Hospital Behror"],
    description:
      "Dental hospital in Behror, Rajasthan offering root canal treatment, dental implants, braces, aligners, crowns, dentures, kids dentistry and cosmetic dentistry since 2014.",
    url: site.url,
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl("/og-image.jpg"),
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.foundedYear),
    award: `${site.accreditation.full} (Quality Council of India)`,
    address: {
      "@type": "PostalAddress",
      ...(site.address.street ? { streetAddress: site.address.street } : {}),
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    openingHoursSpecification: site.hours.slots.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: s.opens,
      closes: s.closes,
    })),
    areaServed: site.areasServed.map((name) => ({ "@type": "City", name })),
    medicalSpecialty: ["Dentistry", "Orthodontics", "Endodontics", "Prosthodontics", "PediatricDentistry"],
    availableService: [
      "Root Canal Treatment",
      "Dental Implants",
      "Braces",
      "Clear Aligners",
      "Teeth Cleaning",
      "Tooth Extraction",
      "Dentures",
      "Teeth Whitening",
      "Dental Crowns",
      "Dental Fillings",
      "Kids Dentistry",
    ].map((name) => ({ "@type": "MedicalProcedure", name })),
    founder: { "@id": absoluteUrl("/doctors#dr-saurabh-gaur") },
    employee: doctors.map((d) => ({ "@id": absoluteUrl(`/doctors#${d.slug}`) })),
    sameAs: [site.googleBusinessUrl, site.social.facebook, site.social.instagram],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function doctorsSchema() {
  return doctors.map((d) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(`/doctors#${d.slug}`),
    name: d.name,
    jobTitle: d.role,
    honorificSuffix: d.qualifications,
    image: absoluteUrl(d.portrait.src),
    worksFor: { "@id": ORG_ID },
    knowsAbout: d.expertise,
    description: d.bio[0],
  }));
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function treatmentSchema(t: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url: absoluteUrl(`/treatments/${t.slug}`),
    name: t.headline,
    description: t.metaDescription,
    about: {
      "@type": "MedicalProcedure",
      name: t.name,
      description: t.short,
      howPerformed: t.steps.map((s) => `${s.title}: ${s.text}`).join(" "),
    },
    provider: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}
