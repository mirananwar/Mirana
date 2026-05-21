export type Role = {
  role: string;
  period: string;
};

export type Company = {
  company: string;
  roles: Role[];
};

export const experience: Company[] = [
  {
    company: "JP Morgan Chase & Co.",
    roles: [
      { role: "Software Engineer II",     period: "Jan 2026 – Present"  },
      { role: "Software Engineer I",      period: "Feb 2024 – Dec 2025" },
      { role: "Software Engineer Intern", period: "Jun – Aug 2022"      },
    ],
  },
  {
    company: "TJX Companies",
    roles: [{ role: "Software Engineer Co-op", period: "Aug – Dec 2022" }],
  },
  {
    company: "RMR Group",
    roles: [{ role: "Software Engineer Co-op", period: "Jul – Dec 2021" }],
  },
  {
    company: "ShowNxt",
    roles: [{ role: "Freelance Engineer", period: "Sep 2020 – Sep 2021" }],
  },
];
