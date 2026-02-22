export type Company = {
  id: string;
  name: string;
  website: string;
  sector: string;
  stage: string;
};

export const companies: Company[] = [
  {
    id: "1",
    name: "Stripe",
    website: "https://stripe.com",
    sector: "Fintech",
    stage: "Growth",
  },
  {
    id: "2",
    name: "Notion",
    website: "https://notion.so",
    sector: "Productivity",
    stage: "Series C",
  },
  {
    id: "3",
    name: "Vercel",
    website: "https://vercel.com",
    sector: "Developer Tools",
    stage: "Series D",
  },
];