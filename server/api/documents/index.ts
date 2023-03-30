import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    return await prisma.doc_types.findMany({
      where: { user_id: null },
    });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
