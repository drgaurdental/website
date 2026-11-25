/**
 * Single source of truth for clinic details.
 * Edit here and every page, the footer, and the Google structured data update together.
 */
export const site = {
  name: "Dr. Gaur Dental Hospital",
  shortName: "Dr. Gaur Dental",
  nameHindi: "डॉ. गौड़ डेन्टल हॉस्पिटल",
  tagline: "Orthodontic & Implant Centre",
  url: "https://www.drgaurdental.com",
  foundedYear: 2014,
  patientsTreated: "25,000+",

  phone: "+91 97993 53531",
  phoneHref: "tel:+919799353531",
  whatsappNumber: "919799353531",
  email: "drgaurdentalhospital@gmail.com",
  bookingFormUrl: "https://forms.gle/7BfuCBcj34D1bKi4A",

  address: {
    // TODO: add the exact street / landmark (e.g. "Near …, Main Road") — it strongly helps local search.
    street: "",
    locality: "Behror",
    district: "Kotputli-Behror",
    region: "Rajasthan",
    postalCode: "301701",
    country: "IN",
  },
  geo: { lat: 27.8919902, lng: 76.2789896 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=27.8919902,76.2789896",
  mapsEmbedUrl: "https://maps.google.com/maps?q=27.8919902,76.2789896&z=15&output=embed",

  // From the clinic signboard. TODO: confirm which days the clinic is open.
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    label: "Every day",
    slots: [
      { opens: "08:00", closes: "13:00", label: "8:00 AM – 1:00 PM" },
      { opens: "14:00", closes: "20:00", label: "2:00 PM – 8:00 PM" },
    ],
    emergency: "24-hour emergency support — call us",
  },

  areasServed: ["Behror", "Neemrana", "Shahjahanpur", "Kotputli", "Mundawar", "Alwar"],

  social: {
    facebook: "https://www.facebook.com/share/1BsV8FuEVj/",
    instagram: "https://www.instagram.com/drgaurdentalhospital",
  },
} as const;

export const fullAddress = [
  site.address.street,
  site.address.locality,
  `${site.address.district} district`,
  `${site.address.region} ${site.address.postalCode}`,
]
  .filter(Boolean)
  .join(", ");

export function whatsappLink(message = "Hello Dr. Gaur Dental Hospital, I would like to book an appointment.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const yearsSince = (year: number) => new Date().getFullYear() - year;
