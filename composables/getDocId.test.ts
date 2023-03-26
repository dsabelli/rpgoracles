import { describe, it, expect, beforeAll } from "vitest";
import prisma from "../prisma/client";
import { getDocId } from "./getDocId";
import { doc_types } from "@prisma/client";

const param1 = "names";
const param2 = "notADocument";

describe("check to see if the document ID is found from the route param string", async () => {
  let documents: doc_types[];
  beforeAll(async () => {
    documents = await prisma.doc_types.findMany({});
  });
  it("returns the ID when a proper match is found", () => {
    expect(getDocId(documents, param1)).toBe(1);
  });
  it("returns undefined if a match is not found", () => {
    expect(getDocId(documents, param2)).toBeUndefined;
  });
});
