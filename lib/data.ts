export type Accolade = {
  year: number;
  event: string;
  placement: string;
  /** "champion" gets gold treatment; "podium" for top-3 finishes. */
  tier?: "champion" | "podium";
};

/** Newest first. Add results here and the timeline and hero stats update automatically. */
export const accolades: Accolade[] = [
  { year: 2026, event: "National Guard Minuteman", placement: "Top 5" },
  { year: 2026, event: "SECCDC Regional", placement: "Top 10" },
  { year: 2026, event: "SECCDC Qualifier", placement: "Top 3", tier: "podium" },
  { year: 2025, event: "Army National Guard CTF", placement: "1st Place", tier: "champion" },
  { year: 2025, event: "DOE CyberForce", placement: "Top 20" },
  { year: 2024, event: "SECCDC Regional", placement: "Top 10" },
  { year: 2024, event: "SECCDC Qualifiers", placement: "Top 5" },
];

export type Officer = {
  name: string;
  role: string;
  /** Optional profile links — leave blank to hide the icon. */
  linkedin?: string;
  email?: string;
};

export const officers: Officer[] = [
  { name: "Matthew Hampton", role: "President" },
  { name: "Connor Drake", role: "Internal Vice President" },
  { name: "Hunter Korff", role: "External Vice President" },
  { name: "Henry Shearer", role: "Treasurer" },
  { name: "Taylor Stewart", role: "Secretary" },
];

export type Partner = { name: string; kind: string; url?: string };

/** Current sponsors and grant partners. Text tiles keep the page fast; add an SVG logo later if you have usage rights. */
export const partners: Partner[] = [];
