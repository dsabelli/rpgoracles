import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    return await prisma.table_entries.findMany({
      where: { user_id: null },
    });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
