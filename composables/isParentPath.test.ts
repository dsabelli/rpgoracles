import { describe, it, expect, beforeAll } from "vitest";
import { isParentPath } from "./isParentPath";
import { Subtag } from "~~/types";
import { RouteLocationNormalizedLoaded } from "vue-router";

//takes the route and an array of subtags
//loop through all subtags, if the current route path includes a subtag,
//then it is not a parent path, so return false, else true
describe("check to see if the current path includes any subtags", async () => {
  const subtags: Subtag[] = [{ name: "dark", parent: "fantasy", path: "dark" }];

  const routeOne: RouteLocationNormalizedLoaded = {
    matched: [],
    fullPath: "",
    query: {},
    hash: "",
    redirectedFrom: undefined,
    name: undefined,
    path: "tables/dark",
    params: {},
    meta: {},
  };
  const routeTwo: RouteLocationNormalizedLoaded = {
    matched: [],
    fullPath: "",
    query: {},
    hash: "",
    redirectedFrom: undefined,
    name: undefined,
    path: "general",
    params: {},
    meta: {},
  };

  it("returns false if the path includes a subtag", () => {
    expect(isParentPath(routeOne, subtags)).toBeFalsy;
  });
  it("returns true if the path does not include a subtag", () => {
    expect(isParentPath(routeTwo, subtags)).toBeTruthy;
  });
});
