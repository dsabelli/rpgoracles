import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const tags = await prisma.sub_tags.findMany({ where: { user_id: null } });
  return tags;
});
