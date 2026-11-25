import type { StaticImageData } from "next/image";
import saurabh from "@/images/doctors/dr-saurabh-gaur.webp";
import saurabhClinic from "@/images/doctors/dr-saurabh-gaur-clinic.webp";
import avantika from "@/images/doctors/dr-avantika-gaur.webp";
import avantikaClinic from "@/images/doctors/dr-avantika-gaur-clinic.webp";
import gaurav from "@/images/doctors/dr-gaurav-arya.webp";
import gauravClinic from "@/images/doctors/dr-gaurav-arya-clinic.webp";

export type Doctor = {
  slug: string;
  name: string;
  qualifications: string;
  role: string;
  experience: string;
  portrait: StaticImageData;
  clinicPhoto: StaticImageData;
  highlights: string[];
  /** Set to false to hide the "Book with …" button on the doctors page. */
  bookable?: boolean;
  expertise: string[];
  bio: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-saurabh-gaur",
    name: "Dr. Saurabh Gaur",
    qualifications: "BDS, MIDA",
    role: "Founder & Chief Dental Surgeon",
    experience: "Practising since 2014",
    portrait: saurabh,
    clinicPhoto: saurabhClinic,
    highlights: [
      "Certified Rotary Endodontist",
      "Certified Implantologist",
      "Ex-Surgeon, ECHS Panel Dental Hospital (Kosli)",
    ],
    expertise: ["Root canal treatment", "Dental implants", "Crowns & bridges", "Full-mouth rehabilitation", "Smile design"],
    bio: [
      "Dr. Saurabh Gaur is a dedicated dental surgeon committed to delivering high-quality oral care with compassion and precision. Practising since 2014, he has earned the trust of thousands of patients in Behror and the surrounding region.",
      "His work ranges from preventive dentistry to advanced procedures such as rotary root canals, dental implants, smile designing and full-mouth rehabilitation. With a patient-first approach, he makes sure every treatment is comfortable, hygienic and planned around the individual.",
      "Beyond the clinic, Dr. Gaur is an active social worker. He regularly organises free dental check-up camps in schools and villages, with a special focus on underprivileged families, and works to spread awareness about the importance of oral health.",
    ],
  },
  {
    slug: "dr-avantika-gaur",
    name: "Dr. Avantika Gaur",
    qualifications: "BDS, MIDA",
    role: "Co-Founder & Dental Surgeon",
    experience: "11+ years of experience",
    portrait: avantika,
    clinicPhoto: avantikaClinic,
    highlights: ["11+ years of clinical experience", "Gentle care for children and anxious patients", "Cosmetic & preventive dentistry"],
    expertise: ["Preventive care", "Cosmetic dentistry", "Root canal treatment", "Smile makeovers", "Kids dentistry"],
    bio: [
      "Dr. Avantika Gaur is a skilled and compassionate dental surgeon with over 11 years of experience. Known for her gentle approach and meticulous attention to detail, she has treated a wide range of dental conditions for patients across Behror and nearby areas.",
      "Her expertise covers preventive care, cosmetic dentistry, root canal treatment, smile makeovers and full-mouth rehabilitation. She believes in a patient-centric philosophy — every treatment is comfortable, hygienic and tailored to the person in the chair.",
      "Her warm, approachable manner makes dental visits stress-free for patients of every age, especially children and first-time visitors.",
    ],
  },
  {
    slug: "dr-gaurav-arya",
    bookable: false,
    name: "Dr. Gaurav Arya",
    qualifications: "BDS, MDS (Orthodontics)",
    role: "Consultant Orthodontist",
    experience: "15+ years of experience",
    portrait: gaurav,
    clinicPhoto: gauravClinic,
    highlights: [
      "Assistant Professor, Dept. of Orthodontics, NIMS University, Jaipur",
      "Life Member, Indian Orthodontic Society",
      "15+ years of experience",
    ],
    expertise: ["Metal & ceramic braces", "Clear aligners", "Growth modulation in children", "Bite correction"],
    bio: [
      "Dr. Gaurav Arya is an orthodontist with a strong academic and clinical background in orthodontics and dentofacial orthopaedics. He is a Life Member of the Indian Orthodontic Society.",
      "He is known for precise correction of dental and jaw irregularities, offering braces, clear aligners and growth modulation therapy for children. As an Assistant Professor at NIMS University, Jaipur, he helps shape future dental professionals while staying committed to patient-focused care.",
      "With a deep understanding of facial aesthetics and bite (occlusion), Dr. Arya delivers results that improve both function and confidence.",
    ],
  },
];
