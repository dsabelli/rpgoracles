import { NavPath } from "~~/types";
export const NavPaths: NavPath[] = [
  { name: "Solo Oracles", pathway: "solo-oracles" },

  {
    name: "Fantasy",
    pathway: "fantasy",
    subPathways: [
      {
        name: "Dark Fantasy",
        pathway: "dark",
      },
      { name: "High Fantasy", pathway: "high" },
      { name: "Pirate Fantasy", pathway: "pirate" },
      { name: "Asian Fantasy", pathway: "asian" },
      { name: "Steampunk", pathway: "steampunk" },
    ],
  },
  {
    name: "Horror",
    pathway: "horror",
    subPathways: [
      { name: "Gothic", pathway: "gothic" },
      { name: "Lovecraftian", pathway: "lovecraftian" },
      { name: "Contemporary", pathway: "contemporary" },
    ],
  },
  {
    name: "Science Fiction",
    pathway: "science-fiction",
    subPathways: [
      { name: "Cyberpunk", pathway: "cyberpunk" },
      { name: "Post-Apocalypse", pathway: "post-apoc" },
      { name: "Space Opera", pathway: "space" },
      { name: "Mecha", pathway: "mecha" },
    ],
  },
  { name: "General", pathway: "general" },
];
