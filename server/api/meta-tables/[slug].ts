import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    const mainTag = await prisma.main_tags.findFirst({
      where: { tag_path: e.context.params?.slug },
    });
    const subTag = await prisma.sub_tags.findFirst({
      where: { tag_path: e.context.params?.slug },
    });
    const document = await prisma.doc_types.findFirst({
      where: { doc_path: e.context.params?.slug },
    });
    const getTable = () => {
      if (!mainTag && !subTag && !document && e.context.params?.slug)
        return +e.context.params?.slug;
    };
    return await prisma.meta_tables.findMany({
      where: {
        tag_id: mainTag?.id,
        subtag_id: subTag?.id,
        doc_id: document?.id,
        id: getTable(),
      },
      include: {
        main_tags: true,
        sub_tags: true,
        doc_types: true,
      },
    });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
