import { RouteLocationNormalizedLoaded } from "vue-router";
import { Subtag } from "~~/types";

//takes the route and an array of subtags
//loop through all subtags, if the current route path includes a subtag,
//then it is not a parent path, so return false, else true
export const isParentPath = (
  route: RouteLocationNormalizedLoaded,
  subtags: Subtag[]
): boolean => {
  for (let subtag of subtags) {
    if (route.fullPath.includes(subtag.path)) return false;
  }
  return true;
};
