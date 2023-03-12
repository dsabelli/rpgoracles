// // export const nameToPath = (name: String): String => {
// //   let path = "";
// //   name
// //     .split("-")
// //     .forEach(
// //       (section) =>
// //         (path += section.slice(0, 1).toUpperCase() + section.slice(1) + " ")
// //     );
// //   return path;
// // };
import { NavPath } from "~~/types";
export const NavPaths: NavPath[] = [
  { name: "Solo Oracles", pathway: "solo-oracles" },
  { name: "General", pathway: "general" },
  {
    name: "Fantasy",
    pathway: "fantasy",
    subPathways: [
      {
        name: "Dark Fantasy",
        pathway: "dark",
      },
      { name: "High Fantasy", pathway: "high" },
    ],
  },
  { name: "Horror", pathway: "horror" },
  { name: "Science Fiction", pathway: "science-fiction" },
];
