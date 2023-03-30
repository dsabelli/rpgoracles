import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    return await prisma.table_entries.findMany({
      where: {
        table_id: e.context.params?.slug ? +e.context.params?.slug : undefined,
      },
    });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
