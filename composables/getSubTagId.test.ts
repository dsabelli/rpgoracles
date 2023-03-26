import { describe, it, expect, beforeAll } from "vitest";
import prisma from "../prisma/client";
import { getSubTagId } from "./getSubTagId";
import { sub_tags } from "@prisma/client";

const subTags = await prisma.sub_tags.findMany({});

const param1 = "dark";
const param2 = "notASubtag";

describe("check to see if the subtag ID is found from the route param string", async () => {
  let subTags: sub_tags[];
  beforeAll(async () => {
    subTags = await prisma.sub_tags.findMany({});
  });
  it("returns the ID when a proper match is found", () => {
    expect(getSubTagId(subTags, param1)).toBe(1);
  });
  it("returns undefined if a match is not found", () => {
    expect(getSubTagId(subTags, param2)).toBeUndefined;
  });
});
