/**
 * Single source of truth for club links and contact details.
 * Edit these values — every component reads from here.
 */
export const site = {
  name: "49th Security Division",
  shortName: "49th SD",
  university: "UNC Charlotte",
  description:
    "UNC Charlotte's collegiate cybersecurity club — competitive cyber defense, offensive security, and a six-week bootcamp.",

  links: {
    discord: "https://discord.gg/mGqmYteXPf",
    ninerEngage: "https://ninerengage.charlotte.edu/organization/your-org",
    github: "https://github.com/49thSecurityDivision",
  },

  contact: {
    email: "49SD@gmail.com",
    /** Optional: set to a Google Form / Typeform URL to use it instead of mailto. */
    formUrl: "",
  },

  meetings: {
    cadence: "Weekly meetings",
    day: "Wednesday 4-5pm",
    location: "CHHS 109, UNC Charlotte",
  },
} as const;

/** Sponsor inquiries go to the form if one is configured, otherwise to email. */
export const contactHref = site.contact.formUrl
  ? site.contact.formUrl
  : `mailto:${site.contact.email}?subject=${encodeURIComponent("Partnership inquiry — 49th Security Division")}`;

/** Prefix a /public asset path with the deploy base path (for plain <img>/<a>, not next/link). */
export const withBase = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path.startsWith("/") ? path : `/${path}`}`;
