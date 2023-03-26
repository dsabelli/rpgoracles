import { describe, it, expect, beforeAll } from "vitest";
import prisma from "../prisma/client";
import { getMainTagId } from "./getMainTagId";
import { main_tags } from "@prisma/client";

const param1 = "solo-oracles";
const param2 = "notASubtag";

describe("check to see if the maintag ID is found from the route param string", async () => {
  let mainTags: main_tags[];
  beforeAll(async () => {
    mainTags = await prisma.main_tags.findMany({});
  });
  it("returns the ID when a proper match is found", () => {
    expect(getMainTagId(mainTags, param1)).toBe(1);
  });
  it("returns undefined if a match is not found", () => {
    expect(getMainTagId(mainTags, param2)).toBeUndefined;
  });
});
