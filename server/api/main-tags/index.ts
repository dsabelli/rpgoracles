import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  try {
    return await prisma.main_tags.findMany({ where: { user_id: null } });
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
