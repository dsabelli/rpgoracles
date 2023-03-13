import { RouteLocationNormalizedLoaded } from "vue-router";
import { DataTable } from "~~/types";

//check to see if the current subpath includes the tables subtag
//ex; a table with a "dark" subtag should return true when the path is /fantasy/dark/[document]
export const isMatchingSubpath = (
  route: RouteLocationNormalizedLoaded,
  table: DataTable
): boolean => {
  if (route.path.includes(table.subtag)) return true;
  return false;
};
