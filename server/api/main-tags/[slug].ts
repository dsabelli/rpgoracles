import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  return await prisma.main_tags.findFirst({
    where: { tag_path: e.context.params?.slug },
  });
});
