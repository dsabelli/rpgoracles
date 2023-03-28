import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const tag = await prisma.main_tags.findFirst({
    where: { tag_path: e.context.params?.tag },
  });
  console.log(tag);

  return tag;
});
