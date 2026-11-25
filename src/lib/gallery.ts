import type { StaticImageData } from "next/image";

import s1 from "@/images/cases/smile-1.webp";
import s2 from "@/images/cases/smile-2.webp";
import s3 from "@/images/cases/smile-3.webp";
import s4 from "@/images/cases/smile-4.webp";
import s5 from "@/images/cases/smile-5.webp";
import s6 from "@/images/cases/smile-6.webp";
import s7 from "@/images/cases/smile-7.webp";
import s8 from "@/images/cases/smile-8.webp";
import s9 from "@/images/cases/smile-9.webp";
import s10 from "@/images/cases/smile-10.webp";
import s11 from "@/images/cases/smile-11.webp";
import s12 from "@/images/cases/smile-12.webp";
import s13 from "@/images/cases/smile-13.webp";
import s14 from "@/images/cases/smile-14.webp";
import zMissing from "@/images/cases/zirconia-missing-tooth.webp";
import zCap from "@/images/cases/zirconia-capping.webp";
import impacted from "@/images/cases/impacted-molar-removal.webp";
import horizontal from "@/images/cases/horizontal-molar-removal.webp";
import bridge from "@/images/cases/lower-bridge.webp";
import x1 from "@/images/xrays/xray-1.webp";
import x2 from "@/images/xrays/xray-2.webp";
import x3 from "@/images/xrays/xray-3.webp";

import exterior from "@/images/clinic/exterior-signboard.webp";
import room from "@/images/clinic/treatment-room.webp";
import op1 from "@/images/clinic/operatory-1.webp";
import op2 from "@/images/clinic/operatory-2.webp";
import chair from "@/images/clinic/dental-chair.webp";
import waiting from "@/images/clinic/waiting-area.webp";
import certs from "@/images/clinic/certificates.webp";

import c1 from "@/images/camps/camp-govt-girls-school.webp";
import c2 from "@/images/camps/camp-2.webp";
import c3 from "@/images/camps/camp-3.webp";
import c4 from "@/images/camps/community-event.webp";
import c5 from "@/images/camps/camp-unique-school.webp";

export type GalleryImage = { src: StaticImageData; alt: string; caption: string };

export const smileCases: GalleryImage[] = [
  { src: zMissing, alt: "Before and after: missing front tooth replaced with a zirconia crown", caption: "Zirconia crown for a missing tooth" },
  { src: zCap, alt: "Before and after: front tooth restored with zirconia capping", caption: "Zirconia capping" },
  { src: s1, alt: "Before and after: gap between front teeth closed", caption: "Smile transformation" },
  { src: s2, alt: "Before and after: missing teeth replaced for an elderly patient", caption: "Missing teeth replaced" },
  { src: bridge, alt: "Before and after: lower fixed bridge (FPD) replacing missing teeth", caption: "Lower fixed bridge" },
  { src: s5, alt: "Before and after: front teeth restored", caption: "Front teeth restoration" },
  { src: s7, alt: "Before and after: smile restoration", caption: "Smile restoration" },
  { src: s9, alt: "Before and after: broken front tooth restored", caption: "Broken tooth restored" },
  { src: s10, alt: "Before and after: discoloured upper teeth replaced with ceramic crowns", caption: "Crowns & bridge" },
  { src: s12, alt: "Before and after: stained teeth after cleaning", caption: "Cleaning & stain removal" },
  { src: s4, alt: "Before and after: full-mouth rehabilitation", caption: "Full-mouth rehabilitation" },
  { src: s6, alt: "Before and after: upper and lower teeth restored", caption: "Upper & lower restoration" },
  { src: s8, alt: "Before and after: stained and decayed teeth treated", caption: "Decay treatment" },
  { src: s11, alt: "Before and after: multiple teeth treated", caption: "Multiple teeth treated" },
  { src: s13, alt: "Before and after: lower teeth treatment", caption: "Lower teeth treatment" },
  { src: s14, alt: "Before and after: smile improvement", caption: "Smile improvement" },
  { src: s3, alt: "X-ray and photo of crowded teeth before treatment", caption: "Treatment planning with X-ray" },
];

export const surgicalCases: GalleryImage[] = [
  { src: impacted, alt: "Surgical removal of a horizontally impacted molar", caption: "Impacted molar removal" },
  { src: horizontal, alt: "Disimpaction of a horizontal wisdom tooth", caption: "Wisdom tooth disimpaction" },
  { src: x1, alt: "Dental X-rays before and after treatment", caption: "X-ray: before & after" },
  { src: x2, alt: "Dental X-rays during root canal treatment", caption: "X-ray: root canal" },
  { src: x3, alt: "Dental X-rays of treated teeth", caption: "X-ray: treated teeth" },
];

export const clinicPhotos: GalleryImage[] = [
  { src: exterior, alt: "Dr. Gaur Dental Hospital signboard and entrance in Behror", caption: "Our clinic in Behror" },
  { src: room, alt: "Treatment room with modern dental chair", caption: "Treatment room" },
  { src: op1, alt: "Air-conditioned dental operatory", caption: "Air-conditioned operatory" },
  { src: op2, alt: "Dental operatory with sterilised instruments", caption: "Modern equipment" },
  { src: chair, alt: "Modern dental chair", caption: "Comfortable dental chair" },
  { src: waiting, alt: "Patient waiting area", caption: "Waiting area" },
  { src: certs, alt: "Certificates and awards on the clinic wall", caption: "Certifications & awards" },
];

export const campPhotos: GalleryImage[] = [
  { src: c1, alt: "Free dental check-up camp at Govt. Girls Senior Secondary School, Behror", caption: "Govt. Girls Sr. Sec. School, Behror" },
  { src: c5, alt: "Dental check-up camp at Unique School, Behror", caption: "Unique School, Behror" },
  { src: c2, alt: "Dentists examining patients at a free dental camp", caption: "Free dental camp" },
  { src: c3, alt: "Patients registering at a community dental camp", caption: "Community check-up" },
  { src: c4, alt: "Dr. Gaur Dental Hospital team at a community health event", caption: "Community health event" },
];
