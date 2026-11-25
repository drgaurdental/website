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
    // Keep this identical to the Google Business Profile address.
    street: "Meero Ka Mohalla, Ganpati Nagar, Hamidpur Road",
    landmark: "Near Govt. Hospital & Dr Lal PathLabs",
    locality: "Behror",
    district: "Kotputli-Behror",
    region: "Rajasthan",
    postalCode: "301701",
    country: "IN",
  },
  // Coordinates and place ID (cid) taken from the clinic's Google Business Profile.
  geo: { lat: 27.8919874, lng: 76.2790713 },
  googleBusinessUrl: "https://maps.google.com/?cid=10157230845535850648",
  mapsUrl: "https://maps.google.com/?cid=10157230845535850648",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Dr+Gaur+Dental+Hospital,+Behror&ll=27.8919874,76.2790713&z=16&output=embed",

  // Confirmed by the clinic: open all 7 days, 24-hour emergency service.
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
  site.address.landmark,
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
