import type { StaticImageData } from "next/image";
import xray1 from "@/images/xrays/xray-1.webp";
import zirconia from "@/images/cases/zirconia-missing-tooth.webp";
import zirconiaCap from "@/images/cases/zirconia-capping.webp";
import smile1 from "@/images/cases/smile-1.webp";
import smile12 from "@/images/cases/smile-12.webp";
import impacted from "@/images/cases/impacted-molar-removal.webp";
import smile2 from "@/images/cases/smile-2.webp";
import smile9 from "@/images/cases/smile-9.webp";
import smile3 from "@/images/cases/smile-3.webp";
import kids1 from "@/images/kids/kids-1.webp";
import smile6 from "@/images/cases/smile-6.webp";

export type IconName =
  | "root"
  | "implant"
  | "braces"
  | "aligner"
  | "sparkle"
  | "clean"
  | "extract"
  | "denture"
  | "whiten"
  | "crown"
  | "filling"
  | "kids";

export type Treatment = {
  slug: string;
  name: string;
  /** Keyword-focused H1 / title, e.g. "Root Canal Treatment in Behror" */
  headline: string;
  metaDescription: string;
  short: string;
  icon: IconName;
  image?: { src: StaticImageData; alt: string };
  intro: string[];
  signs: string[];
  steps: { title: string; text: string }[];
  benefits: string[];
  aftercare: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment (RCT)",
    headline: "Painless Root Canal Treatment in Behror",
    metaDescription:
      "Painless single & multi-sitting root canal treatment (RCT) in Behror by a certified rotary endodontist. Save your natural tooth at Dr. Gaur Dental Hospital.",
    short: "Save an infected tooth with gentle, rotary-instrument root canal treatment.",
    icon: "root",
    image: { src: xray1, alt: "Dental X-rays showing a tooth before and after root canal treatment" },
    intro: [
      "A root canal treatment removes infected or inflamed pulp from inside a tooth, cleans and disinfects the canals, and seals them — relieving pain and saving a tooth that might otherwise need to be extracted.",
      "Dr. Saurabh Gaur is a certified rotary endodontist. Rotary instruments, good local anaesthesia and digital X-rays make the procedure faster, more precise and far more comfortable than most people expect.",
    ],
    signs: [
      "Severe or throbbing toothache, especially at night",
      "Lingering sensitivity to hot or cold",
      "Swelling or a pimple-like bump on the gum",
      "A tooth that has darkened in colour",
      "Pain while chewing or biting",
      "A deep cavity or a cracked tooth",
    ],
    steps: [
      { title: "Diagnosis & X-ray", text: "We examine the tooth and take a digital X-ray to see the roots and extent of infection." },
      { title: "Local anaesthesia", text: "The area is fully numbed so you stay comfortable throughout." },
      { title: "Cleaning the canals", text: "Infected pulp is removed and canals are shaped and disinfected with rotary instruments." },
      { title: "Sealing", text: "Canals are filled and sealed to stop bacteria from re-entering." },
      { title: "Crown (cap)", text: "A crown is usually recommended to protect the treated tooth and restore full chewing strength." },
    ],
    benefits: [
      "Relieves tooth pain at its source",
      "Keeps your natural tooth — no gap, no implant needed",
      "Prevents infection from spreading to the jaw",
      "Restores normal biting and chewing",
    ],
    aftercare: [
      "Avoid chewing hard food on the treated side until the final filling or crown is placed",
      "Mild soreness for a day or two is normal and settles with prescribed medicine",
      "Brush and floss as usual, and attend your crown appointment",
    ],
    faqs: [
      {
        q: "Is root canal treatment painful?",
        a: "With modern anaesthesia and rotary instruments, most patients feel little more than they would with a filling. The procedure is done to relieve pain, not cause it.",
      },
      {
        q: "How many sittings does an RCT take?",
        a: "Many root canals are completed in one or two sittings. Teeth with heavy infection or curved roots may need an extra visit. We will tell you the plan after the X-ray.",
      },
      {
        q: "Do I need a crown after a root canal?",
        a: "Back teeth almost always need a crown, because a root-canal-treated tooth becomes more brittle. A crown protects it from cracking.",
      },
    ],
    related: ["dental-crowns-bridges", "dental-fillings", "tooth-extraction"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    headline: "Dental Implants in Behror",
    metaDescription:
      "Replace missing teeth with dental implants in Behror. Natural-looking, long-lasting implant crowns placed by a certified implantologist at Dr. Gaur Dental Hospital.",
    short: "Permanent, natural-looking replacement for missing teeth.",
    icon: "implant",
    image: { src: zirconia, alt: "Before and after photos of a missing front tooth replaced with a zirconia crown" },
    intro: [
      "A dental implant is a small titanium post placed in the jawbone that acts like a natural tooth root. Once it heals, a crown is fixed on top — giving you a tooth that looks, feels and works like your own.",
      "Implants don't depend on neighbouring teeth for support, so healthy teeth don't need to be cut down as they would for a bridge. Our certified implantologist plans each implant carefully using X-rays.",
    ],
    signs: [
      "One or more missing teeth",
      "Loose or uncomfortable dentures",
      "Difficulty chewing because of gaps",
      "A tooth that cannot be saved and must be removed",
    ],
    steps: [
      { title: "Consultation & X-ray", text: "We check your gums, bone and overall health to confirm you are a good candidate." },
      { title: "Implant placement", text: "Under local anaesthesia the implant is placed in the jawbone in a short procedure." },
      { title: "Healing", text: "Over the following weeks the bone bonds with the implant to make it firm." },
      { title: "Crown fitting", text: "A custom crown, matched to your other teeth, is fixed on the implant." },
    ],
    benefits: [
      "Looks and feels like a natural tooth",
      "Protects the jawbone from shrinking",
      "No cutting of neighbouring healthy teeth",
      "Can last many years with good care",
    ],
    aftercare: [
      "Eat soft food for the first few days after placement",
      "Keep the area clean and follow the rinsing instructions given",
      "Avoid smoking — it slows healing and increases the risk of failure",
      "Come for regular check-ups and cleanings",
    ],
    faqs: [
      {
        q: "Am I too old for dental implants?",
        a: "Age alone is rarely a barrier. What matters is your general health and the amount of jawbone available, which we assess during consultation.",
      },
      {
        q: "How long does the whole implant process take?",
        a: "Typically a few months from placement to the final crown, because the bone needs time to bond with the implant. Your exact timeline depends on your bone and gum health.",
      },
      {
        q: "Implant or bridge — which is better?",
        a: "Implants avoid cutting the neighbouring teeth and protect the bone; bridges are quicker and suit some situations better. We will explain both options for your case.",
      },
    ],
    related: ["dental-crowns-bridges", "dentures", "tooth-extraction"],
  },
  {
    slug: "braces",
    name: "Braces (Orthodontics)",
    headline: "Braces & Orthodontic Treatment in Behror",
    metaDescription:
      "Metal and ceramic braces in Behror by an MDS orthodontist. Straighten crooked teeth, close gaps and correct your bite at Dr. Gaur Dental Hospital.",
    short: "Straighten teeth and correct bite problems with metal or ceramic braces.",
    icon: "braces",
    image: { src: smile3, alt: "X-ray and photo of crowded teeth before orthodontic treatment" },
    intro: [
      "Braces gently move teeth into the right position over time. They correct crowded or crooked teeth, gaps, protruding front teeth and bite problems — improving both your smile and how your teeth work together.",
      "Orthodontic treatment at our clinic is planned by Dr. Gaurav Arya, MDS (Orthodontics), Assistant Professor at NIMS University, Jaipur.",
    ],
    signs: [
      "Crowded, overlapping or crooked teeth",
      "Gaps between teeth",
      "Upper teeth sticking out (overjet)",
      "Deep bite, open bite, underbite or crossbite",
      "Difficulty cleaning teeth because of misalignment",
    ],
    steps: [
      { title: "Orthodontic assessment", text: "Photos, X-rays and an examination help us understand your bite and jaw growth." },
      { title: "Treatment plan", text: "We explain the type of braces, expected duration and what to expect at each stage." },
      { title: "Fitting braces", text: "Brackets are bonded to the teeth and connected with a wire — no injections needed." },
      { title: "Regular adjustments", text: "Short visits every few weeks to adjust the wire and track progress." },
      { title: "Retainers", text: "After braces come off, retainers keep your teeth in their new position." },
    ],
    benefits: [
      "Straighter, more confident smile",
      "Better bite and chewing",
      "Teeth that are easier to clean",
      "Reduced uneven wear on teeth",
    ],
    aftercare: [
      "Avoid hard and sticky food that can break brackets",
      "Brush carefully around every bracket after meals",
      "Wear elastics or retainers exactly as instructed",
    ],
    faqs: [
      {
        q: "What is the right age for braces?",
        a: "An orthodontic check around age 7–9 is useful to catch jaw growth problems early. Braces themselves are often done in the teenage years, but adults can have braces too.",
      },
      {
        q: "How long will I need to wear braces?",
        a: "Most cases take between about one and two years, depending on how much correction is needed.",
      },
      {
        q: "Do braces hurt?",
        a: "Fitting braces is painless. Teeth may feel sore for a few days after each adjustment, which usually settles with soft food.",
      },
    ],
    related: ["clear-aligners", "kids-dentistry", "smile-makeover"],
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    headline: "Clear Aligners (Invisible Braces) in Behror",
    metaDescription:
      "Straighten teeth discreetly with clear, removable aligners in Behror. Planned by an MDS orthodontist at Dr. Gaur Dental Hospital.",
    short: "Transparent, removable trays that straighten teeth discreetly.",
    icon: "aligner",
    intro: [
      "Clear aligners are a series of transparent, custom-made trays that gradually move your teeth into place. They are nearly invisible and can be removed to eat, brush and floss.",
      "Aligner cases at our clinic are assessed and planned by our orthodontist, so you get the convenience of aligners with specialist supervision.",
    ],
    signs: [
      "Mild to moderate crowding or spacing",
      "Teeth that have shifted after earlier braces",
      "Adults who prefer a discreet option",
    ],
    steps: [
      { title: "Consultation", text: "We check whether aligners suit your case or whether braces would work better." },
      { title: "Scans & planning", text: "Impressions or scans are used to plan each stage of tooth movement." },
      { title: "Wearing aligners", text: "You wear each set for about 20–22 hours a day and switch to the next set as advised." },
      { title: "Retainers", text: "Once the result is reached, retainers keep teeth stable." },
    ],
    benefits: ["Nearly invisible", "Removable for eating and cleaning", "No wires or brackets", "Fewer emergency visits"],
    aftercare: [
      "Wear aligners for the recommended hours every day",
      "Remove them to eat and drink anything other than water",
      "Brush teeth before putting aligners back in",
    ],
    faqs: [
      {
        q: "Are aligners as effective as braces?",
        a: "For many mild to moderate cases, yes. Complex bite problems may still be better treated with braces — our orthodontist will advise you honestly.",
      },
      {
        q: "Can I remove aligners whenever I want?",
        a: "You can remove them to eat and clean, but they only work when worn — usually 20–22 hours a day.",
      },
    ],
    related: ["braces", "smile-makeover", "teeth-whitening"],
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    headline: "Smile Makeover & Cosmetic Dentistry in Behror",
    metaDescription:
      "Get a confident new smile with a customised smile makeover in Behror — veneers, crowns, whitening and gap closure at Dr. Gaur Dental Hospital.",
    short: "A customised plan combining treatments to give you the smile you want.",
    icon: "sparkle",
    image: { src: smile1, alt: "Before and after photos of a patient's smile makeover" },
    intro: [
      "A smile makeover combines cosmetic and restorative treatments — such as crowns, veneers, whitening, tooth-coloured fillings and gap closure — into one plan designed around your face and goals.",
      "We start by listening to what you'd like to change, then design a plan that balances appearance, function and long-term health.",
    ],
    signs: [
      "Stained, chipped or broken front teeth",
      "Gaps or uneven teeth",
      "Old, discoloured fillings or crowns",
      "Missing front teeth",
    ],
    steps: [
      { title: "Smile consultation", text: "We discuss what you want to change and examine your teeth and gums." },
      { title: "Custom plan", text: "We recommend a combination of treatments and explain the sequence and cost." },
      { title: "Treatment", text: "Procedures are carried out in stages, usually starting with any health issues first." },
      { title: "Final result", text: "Your new smile is polished and reviewed, with tips to keep it looking its best." },
    ],
    benefits: ["A natural-looking, balanced smile", "Improved confidence", "Better function and comfort", "A plan tailored to you"],
    aftercare: ["Maintain good brushing and flossing", "Limit tea, coffee and tobacco that stain teeth", "Visit for regular check-ups"],
    faqs: [
      {
        q: "How long does a smile makeover take?",
        a: "Simple makeovers can be done in a few visits; plans involving implants or braces take longer. You'll get a clear timeline before we start.",
      },
      {
        q: "Will my new teeth look natural?",
        a: "Yes — shades and shapes are matched to your face and surrounding teeth so the result looks like your own smile, only healthier.",
      },
    ],
    related: ["teeth-whitening", "dental-crowns-bridges", "clear-aligners"],
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning & Scaling",
    headline: "Teeth Cleaning & Scaling in Behror",
    metaDescription:
      "Professional teeth cleaning, scaling and polishing in Behror to remove tartar and stains, treat bleeding gums and freshen breath. Dr. Gaur Dental Hospital.",
    short: "Remove tartar and stains for healthier gums in a single sitting.",
    icon: "clean",
    image: { src: smile12, alt: "Before and after photos of teeth cleaning and stain removal" },
    intro: [
      "Even with good brushing, hard deposits called tartar (calculus) build up on teeth over time. Professional scaling removes tartar and stains that a toothbrush can't, protecting your gums and keeping your breath fresh.",
      "Cleaning is usually completed in a single sitting with an ultrasonic scaler, followed by polishing.",
    ],
    signs: [
      "Bleeding gums while brushing",
      "Bad breath that doesn't go away",
      "Yellow or brown deposits near the gums",
      "Stains from tea, coffee, gutkha or tobacco",
      "Swollen or tender gums",
    ],
    steps: [
      { title: "Check-up", text: "We examine your teeth and gums for tartar, gum disease and cavities." },
      { title: "Ultrasonic scaling", text: "Tartar and deposits are gently removed from teeth and along the gumline." },
      { title: "Polishing", text: "Teeth are polished to remove stains and leave a smooth surface." },
      { title: "Home-care advice", text: "We show you how to brush and clean between teeth effectively." },
    ],
    benefits: ["Healthier gums, less bleeding", "Fresher breath", "Brighter, cleaner teeth", "Lower risk of gum disease and tooth loss"],
    aftercare: [
      "Mild sensitivity for a day or two is normal",
      "Brush twice daily with a soft brush",
      "Have a cleaning every six months",
    ],
    faqs: [
      {
        q: "Does scaling damage the enamel or loosen teeth?",
        a: "No. Scaling only removes deposits. Teeth may feel slightly different because tartar that was filling gaps has been removed, but the gums become healthier and tighter afterwards.",
      },
      {
        q: "How often should I get my teeth cleaned?",
        a: "Every six months is recommended for most people; more often if you have gum disease or heavy staining.",
      },
    ],
    related: ["teeth-whitening", "dental-fillings", "smile-makeover"],
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction & Wisdom Tooth Removal",
    headline: "Painless Tooth Extraction & Wisdom Tooth Removal in Behror",
    metaDescription:
      "Gentle, painless tooth extraction and impacted wisdom tooth surgery in Behror. Experienced dentists at Dr. Gaur Dental Hospital.",
    short: "Gentle removal of damaged or impacted teeth, including wisdom teeth.",
    icon: "extract",
    image: { src: impacted, alt: "Removal of a horizontally impacted lower molar" },
    intro: [
      "Sometimes a tooth is too damaged to save, or a wisdom tooth is stuck (impacted) and causing pain, swelling or infection. In these cases a careful extraction is the best option.",
      "We use effective local anaesthesia and gentle techniques — from simple extractions to surgical removal of horizontally impacted wisdom teeth — to keep you comfortable and help you heal quickly.",
    ],
    signs: [
      "A badly broken or decayed tooth that cannot be restored",
      "Pain and swelling at the back of the jaw from a wisdom tooth",
      "Very loose teeth from advanced gum disease",
      "Teeth that need removal before braces",
    ],
    steps: [
      { title: "X-ray & assessment", text: "We check the tooth's roots and position before planning the extraction." },
      { title: "Local anaesthesia", text: "The area is fully numbed — you feel pressure, not pain." },
      { title: "Gentle removal", text: "The tooth is removed carefully; impacted teeth may need a minor surgical procedure." },
      { title: "Healing", text: "We place gauze, give clear aftercare instructions and medicines if needed." },
    ],
    benefits: ["Relief from pain and infection", "Protects neighbouring teeth", "Quick, comfortable procedure", "Clear plan to replace the tooth if needed"],
    aftercare: [
      "Bite on the gauze for 30–45 minutes",
      "Don't spit, rinse forcefully or use a straw for 24 hours",
      "Eat soft, cool food on the first day",
      "Avoid smoking and gutkha while the area heals",
    ],
    faqs: [
      {
        q: "Will tooth extraction hurt?",
        a: "The area is numbed before we begin, so you should only feel pressure. Some soreness after the anaesthetic wears off is normal and is managed with medicine.",
      },
      {
        q: "Do all wisdom teeth need to be removed?",
        a: "No. Wisdom teeth that are healthy and fully erupted can stay. We recommend removal only when they cause pain, infection, or damage to nearby teeth.",
      },
      {
        q: "Should I replace an extracted tooth?",
        a: "Usually yes, especially for back teeth, to prevent neighbouring teeth from shifting. Implants, bridges and dentures are all options.",
      },
    ],
    related: ["dental-implants", "dental-crowns-bridges", "root-canal-treatment"],
  },
  {
    slug: "dentures",
    name: "Dentures",
    headline: "Complete & Partial Dentures in Behror",
    metaDescription:
      "Comfortable, custom-fit complete and partial dentures in Behror to restore missing teeth, chewing and confidence. Dr. Gaur Dental Hospital.",
    short: "Custom-fit removable teeth to restore chewing and your smile.",
    icon: "denture",
    image: { src: smile2, alt: "Before and after photos of an elderly patient's missing teeth being replaced" },
    intro: [
      "Dentures are removable replacements for missing teeth. Complete dentures replace all the teeth in a jaw, while partial dentures fill gaps when some natural teeth remain.",
      "Each denture is custom-made from impressions of your mouth so it fits comfortably and looks natural.",
    ],
    signs: ["Several or all teeth missing", "Difficulty chewing and speaking", "Sunken look of the cheeks and lips"],
    steps: [
      { title: "Examination", text: "We check your gums and remaining teeth and discuss options, including implant-supported dentures." },
      { title: "Impressions", text: "Accurate impressions and bite records are taken." },
      { title: "Trial", text: "You try the teeth in wax so we can check fit, bite and appearance." },
      { title: "Delivery & adjustment", text: "The final denture is fitted, and we adjust any sore spots at follow-up." },
    ],
    benefits: ["Eat and speak more comfortably", "Restores facial support", "Natural-looking teeth", "Affordable option for multiple missing teeth"],
    aftercare: [
      "Remove and clean dentures daily",
      "Take them out at night to rest your gums",
      "Visit us if they become loose or cause sore spots",
    ],
    faqs: [
      {
        q: "How long does it take to get used to dentures?",
        a: "Most people adapt within a few weeks. Speaking and eating get easier with practice, and we adjust the denture if anything feels uncomfortable.",
      },
      {
        q: "Can dentures be fixed instead of removable?",
        a: "Yes — implant-supported dentures can be clipped or fixed in place for much better stability. Ask us whether you're a suitable candidate.",
      },
    ],
    related: ["dental-implants", "dental-crowns-bridges", "tooth-extraction"],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    headline: "Teeth Whitening in Behror",
    metaDescription:
      "Safe, professional teeth whitening in Behror to brighten stained or yellow teeth. Dentist-supervised whitening at Dr. Gaur Dental Hospital.",
    short: "Safely brighten yellow or stained teeth under dental supervision.",
    icon: "whiten",
    image: { src: smile9, alt: "Before and after photos of discoloured front teeth" },
    intro: [
      "Professional teeth whitening uses dentist-supervised whitening agents to lighten the natural colour of your teeth — safely and more effectively than over-the-counter products.",
      "We first check your teeth and gums, and clean them if needed, so whitening works evenly and comfortably.",
    ],
    signs: ["Yellowing teeth with age", "Stains from tea, coffee or tobacco", "Wanting a brighter smile for an occasion"],
    steps: [
      { title: "Check-up & cleaning", text: "We make sure teeth and gums are healthy and remove surface deposits." },
      { title: "Shade check", text: "Your current shade is recorded so you can see the difference." },
      { title: "Whitening", text: "Gums are protected and the whitening agent is applied in controlled sessions." },
      { title: "Review", text: "We compare shades and advise you on keeping teeth bright." },
    ],
    benefits: ["Noticeably brighter smile", "Safe, supervised procedure", "Quick results", "Boost in confidence"],
    aftercare: [
      "Avoid tea, coffee, colas and tobacco for 48 hours",
      "Temporary sensitivity is normal and settles quickly",
      "Use a soft brush and sensitivity toothpaste if advised",
    ],
    faqs: [
      {
        q: "Is teeth whitening safe for enamel?",
        a: "When done under dental supervision with proper products, whitening is safe. Temporary sensitivity can happen and usually settles in a few days.",
      },
      {
        q: "Will whitening change the colour of crowns or fillings?",
        a: "No — whitening only lightens natural teeth. Old crowns or fillings may need replacing afterwards to match.",
      },
    ],
    related: ["teeth-cleaning", "smile-makeover", "dental-crowns-bridges"],
  },
  {
    slug: "dental-crowns-bridges",
    name: "Crowns & Bridges",
    headline: "Dental Crowns & Bridges (Zirconia Caps) in Behror",
    metaDescription:
      "Natural-looking zirconia and ceramic dental crowns (caps) and bridges in Behror to restore broken, root-canal-treated or missing teeth. Dr. Gaur Dental Hospital.",
    short: "Strong, natural-looking caps and bridges for damaged or missing teeth.",
    icon: "crown",
    image: { src: zirconiaCap, alt: "Before and after photos of zirconia capping on front teeth" },
    intro: [
      "A crown (cap) covers and protects a damaged tooth, restoring its strength and appearance. A bridge uses crowns on neighbouring teeth to hold a replacement tooth and fill a gap.",
      "We offer metal-free zirconia and ceramic crowns that are strong and closely match the colour of your natural teeth.",
    ],
    signs: [
      "A tooth that has had a root canal",
      "Large, broken or cracked fillings",
      "Badly worn or chipped teeth",
      "One or two missing teeth (bridge)",
    ],
    steps: [
      { title: "Tooth preparation", text: "The tooth is numbed and shaped so the crown fits precisely." },
      { title: "Impression & shade", text: "An accurate impression is taken and the shade matched to your teeth." },
      { title: "Temporary crown", text: "A temporary cap protects the tooth while the final crown is made." },
      { title: "Final fitting", text: "The crown or bridge is checked for fit and bite, then cemented in place." },
    ],
    benefits: ["Protects weak teeth from breaking", "Natural appearance with zirconia", "Restores full chewing", "Long-lasting with good care"],
    aftercare: [
      "Avoid very hard or sticky food on a new crown for 24 hours",
      "Clean under bridges with floss threaders or interdental brushes",
      "Have regular check-ups to monitor the gums around crowns",
    ],
    faqs: [
      {
        q: "What is the difference between zirconia and metal-ceramic crowns?",
        a: "Zirconia crowns are metal-free, very strong and more natural-looking, with no grey line at the gum. Metal-ceramic crowns are a reliable, more economical option.",
      },
      {
        q: "How long do crowns last?",
        a: "With good oral hygiene and regular check-ups, crowns commonly last many years.",
      },
    ],
    related: ["root-canal-treatment", "dental-implants", "smile-makeover"],
  },
  {
    slug: "dental-fillings",
    name: "Tooth-Coloured Fillings",
    headline: "Tooth-Coloured Dental Fillings in Behror",
    metaDescription:
      "Treat cavities with durable, tooth-coloured composite fillings in Behror. Early, painless cavity treatment at Dr. Gaur Dental Hospital.",
    short: "Repair cavities with durable fillings that match your teeth.",
    icon: "filling",
    image: { src: smile6, alt: "Before and after photos of restored front teeth" },
    intro: [
      "A filling repairs a tooth damaged by decay. We remove the decayed part and rebuild the tooth with a tooth-coloured composite material that bonds to it and blends in naturally.",
      "Treating cavities early is quick and comfortable — and prevents the need for a root canal later.",
    ],
    signs: ["Sensitivity to sweets, hot or cold", "Visible holes or dark spots on teeth", "Food getting stuck between teeth", "Chipped edges on front teeth"],
    steps: [
      { title: "Examination", text: "We locate cavities, using X-rays where needed." },
      { title: "Removing decay", text: "Decayed tooth structure is removed gently, with anaesthesia if required." },
      { title: "Filling", text: "Composite is applied in layers and hardened with a curing light." },
      { title: "Shaping & polishing", text: "The filling is shaped to your bite and polished smooth." },
    ],
    benefits: ["Stops decay from spreading", "Matches natural tooth colour", "Usually done in one visit", "Preserves more natural tooth"],
    aftercare: ["Normal eating is fine once the numbness wears off", "Brush twice daily and reduce sugary snacks", "Visit every six months to catch new cavities early"],
    faqs: [
      {
        q: "Are tooth-coloured fillings strong enough for back teeth?",
        a: "Modern composite materials are strong enough for most back-tooth fillings. Very large cavities may be better restored with a crown.",
      },
      {
        q: "Does getting a filling hurt?",
        a: "Small fillings often need no injection at all. For deeper cavities we numb the tooth so you stay comfortable.",
      },
    ],
    related: ["root-canal-treatment", "teeth-cleaning", "kids-dentistry"],
  },
  {
    slug: "kids-dentistry",
    name: "Kids Dentistry",
    headline: "Children's Dentist in Behror (Pediatric Dentistry)",
    metaDescription:
      "Friendly children's dentistry in Behror — check-ups, painless extractions, tooth-coloured fillings, fluoride and early orthodontic care for kids at Dr. Gaur Dental Hospital.",
    short: "Gentle, fun dental visits that build healthy habits for life.",
    icon: "kids",
    image: { src: kids1, alt: "Happy child at the dental clinic" },
    intro: [
      "Children need a gentle, patient approach. From the first tooth to the teenage years, we focus on building trust, teaching good habits and preventing problems before they start.",
      "Our team takes time to explain each step in a child-friendly way, so visits are calm — and even fun.",
    ],
    signs: [
      "Your child's first dental visit (by age 1 or when the first tooth appears)",
      "Black spots, cavities or toothache in milk teeth",
      "Crooked teeth or thumb-sucking habits",
      "A tooth injury from a fall or sport",
    ],
    steps: [
      { title: "Friendly introduction", text: "We let your child get comfortable with the chair and instruments first." },
      { title: "Gentle check-up", text: "We check teeth, gums and jaw growth, and spot cavities early." },
      { title: "Treatment if needed", text: "Tooth-coloured fillings, pulp therapy or painless extractions for milk teeth." },
      { title: "Prevention", text: "Brushing guidance, diet tips and early orthodontic advice for parents." },
    ],
    benefits: [
      "Prevents pain and infection in milk teeth",
      "Protects the permanent teeth growing underneath",
      "Builds positive feelings about the dentist",
      "Early detection of bite and alignment problems",
    ],
    aftercare: ["Brush twice daily with a pea-sized amount of fluoride toothpaste", "Limit sweets and sticky snacks between meals", "Check-ups every six months"],
    faqs: [
      {
        q: "Do milk teeth really need treatment if they will fall out?",
        a: "Yes. Milk teeth hold space for permanent teeth and help children eat and speak. Untreated decay causes pain and infection and can harm the permanent tooth underneath.",
      },
      {
        q: "When should my child first see a dentist?",
        a: "Ideally by their first birthday or when the first tooth appears — early visits make later ones much easier.",
      },
      {
        q: "My child is scared of the dentist. What do you do?",
        a: "We go slowly, explain everything in simple words, and never rush. Parents are welcome to stay with their child.",
      },
    ],
    related: ["dental-fillings", "braces", "tooth-extraction"],
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);

