import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const tags = await prisma.main_tags.findMany({});
  return {
    api: tags,
  };
});
