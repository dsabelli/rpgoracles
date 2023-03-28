import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    const tag = await prisma.main_tags.findFirst({
      where: { tag_path: e.context.params?.slug },
    });
    return await prisma.meta_tables.findMany({
      where: {
        tag_id: tag?.id,
      },
      include: { main_tags: true, sub_tags: true, doc_types: true },
    });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
