import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    const subTag = await prisma.sub_tags.findFirst({
      where: { tag_path: e.context.params?.slug },
    });
    return await prisma.sub_meta_tables.findMany({
      where: {
        subtag_id: subTag?.id,
      },
      include: {
        meta_tables: true,
      },
    });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
