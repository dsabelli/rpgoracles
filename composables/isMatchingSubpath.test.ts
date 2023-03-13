import { describe, it, expect } from "vitest";
import { isMatchingSubpath } from "./isMatchingSubpath";
import { DataTable } from "~~/types";
import { RouteLocationNormalizedLoaded } from "vue-router";

describe("check to see if the current subpath includes the tables subtag", () => {
  const dataTable: DataTable = {
    id: 0,
    name: "",
    description: "",
    date: new Date(),
    document: "",
    tag: "",
    subtag: "dark",
    table: [],
    image: "",
  };
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

  it("returns true if the path includes a subtag", () => {
    expect(isMatchingSubpath(routeOne, dataTable)).toBeTruthy;
  });
  it("returns false if the path does not include a subtag", () => {
    expect(isMatchingSubpath(routeTwo, dataTable)).toBeFalsy;
  });
});
