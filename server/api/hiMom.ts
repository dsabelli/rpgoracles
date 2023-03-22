import { main_tags, Database } from "~~/types";

import { PrismaClient } from "@prisma/client";
export default defineEventHandler((e) => {
  const prisma = new PrismaClient();
  const getMainTags = async () => await prisma.main_tags.findMany();
  let tags = getMainTags();
  return {
    api: tags,
  };
});
