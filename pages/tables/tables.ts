// export const tables = [
//   "solo-oracles",
//   "general",
//   "fantasy",
//   "horror",
//   "science-fiction",
// ];

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
import { NavTable } from "~~/types";
export const DataTables: NavTable[] = [
  { name: "Solo Oracles", pathway: "solo-oracles" },
  { name: "General", pathway: "general" },
  {
    name: "Fantasy",
    pathway: "fantasy",
    subTables: [
      {
        name: "Dark Fantasy",
        pathway: "dark",
        subTables: [{ name: "Creatures", pathway: "creatures" }],
      },
      { name: "High Fantasy", pathway: "high" },
    ],
  },
  { name: "Horror", pathway: "horror" },
  { name: "Science fiction", pathway: "science-fiction" },
];
