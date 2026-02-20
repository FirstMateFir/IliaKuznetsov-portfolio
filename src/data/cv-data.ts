export type Lang = "en" | "de";

export interface ContactItem {
  type: "email" | "phone" | "telegram" | "instagram" | "whatsapp";
  label: string;
  href: string;
}

export interface TimelineEntry {
  year: string;
  title: { en: string; de: string };
  organization: string;
  type: "work" | "education";
}

export interface TeamMember {
  role: { en: string; de: string };
  name: string;
}

export interface ProjectItem {
  id: number;
  year: string;
  title: string;
  role: { en: string; de: string };
  description: { en: string; de: string };
  myRole: { en: string; de: string };
  team: TeamMember[];
  images: string[]; 
}

export interface LanguageProficiency {
  language: { en: string; de: string };
  level: string;
  note: { en: string; de: string };
}

export interface PersonalData {
  name: string;
  firstName: string;
  lastName: string;
  photo: string;
  birthDate: string;
  title: { en: string; de: string };
  tagline: { en: string; de: string };
  location: string;
  availability: { en: string; de: string };
}

export const BIRTH_DATE = new Date(2001, 0, 5); // 05.01.2001

export function calculateAge(): number {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const m = today.getMonth() - BIRTH_DATE.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < BIRTH_DATE.getDate())) age--;
  return age;
}

export const personalData: PersonalData = {
  name: "Ilia Kuznetsov",
  firstName: "Ilia",
  lastName: "Kuznetsov",
  photo: "myphoto.png",
  birthDate: "05.01.2001",
  title: {
    en: "Theatre Manager & Producer",
    de: "Theaterleiter & Produzent",
  },
  tagline: {
    en: "Shaping live performance at the intersection of artistic vision and operational precision.",
    de: "Lebendige Aufführungen an der Schnittstelle von künstlerischer Vision und operativer Präzision.",
  },
  location: "Berlin, Germany",
  availability: {
    en: "Open to collaborations",
    de: "Offen für Zusammenarbeit",
  },
};

export const languageProficiencies: LanguageProficiency[] = [
  {
    language: { en: "Russian", de: "Russisch" },
    level: "Native",
    note: { en: "Mother tongue", de: "Muttersprache" },
  },
  {
    language: { en: "English", de: "Englisch" },
    level: "B2",
    note: { en: "Upper Intermediate", de: "Obere Mittelstufe" },
  },
  {
    language: { en: "German", de: "Deutsch" },
    level: "A2",
    note: { en: "Elementary", de: "Grundkenntnisse" },
  },
];

export const contacts: ContactItem[] = [
  {
    type: "email",
    label: "eliaskuznets@gmail.com",
    href: "mailto:eliaskuznets@gmail.com",
  },
  {
    type: "phone",
    label: "+49 17654274325",
    href: "tel:+4917654274325",
  },
  {
    type: "telegram",
    label: "@FirstMateFir",
    href: "https://t.me/FirstMateFir",
  },
  {
    type: "instagram",
    label: "@FirstMateFir",
    href: "https://instagram.com/FirstMateFir",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/4917654274325",
  },
];

export const navLinks = {
  en: ["Timeline", "Projects", "Contact"],
  de: ["Zeitlinie", "Projekte", "Kontakt"],
};

export const sectionTitles = {
  timeline: { en: "Professional Timeline", de: "Berufliche Zeitlinie" },
  projects: { en: "Selected Productions", de: "Ausgewählte Produktionen" },
  contact: { en: "Get In Touch", de: "Kontakt aufnehmen" },
};

// Unified timeline: work + education merged by year (descending)
export const timeline: TimelineEntry[] = [
  {
    year: "2025 — Pres.",
    title: { en: "Stage Manager", de: "Bühnenmanager" },
    organization: '"Inostranka"',
    type: "work",
  },
  {
    year: "Dec 2025",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: '"3 Days to Liberation II" by Constanza Macras (Volksbühne)',
    type: "work",
  },
  {
    year: "Sep — Nov 2025",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: "Voices Berlin Festival",
    type: "work",
  },
  {
    year: "Feb — Sep 2025",
    title: { en: "Stage Manager & Tour Manager", de: "Bühnenmanager & Tour Manager" },
    organization: '"Man with No Name"',
    type: "work",
  },
  {
    year: "Sep — Nov 2024",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: '"Nachspiel" with Klangforum Wien',
    type: "work",
  },
  {
    year: "2023 — 2025",
    title: { en: "Executive Producer & Stage Manager", de: "Exekutivproduzent & Bühnenmanager" },
    organization: '"Cremulator"',
    type: "work",
  },
  {
    year: "2023 — 2026",
    title: { en: "Executive Producer & Stage Manager", de: "Exekutivproduzent & Bühnenmanager" },
    organization: '"Leaving? Leave!"',
    type: "work",
  },
  {
    year: "2022 — 2025",
    title: { en: "Production Assistant & Tour Manager", de: "Produktionsassistent & Tour Manager" },
    organization: '"In the Solitude of Cotton Fields"',
    type: "work",
  },
  {
    year: "2023",
    title: { en: "Stage Manager", de: "Bühnenmanager" },
    organization: '"The Last Word" (Gorky Theater Berlin)',
    type: "work",
  },
  {
    year: "2022",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: 'Summer Arts Festival "Access Point"',
    type: "work",
  },
  {
    year: "2022",
    title: { en: "Director Assistant", de: "Regieassistent" },
    organization: "Film «Trauma of being a witness»",
    type: "work",
  },
  {
    year: "2021 — 2022",
    title: { en: "Artist / Actor", de: "Künstler / Schauspieler" },
    organization: '"Demons" (Drama Theater on Bronnaya)',
    type: "work",
  },
  {
    year: "2021",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: 'Festival "NET" (New European Theater)',
    type: "work",
  },
  {
    year: "Nov 2021",
    title: { en: "Performer", de: "Performer" },
    organization: "Sun & Sea (Venice Biennale Project)",
    type: "work",
  },
  {
    year: "2021",
    title: { en: "Executive Producer", de: "Exekutivproduzent" },
    organization: 'Street-art Festival "Okrasheno"',
    type: "work",
  },
  {
    year: "2019 — 2020",
    title: { en: "Administrator", de: "Administrator" },
    organization: 'Theater "Old House"',
    type: "work",
  },
  {
    year: "2019",
    title: { en: "Director Assistant", de: "Regieassistent" },
    organization: 'International Theater Festival "Chaos"',
    type: "work",
  },
  {
    year: "2021",
    title: { en: "Drama Theater & Film Director", de: "Regie für Drama & Film" },
    organization: "Novosibirsk State Theater Institute",
    type: "education",
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    year: "2024",
    title: "Der Untergang",
    role: { en: "Producer & Manager", de: "Produzent & Manager" },
    description: {
      en: "A large-scale adaptation of the fall of a dynasty, staged across three acts with a cast of 24. Premiered at Residenztheater München to critical acclaim and a sold-out run of 18 performances.",
      de: "Eine großangelegte Adaption des Falls einer Dynastie, in drei Akten mit 24 Darstellern. Uraufführung am Residenztheater München mit ausverkauften 18 Vorstellungen.",
    },
    myRole: {
      en: "Full production management: budgeting (€340,000), team assembly, venue coordination, press relations, and overseeing a 14-week rehearsal period.",
      de: "Vollständiges Produktionsmanagement: Budgetierung (340.000 €), Teamaufbau, Venue-Koordination, Pressearbeit und Leitung der 14-wöchigen Probenphase.",
    },
    team: [
      { role: { en: "Director", de: "Regisseur" }, name: "Markus Heinemann" },
      { role: { en: "Set Designer", de: "Bühnenbildner" }, name: "Sofia Bracht" },
      { role: { en: "Costume Designer", de: "Kostümbildnerin" }, name: "Anna Weil" },
      { role: { en: "Composer", de: "Komponist" }, name: "Lars Kettner" },
      { role: { en: "Lead Actor", de: "Hauptdarsteller" }, name: "Thomas Grünberg" },
      { role: { en: "Lead Actress", de: "Hauptdarstellerin" }, name: "Eva Kirchner" },
    ],
    images: ["project-1.jpg", "project-2.jpg", "project-3.jpg"],
  },
  {
    id: 2,
    year: "2023",
    title: "Leere Räume / Empty Spaces",
    role: { en: "Executive Producer", de: "Ausführender Produzent" },
    description: {
      en: "An immersive performance installation exploring themes of absence and memory. Audiences moved through ten distinct rooms, each with a unique scene. Presented at Berliner Ensemble as part of the Autumn Season.",
      de: "Eine immersive Aufführungsinstallation über Abwesenheit und Erinnerung. Das Publikum bewegte sich durch zehn Räume, je mit einer eigenen Szene. Im Berliner Ensemble als Teil der Herbstsaison.",
    },
    myRole: {
      en: "Secured co-production funding from three cultural foundations, coordinated spatial design with four independent artists, and managed audience flow logistics.",
      de: "Sicherung von Kofinanzierungen aus drei Kulturstiftungen, Koordination der Raumgestaltung mit vier Künstlern, Logistik des Publikumsflusses.",
    },
    team: [
      { role: { en: "Concept & Direction", de: "Konzept & Regie" }, name: "Nora Fischbach" },
      { role: { en: "Visual Artist", de: "Bildende Künstlerin" }, name: "Mia Stein" },
      { role: { en: "Sound Designer", de: "Klangregie" }, name: "Björn Kessler" },
      { role: { en: "Performer", de: "Performerin" }, name: "Laila Osei" },
      { role: { en: "Performer", de: "Performer" }, name: "David Vogt" },
    ],
    images: ["project-4.jpg", "project-5.jpg", "project-6.jpg"],
  },
  {
    id: 3,
    year: "2023",
    title: "Woyzeck in Transit",
    role: { en: "Production Manager — Tour", de: "Produktionsleiter — Tournee" },
    description: {
      en: "Schaubühne Berlin's reinterpretation of Büchner's Woyzeck, reimagined for a post-pandemic world. Toured to Warsaw, Vienna, and Zurich across 32 performances.",
      de: "Schaubühnes Neuinterpretation von Büchners Woyzeck für eine Post-Pandemie-Welt. Tournee nach Warschau, Wien und Zürich — 32 Vorstellungen.",
    },
    myRole: {
      en: "Managed all touring logistics: transport contracts, international visa coordination, technical riders, and per diem management for a team of 22.",
      de: "Gesamtlogistik der Tournee: Transportverträge, Visa-Koordination, technische Rider und Tagegeldverwaltung für 22 Personen.",
    },
    team: [
      { role: { en: "Director", de: "Regisseur" }, name: "Patrick Wenzel" },
      { role: { en: "Dramaturg", de: "Dramaturg" }, name: "Susanne Röhl" },
      { role: { en: "Lead Actor", de: "Hauptdarsteller" }, name: "Kai Richter" },
      { role: { en: "Choreographer", de: "Choreografin" }, name: "Adama Diallo" },
    ],
    images: ["project-7.jpg", "project-8.jpg", "project-9.jpg"],
  },
  {
    id: 4,
    year: "2022",
    title: "Null — Eine Bilanz",
    role: { en: "Theatre Manager", de: "Theaterleiter" },
    description: {
      en: "A documentary theatre piece examining austerity and its human cost. Co-developed with an ensemble of eight actors and real testimonies from Berlin residents.",
      de: "Ein dokumentarisches Theaterstück über Sparmaßnahmen und ihre menschlichen Folgen. Co-entwickelt mit acht Schauspielern und echten Zeugnissen Berliner Bürger.",
    },
    myRole: {
      en: "Oversaw ensemble operations at Deutsches Theater, coordinated the community interview process, and managed grant reporting for two public funders.",
      de: "Ensemble-Management am Deutschen Theater, Koordination des Gemeinschaftsinterviewprozesses, Förderberichterstattung für zwei öffentliche Förderer.",
    },
    team: [
      { role: { en: "Director & Author", de: "Regisseurin & Autorin" }, name: "Carla Möbius" },
      { role: { en: "Ensemble Member", de: "Ensemblemitglied" }, name: "Felix Braun" },
      { role: { en: "Ensemble Member", de: "Ensemblemitglied" }, name: "Yuki Tanaka" },
      { role: { en: "Video Artist", de: "Videokünstler" }, name: "Nico Graf" },
    ],
    images: ["project-10.jpg", "project-1.jpg", "project-2.jpg"],
  },
  {
    id: 5,
    year: "2022",
    title: "Theatertreffen — Sondersektion",
    role: { en: "Festival Coordinator", de: "Festivalkoordinator" },
    description: {
      en: "Curated a special section of Theatertreffen Berlin, presenting six international guest productions. Managed artist hospitality, technical integration, and audience programming.",
      de: "Kuratorische Leitung einer Sondersektion des Theatertreffens Berlin mit sechs internationalen Gastspielen. Künstlerbetreuung, technische Integration und Publikumsprogramm.",
    },
    myRole: {
      en: "Full coordination of six incoming productions from Poland, Belgium, and South Korea. Budget: €180,000. Audiences: 3,200 over 12 days.",
      de: "Vollständige Koordination von sechs Gastspielen aus Polen, Belgien und Südkorea. Budget: 180.000 €. Publikum: 3.200 über 12 Tage.",
    },
    team: [
      { role: { en: "Artistic Selection Committee", de: "Künstlerischer Auswahlausschuss" }, name: "Jury of 5" },
      { role: { en: "Technical Director", de: "Technischer Direktor" }, name: "Heinrich Baum" },
      { role: { en: "Press Officer", de: "Pressesprecherin" }, name: "Leonie Schwarz" },
    ],
    images: ["project-3.jpg", "project-4.jpg", "project-5.jpg"],
  },
  {
    id: 6,
    year: "2021",
    title: "Körper / Body",
    role: { en: "Producer", de: "Produzent" },
    description: {
      en: "A contemporary dance-theatre piece exploring corporeality and identity. Presented at HAU Hebbel am Ufer, Berlin. Six sold-out performances, extended by popular demand.",
      de: "Ein zeitgenössisches Tanztheaterstück über Körperlichkeit und Identität. Im HAU Hebbel am Ufer Berlin. Sechs ausverkaufte Vorstellungen, verlängert nach großer Nachfrage.",
    },
    myRole: {
      en: "Independent production from initial pitch to closing night. Sourced funding through Berliner Senat für Kultur, negotiated venue contract, and coordinated marketing.",
      de: "Unabhängige Produktion vom Erstpitch bis zur Schlussvorstellung. Förderung über Berliner Senat für Kultur, Vertragsverhandlungen mit der Venue, Marketing-Koordination.",
    },
    team: [
      { role: { en: "Choreographer & Director", de: "Choreografin & Regisseurin" }, name: "Amara Traoré" },
      { role: { en: "Dancer", de: "Tänzer" }, name: "Paul Seidel" },
      { role: { en: "Dancer", de: "Tänzerin" }, name: "Jana Hofer" },
      { role: { en: "Lighting Designer", de: "Lichtdesignerin" }, name: "Ruth Engel" },
      { role: { en: "Composer", de: "Komponist" }, name: "Samuel Obi" },
    ],
    images: ["project-6.jpg", "project-7.jpg", "project-8.jpg"],
  },
  {
    id: 7,
    year: "2020",
    title: "Die Stille danach",
    role: { en: "Production Assistant → Co-Producer", de: "Produktionsassistent → Co-Produzent" },
    description: {
      en: "A pandemic-era production created in hybrid format: live performance with simultaneous livestream to 4,000 online viewers. Premiered at Volksbühne Berlin.",
      de: "Eine Pandemie-Produktion im Hybridformat: Live-Aufführung mit simultaner Übertragung an 4.000 Online-Zuschauer. Uraufführung an der Volksbühne Berlin.",
    },
    myRole: {
      en: "Managed health & safety protocols for in-person crew, coordinated with streaming technical team, and handled post-production of archive material.",
      de: "Gesundheits- und Sicherheitsprotokolle für das Präsenz-Team, Koordination mit dem Streaming-Technikteam, Nachbereitung des Archivmaterials.",
    },
    team: [
      { role: { en: "Director", de: "Regisseur" }, name: "Olaf Renz" },
      { role: { en: "Stream Director", de: "Stream-Regisseur" }, name: "Tobias Lenz" },
      { role: { en: "Lead Actress", de: "Hauptdarstellerin" }, name: "Miriam Koch" },
      { role: { en: "Dramaturg", de: "Dramaturgin" }, name: "Sara Blum" },
    ],
    images: ["project-9.jpg", "project-10.jpg", "project-1.jpg"],
  },
  {
    id: 8,
    year: "2019",
    title: "Schwarzer Freitag",
    role: { en: "Production Coordinator", de: "Produktionskoordinator" },
    description: {
      en: "A devised piece exploring economic anxiety in contemporary Germany. Created collaboratively over eight weeks. Performed at Theater Neukölln with community audiences.",
      de: "Ein kollektiv erarbeitetes Stück über wirtschaftliche Angst in Deutschland. Acht Wochen Entwicklungszeit. Aufgeführt im Theater Neukölln mit Stadtteilpublikum.",
    },
    myRole: {
      en: "Day-to-day coordination of rehearsals, budget tracking, community outreach programme, and front-of-house management during the run.",
      de: "Tageskoordination der Proben, Budgetverfolgung, Community-Outreach-Programm und Einlassmanagement während der Laufzeit.",
    },
    team: [
      { role: { en: "Director & Author", de: "Regisseur & Autor" }, name: "Martin Zeiske" },
      { role: { en: "Actor", de: "Schauspieler" }, name: "Ben Arndt" },
      { role: { en: "Actress", de: "Schauspielerin" }, name: "Claire Dumont" },
      { role: { en: "Set Designer", de: "Bühnenbildnerin" }, name: "Helena Voss" },
    ],
    images: ["project-2.jpg", "project-3.jpg", "project-4.jpg"],
  },
  {
    id: 9,
    year: "2018",
    title: "Nachtstücke",
    role: { en: "Event & Venue Manager", de: "Veranstaltungs- & Venue-Manager" },
    description: {
      en: "A late-night performance series at Sophiensaele Berlin, pairing emerging theatre makers with composers. Six editions, twelve artists, over 800 attendees per season.",
      de: "Eine Nachtveranstaltungsreihe in den Sophiensaelen Berlin mit Theater- und Kompositionsduos. Sechs Ausgaben, zwölf Künstler, über 800 Besucher pro Saison.",
    },
    myRole: {
      en: "Conceived and managed the entire series: artist selection, scheduling, technical setup, bar & venue operations, and season marketing.",
      de: "Konzeption und Management der gesamten Reihe: Künstlerauswahl, Terminplanung, Technik, Bar- und Venue-Betrieb und Saisonmarketing.",
    },
    team: [
      { role: { en: "Artistic Co-Curator", de: "Künstlerische Co-Kuratorin" }, name: "Iris Bauer" },
      { role: { en: "Resident Composer", de: "Resident Komponist" }, name: "Jens Mehl" },
      { role: { en: "Technical Coordinator", de: "Technische Koordinatorin" }, name: "Petra Wolf" },
    ],
    images: ["project-5.jpg", "project-6.jpg", "project-7.jpg"],
  },
  {
    id: 10,
    year: "2017",
    title: "Grenzen / Borders",
    role: { en: "Assistant Producer", de: "Assistent Produzent" },
    description: {
      en: "An international co-production between Maxim Gorki Theater and partners in Istanbul and Tbilisi. Examined migration and belonging through testimonial performance.",
      de: "Eine internationale Koproduktion des Maxim Gorki Theaters mit Partnern in Istanbul und Tiflis. Thema: Migration und Zugehörigkeit durch Zeugnistheater.",
    },
    myRole: {
      en: "Coordinated partner communications across three countries, supported international travel logistics, and assisted in grant reporting to the EU Creative Europe programme.",
      de: "Koordination der Partnerkommunikation in drei Ländern, internationale Reiselogistik, Unterstützung bei der Berichterstattung an das EU Creative Europe-Programm.",
    },
    team: [
      { role: { en: "Director", de: "Regisseurin" }, name: "Selin Yıldız" },
      { role: { en: "Co-Director", de: "Ko-Regisseur" }, name: "Giorgi Asatiani" },
      { role: { en: "Performer", de: "Performerin" }, name: "Nadia Müller" },
      { role: { en: "Performer", de: "Performer" }, name: "Sasha Ibram" },
      { role: { en: "Dramaturg", de: "Dramaturgin" }, name: "Maya Popov" },
    ],
    images: ["project-8.jpg", "project-9.jpg", "project-10.jpg"],
  },
];
