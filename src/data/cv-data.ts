export type Lang = "en" | "de";

export interface ContactItem {
  type: "email" | "phone" | "telegram" | "instagram" | "whatsapp";
  label: string;
  href: string;
}

export interface WorkEntry {
  period: { en: string; de: string };
  role: { en: string; de: string };
  company: string;
  location: string;
  description: { en: string; de: string };
  tags: string[];
}

export interface EducationEntry {
  period: { en: string; de: string };
  degree: { en: string; de: string };
  institution: string;
  location: string;
  description: { en: string; de: string };
}

export interface ProjectItem {
  id: number;
  title: string;
  category: { en: string; de: string };
  description: { en: string; de: string };
  tags: string[];
  year: string;
  imagePrompt: string;
}

export const personalData = {
  name: "Ilia Kuznetsov",
  firstName: "Ilia",
  lastName: "Kuznetsov",
  title: {
    en: "UI/UX Designer & Digital Project Manager",
    de: "UI/UX Designer & Digitaler Projektmanager",
  },
  tagline: {
    en: "Crafting purposeful digital experiences at the intersection of design thinking and strategic delivery.",
    de: "Zweckorientierte digitale Erlebnisse an der Schnittstelle von Design-Thinking und strategischer Umsetzung.",
  },
  location: "Zurich, Switzerland",
  availability: {
    en: "Available for freelance & full-time",
    de: "Verfügbar für Freelance & Vollzeit",
  },
};

export const contacts: ContactItem[] = [
  {
    type: "email",
    label: "hello@iliakuznetsov.com",
    href: "mailto:hello@iliakuznetsov.com",
  },
  {
    type: "phone",
    label: "+41 79 000 00 00",
    href: "tel:+41790000000",
  },
  {
    type: "telegram",
    label: "@iliakuznetsov",
    href: "https://t.me/iliakuznetsov",
  },
  {
    type: "instagram",
    label: "@ilia.kzntsv",
    href: "https://instagram.com/ilia.kzntsv",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/41790000000",
  },
];

export const navLinks = {
  en: ["Experience", "Education", "Projects", "Contact"],
  de: ["Erfahrung", "Ausbildung", "Projekte", "Kontakt"],
};

export const sectionTitles = {
  experience: { en: "Work Experience", de: "Berufserfahrung" },
  education: { en: "Education", de: "Ausbildung" },
  projects: { en: "Selected Projects", de: "Ausgewählte Projekte" },
  contact: { en: "Get In Touch", de: "Kontakt" },
};

export const workExperience: WorkEntry[] = [
  {
    period: { en: "2023 – Present", de: "2023 – Heute" },
    role: { en: "Senior UI/UX Designer", de: "Senior UI/UX Designer" },
    company: "Accenture Switzerland",
    location: "Zurich, CH",
    description: {
      en: "Leading UX strategy and design systems for enterprise-scale digital transformation projects. Facilitated design sprints with cross-functional teams of 15+ members.",
      de: "Leitung der UX-Strategie und Design-Systeme für digitale Transformationsprojekte in Unternehmensgröße. Durchführung von Design-Sprints mit funktionsübergreifenden Teams.",
    },
    tags: ["Figma", "Design Systems", "Agile", "Stakeholder Management"],
  },
  {
    period: { en: "2022 – 2023", de: "2022 – 2023" },
    role: { en: "Digital Project Manager", de: "Digitaler Projektmanager" },
    company: "SBB CFF FFS",
    location: "Bern, CH",
    description: {
      en: "Managed the digital ticketing platform overhaul serving 1.3M daily users. Coordinated delivery roadmaps with engineering, product, and marketing departments.",
      de: "Management der digitalen Ticketing-Plattform für 1,3 Mio. tägliche Nutzer. Koordination von Roadmaps mit Engineering, Produkt und Marketing.",
    },
    tags: ["Project Management", "Scrum", "JIRA", "Stakeholders"],
  },
  {
    period: { en: "2021 – 2022", de: "2021 – 2022" },
    role: { en: "Product Designer", de: "Produktdesigner" },
    company: "Zurich Insurance Group",
    location: "Zurich, CH",
    description: {
      en: "Redesigned the customer-facing insurance portal, improving conversion rates by 34%. Led accessibility audit ensuring WCAG 2.1 AA compliance.",
      de: "Neugestaltung des Kundenportals für Versicherungen mit 34% Konversionssteigerung. Durchführung von Accessibility-Audits gemäß WCAG 2.1 AA.",
    },
    tags: ["UX Research", "Prototyping", "Accessibility", "Insurance"],
  },
  {
    period: { en: "2020 – 2021", de: "2020 – 2021" },
    role: { en: "UX Designer", de: "UX Designer" },
    company: "Swisscom AG",
    location: "Bern, CH",
    description: {
      en: "Contributed to the Swisscom TV app redesign for iOS and Android. Conducted 40+ user interviews and synthesized insights into actionable design improvements.",
      de: "Mitarbeit am Redesign der Swisscom TV-App für iOS und Android. Durchführung von 40+ Nutzerinterviews und Ableitung von Design-Verbesserungen.",
    },
    tags: ["Mobile UX", "User Research", "iOS", "Android"],
  },
  {
    period: { en: "2020", de: "2020" },
    role: { en: "Interaction Designer (Contract)", de: "Interaction Designer (Auftrag)" },
    company: "ABB Ltd.",
    location: "Baden, CH",
    description: {
      en: "Designed industrial HMI dashboards for factory automation systems. Created component libraries and interaction patterns for complex data visualization.",
      de: "Design industrieller HMI-Dashboards für Fabrikautomationssysteme. Erstellung von Komponentenbibliotheken für komplexe Datenvisualisierung.",
    },
    tags: ["HMI Design", "Industrial UX", "Data Visualization"],
  },
  {
    period: { en: "2019 – 2020", de: "2019 – 2020" },
    role: { en: "Junior Product Designer", de: "Junior Produktdesigner" },
    company: "Ergon Informatik AG",
    location: "Zurich, CH",
    description: {
      en: "Built interactive prototypes for B2B SaaS products across healthcare and logistics verticals. Supported senior designers in client workshops and usability testing.",
      de: "Erstellung interaktiver Prototypen für B2B-SaaS-Produkte in Gesundheits- und Logistikbereichen.",
    },
    tags: ["Prototyping", "B2B SaaS", "Healthcare", "Logistics"],
  },
  {
    period: { en: "2019", de: "2019" },
    role: { en: "UI Designer (Intern)", de: "UI Designer (Praktikum)" },
    company: "Zühlke Engineering",
    location: "Schlieren, CH",
    description: {
      en: "Assisted in the creation of high-fidelity UI mockups for automotive and medtech clients. Maintained Sketch-based design libraries and style guides.",
      de: "Unterstützung bei der Erstellung von UI-Mockups für Automotive- und Medtech-Kunden.",
    },
    tags: ["Sketch", "UI Mockups", "Automotive", "MedTech"],
  },
  {
    period: { en: "2018 – 2019", de: "2018 – 2019" },
    role: { en: "Visual Designer", de: "Visueller Gestalter" },
    company: "TBWA\\Zurich",
    location: "Zurich, CH",
    description: {
      en: "Developed brand identity systems and digital campaign assets for FMCG, automotive, and luxury clients. Collaborated with copywriters and art directors.",
      de: "Entwicklung von Markenidentitätssystemen und digitalen Kampagnen-Assets für FMCG-, Automobil- und Luxuskunden.",
    },
    tags: ["Branding", "Digital Campaigns", "Art Direction"],
  },
  {
    period: { en: "2018", de: "2018" },
    role: { en: "Freelance Web Designer", de: "Freiberuflicher Webdesigner" },
    company: "Self-Employed",
    location: "Remote",
    description: {
      en: "Designed and developed responsive websites for small businesses and cultural institutions. Delivered 12 projects using WordPress, Webflow, and custom HTML/CSS.",
      de: "Design und Entwicklung responsiver Websites für Kleinunternehmen und Kulturinstitutionen.",
    },
    tags: ["Webflow", "WordPress", "HTML/CSS", "Freelance"],
  },
  {
    period: { en: "2017 – 2018", de: "2017 – 2018" },
    role: { en: "Graphic & Motion Designer", de: "Grafik- & Motiondesigner" },
    company: "Ringier AG",
    location: "Zurich, CH",
    description: {
      en: "Created motion graphics and editorial illustrations for Blick and other Ringier digital media properties. Produced 200+ animated assets across social platforms.",
      de: "Erstellung von Motion Graphics und redaktionellen Illustrationen für Blick und andere Ringier-Digitalmedien.",
    },
    tags: ["Motion Design", "After Effects", "Editorial", "Social Media"],
  },
  {
    period: { en: "2017", de: "2017" },
    role: { en: "UX Research Assistant", de: "UX Research Assistent" },
    company: "ETH Zurich — D-ARCH",
    location: "Zurich, CH",
    description: {
      en: "Supported research into human-computer interaction for spatial computing environments. Conducted literature reviews and participant recruitment for lab studies.",
      de: "Unterstützung der HCI-Forschung für räumliche Rechenumgebungen. Durchführung von Literaturrecherchen und Probandenwerbung.",
    },
    tags: ["HCI Research", "Spatial Computing", "Academic"],
  },
  {
    period: { en: "2016 – 2017", de: "2016 – 2017" },
    role: { en: "Digital Marketing Specialist", de: "Digital Marketing Spezialist" },
    company: "Migros-Genossenschafts-Bund",
    location: "Zurich, CH",
    description: {
      en: "Managed social media channels and digital advertising for Migros Online. A/B tested landing pages and optimized conversion funnels, resulting in 22% uplift in engagement.",
      de: "Verwaltung von Social-Media-Kanälen und digitaler Werbung für Migros Online mit 22% Engagement-Steigerung.",
    },
    tags: ["Digital Marketing", "A/B Testing", "Social Media", "E-Commerce"],
  },
  {
    period: { en: "2016", de: "2016" },
    role: { en: "Brand Consultant (Contract)", de: "Markenberater (Auftrag)" },
    company: "Publicis Groupe Switzerland",
    location: "Geneva, CH",
    description: {
      en: "Advised on brand positioning and visual identity for three luxury hospitality clients. Delivered brand guidelines and tone-of-voice documentation.",
      de: "Beratung zur Markenpositionierung und visuellen Identität für drei Luxus-Hospitality-Kunden.",
    },
    tags: ["Brand Strategy", "Luxury", "Hospitality", "Consulting"],
  },
  {
    period: { en: "2015 – 2016", de: "2015 – 2016" },
    role: { en: "Product Manager (Associate)", de: "Produktmanager (Assistent)" },
    company: "tx.group (formerly Tamedia)",
    location: "Zurich, CH",
    description: {
      en: "Supported roadmap planning for digital news products serving 5M+ monthly readers. Wrote product requirements and coordinated with development squads.",
      de: "Unterstützung der Roadmap-Planung für digitale Nachrichtenprodukte mit 5M+ monatlichen Lesern.",
    },
    tags: ["Product Management", "News Media", "Roadmapping"],
  },
  {
    period: { en: "2015", de: "2015" },
    role: { en: "UX Designer (Contract)", de: "UX Designer (Auftrag)" },
    company: "PostFinance AG",
    location: "Bern, CH",
    description: {
      en: "Redesigned core banking flows including account overview and payment initiation. Delivered wireframes and usability test reports for the PostFinance App v3.",
      de: "Neugestaltung von Kernbankprozessen und Lieferung von Wireframes für die PostFinance App v3.",
    },
    tags: ["FinTech", "Banking UX", "Wireframing", "Usability Testing"],
  },
  {
    period: { en: "2014 – 2015", de: "2014 – 2015" },
    role: { en: "Web Developer & Designer", de: "Webentwickler & Designer" },
    company: "Namics AG",
    location: "St. Gallen, CH",
    description: {
      en: "Built front-end experiences for corporate websites using HTML5, CSS3, and JavaScript. Collaborated with UX designers to implement pixel-perfect interfaces.",
      de: "Entwicklung von Frontend-Erlebnissen für Unternehmenswebsites mit HTML5, CSS3 und JavaScript.",
    },
    tags: ["Front-End Development", "HTML5", "CSS3", "JavaScript"],
  },
  {
    period: { en: "2014", de: "2014" },
    role: { en: "Design Intern", de: "Design Praktikant" },
    company: "Büro Destruct",
    location: "Bern, CH",
    description: {
      en: "Worked at the legendary Swiss design studio on print, identity, and web projects. Absorbed Swiss typographic tradition and grid-based layout principles.",
      de: "Arbeit im legendären Schweizer Designstudio an Print-, Identitäts- und Webprojekten. Einarbeitung in Schweizer Typografie-Tradition.",
    },
    tags: ["Print Design", "Typography", "Identity", "Swiss Design"],
  },
  {
    period: { en: "2013 – 2014", de: "2013 – 2014" },
    role: { en: "Junior Graphic Designer", de: "Junior Grafikdesigner" },
    company: "Ogilvy Switzerland",
    location: "Zurich, CH",
    description: {
      en: "Produced integrated campaign materials across digital, print, and OOH for multinational clients. Participated in creative concepting sessions and client presentations.",
      de: "Erstellung integrierter Kampagnenmaterialien für multinationale Kunden. Teilnahme an kreativen Konzeptsitzungen.",
    },
    tags: ["Advertising", "Integrated Campaigns", "OOH", "Print"],
  },
  {
    period: { en: "2013", de: "2013" },
    role: { en: "Freelance Illustrator", de: "Freiberuflicher Illustrator" },
    company: "Various Clients",
    location: "Zurich, CH",
    description: {
      en: "Created editorial illustrations for Swiss-German magazines and cultural institutions. Developed a distinctive vector-based illustration style employed across 30+ projects.",
      de: "Erstellung redaktioneller Illustrationen für Schweizer Zeitschriften und Kulturinstitutionen.",
    },
    tags: ["Illustration", "Editorial", "Vector Art"],
  },
  {
    period: { en: "2012 – 2013", de: "2012 – 2013" },
    role: { en: "Communications Assistant", de: "Kommunikationsassistent" },
    company: "Stadt Zurich — Kulturamt",
    location: "Zurich, CH",
    description: {
      en: "Supported the city's cultural department in designing event collateral, newsletters, and social media content for public arts programming.",
      de: "Unterstützung der Kulturabteilung bei der Gestaltung von Veranstaltungsmaterialien und Social-Media-Inhalten.",
    },
    tags: ["Public Sector", "Communications", "Event Design"],
  },
  {
    period: { en: "2011 – 2012", de: "2011 – 2012" },
    role: { en: "Graphic Design Student Assistant", de: "Grafik-Design Studentenassistent" },
    company: "Zürcher Hochschule der Künste (ZHdK)",
    location: "Zurich, CH",
    description: {
      en: "Assisted professors in the Visual Communication department with workshop preparation, student portfolio reviews, and annual exhibition coordination.",
      de: "Unterstützung der Professoren der Visuellen Kommunikation bei Workshops und jährlichen Ausstellungen.",
    },
    tags: ["Academic", "Visual Communication", "Teaching Support"],
  },
];

export const education: EducationEntry[] = [
  {
    period: { en: "2010 – 2014", de: "2010 – 2014" },
    degree: {
      en: "BA Visual Communication",
      de: "BA Visuelle Kommunikation",
    },
    institution: "Zürcher Hochschule der Künste (ZHdK)",
    location: "Zurich, CH",
    description: {
      en: "Major in Digital Media Design with a focus on interaction design, typography, and Swiss visual tradition. Graduated with distinction.",
      de: "Schwerpunkt Digitales Mediendesign mit Fokus auf Interaktionsdesign und Typografie. Abschluss mit Auszeichnung.",
    },
  },
  {
    period: { en: "2016", de: "2016" },
    degree: {
      en: "Certificate in UX Design",
      de: "Zertifikat UX Design",
    },
    institution: "Nielsen Norman Group",
    location: "Online / USA",
    description: {
      en: "Completed 4 specialty certificates covering UX Research, Interaction Design, UX Management, and Human-Computer Interaction.",
      de: "Abschluss von 4 Spezialseminar-Zertifikaten zu UX Research, Interaktionsdesign, UX-Management und HCI.",
    },
  },
  {
    period: { en: "2018", de: "2018" },
    degree: {
      en: "PMP® Project Management Professional",
      de: "PMP® Projektmanagement Professional",
    },
    institution: "Project Management Institute (PMI)",
    location: "Online",
    description: {
      en: "Internationally recognized project management certification covering risk, scope, cost, and stakeholder management frameworks.",
      de: "International anerkannte Projektmanagement-Zertifizierung für Risiko-, Umfangs-, Kosten- und Stakeholder-Management.",
    },
  },
  {
    period: { en: "2020", de: "2020" },
    degree: {
      en: "Google UX Design Certificate",
      de: "Google UX Design Zertifikat",
    },
    institution: "Google / Coursera",
    location: "Online",
    description: {
      en: "Professional certificate covering the full UX design process from empathize to prototype and test, with hands-on projects.",
      de: "Professionelles Zertifikat für den vollständigen UX-Designprozess mit praktischen Projekten.",
    },
  },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Helio Finance App",
    category: { en: "Mobile Banking UX", de: "Mobile Banking UX" },
    description: {
      en: "End-to-end redesign of a neo-banking mobile application. Simplified onboarding from 12 to 4 steps, boosting activation rates by 41%.",
      de: "End-to-End-Redesign einer Neo-Banking-App. Vereinfachung des Onboardings von 12 auf 4 Schritte mit 41% Aktivierungssteigerung.",
    },
    tags: ["Mobile UX", "FinTech", "Figma", "iOS"],
    year: "2024",
    imagePrompt: "Swiss minimalist mobile banking app UI, clean white interface, red accents, typography, professional fintech design",
  },
  {
    id: 2,
    title: "Meridian Design System",
    category: { en: "Design System", de: "Design System" },
    description: {
      en: "Comprehensive enterprise design system with 400+ components across 6 product lines. Reduced design-to-dev handoff time by 60%.",
      de: "Umfassendes Enterprise Design System mit 400+ Komponenten für 6 Produktlinien. 60% weniger Übergabezeit.",
    },
    tags: ["Design Systems", "Figma", "Storybook", "Tokens"],
    year: "2023",
    imagePrompt: "Design system component library UI, clean grid layout, color tokens, minimal Swiss design, professional",
  },
  {
    id: 3,
    title: "Bergpass Wayfinding",
    category: { en: "Spatial UX / Signage", de: "Räumliches UX / Beschilderung" },
    description: {
      en: "Wayfinding system for a Swiss mountain resort covering 8km of trails, 3 cable car stations, and 2 alpine villages.",
      de: "Wegführungssystem für ein Schweizer Bergresort mit 8 km Wegen und 3 Seilbahnstationen.",
    },
    tags: ["Wayfinding", "Spatial Design", "Signage", "Swiss"],
    year: "2023",
    imagePrompt: "Swiss alpine mountain wayfinding signage system, minimal clean design, red and white, helvetica typography",
  },
  {
    id: 4,
    title: "Volta EV Platform",
    category: { en: "Automotive UX", de: "Automotive UX" },
    description: {
      en: "Dashboard UX for an electric vehicle management platform. Designed real-time charging maps, trip planning, and energy analytics.",
      de: "Dashboard-UX für eine Elektrofahrzeug-Management-Plattform mit Ladekarten und Energie-Analysen.",
    },
    tags: ["Automotive", "Dashboard UX", "EV", "Data Viz"],
    year: "2022",
    imagePrompt: "Electric vehicle dashboard interface, dark theme with green accents, clean data visualization, minimal automotive UX",
  },
  {
    id: 5,
    title: "Kulturbau Identity",
    category: { en: "Brand Identity", de: "Markenidentität" },
    description: {
      en: "Visual identity for a Zurich-based contemporary architecture foundation. Grid-based system influenced by Swiss International Style.",
      de: "Visuelle Identität für eine Zürcher Architekturstiftung im Schweizer Stil.",
    },
    tags: ["Branding", "Identity", "Print", "Architecture"],
    year: "2022",
    imagePrompt: "Swiss modern architecture brand identity, minimal grid system, black and red typography, elegant cultural institution",
  },
  {
    id: 6,
    title: "Soleil E-Commerce",
    category: { en: "E-Commerce Design", de: "E-Commerce Design" },
    description: {
      en: "Full UX redesign of a Swiss luxury beauty brand's e-commerce platform. Increased average order value by 28% post-launch.",
      de: "Vollständiges UX-Redesign der E-Commerce-Plattform einer Schweizer Luxus-Beauty-Marke.",
    },
    tags: ["E-Commerce", "Luxury", "UX Research", "Shopify"],
    year: "2022",
    imagePrompt: "Luxury beauty e-commerce website, elegant minimal design, cream and gold tones, Swiss aesthetic, clean product photography",
  },
  {
    id: 7,
    title: "Stadtpuls Data Dashboard",
    category: { en: "Data Visualization", de: "Datenvisualisierung" },
    description: {
      en: "Open-data civic platform visualizing Zurich city sensor data — air quality, traffic, noise — in real-time for 200K+ citizens.",
      de: "Offene Datenplattform für Zürich mit Echtzeitvisualisierung von Luftqualität, Verkehr und Lärm für 200K+ Bürger.",
    },
    tags: ["Data Viz", "Civic Tech", "Open Data", "React"],
    year: "2021",
    imagePrompt: "City data visualization dashboard, clean minimal design, graphs and charts, red and dark blue, urban data platform",
  },
  {
    id: 8,
    title: "Almaz Health App",
    category: { en: "Healthcare UX", de: "Healthcare UX" },
    description: {
      en: "Patient-facing health record and appointment management app for a chain of Swiss clinics. Designed for accessibility (WCAG AAA).",
      de: "Patientenorientierte Gesundheitsapp für Schweizer Kliniken mit WCAG AAA-Zugänglichkeit.",
    },
    tags: ["Healthcare", "Accessibility", "iOS", "Android"],
    year: "2021",
    imagePrompt: "Healthcare mobile app UI, clean white design with blue medical accents, patient portal interface, accessible design",
  },
  {
    id: 9,
    title: "Typospace Editorial",
    category: { en: "Digital Publication", de: "Digitale Publikation" },
    description: {
      en: "Art-directed digital magazine exploring Swiss typography and design culture. Featured in Eye Magazine and Design Observed.",
      de: "Kunstdirektierte digitale Zeitschrift über Schweizer Typografie und Designkultur.",
    },
    tags: ["Editorial Design", "Typography", "Digital Magazine"],
    year: "2020",
    imagePrompt: "Swiss typography digital magazine layout, editorial design, Helvetica inspired, grid system, minimal black and white with red accents",
  },
  {
    id: 10,
    title: "Atlas Product OS",
    category: { en: "Product Strategy", de: "Produktstrategie" },
    description: {
      en: "Internal operating system for product teams: unified roadmaps, OKRs, sprint planning, and stakeholder reporting in one platform.",
      de: "Internes Betriebssystem für Produktteams mit vereinheitlichten Roadmaps, OKRs und Sprint-Planung.",
    },
    tags: ["Product Management", "SaaS", "B2B", "Strategy"],
    year: "2020",
    imagePrompt: "B2B SaaS product management platform UI, clean dashboard design, dark sidebar with white content area, professional minimal",
  },
];
