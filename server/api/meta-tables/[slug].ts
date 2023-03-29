import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    const mainTag = await prisma.main_tags.findFirst({
      where: { tag_path: e.context.params?.slug },
    });
    const subTag = await prisma.sub_tags.findFirst({
      where: { tag_path: e.context.params?.slug },
    });

    return await prisma.meta_tables.findMany({
      where: {
        tag_id: mainTag?.id,
        subtag_id: subTag?.id,
      },
      include: { main_tags: true, sub_tags: true, doc_types: true },
    });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
