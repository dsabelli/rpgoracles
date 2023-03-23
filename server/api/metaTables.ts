import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const tables = await prisma.meta_tables.findMany({
    where: { user_id: null },
  });
  return {
    api: tables,
  };
});
