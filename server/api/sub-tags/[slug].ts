import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    return await prisma.sub_tags.findFirst({
      where: { tag_path: e.context.params?.slug },
    });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
