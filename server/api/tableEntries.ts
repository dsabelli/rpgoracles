import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const tableEntries = await prisma.table_entries.findMany({
    where: { user_id: null },
  });
  return tableEntries;
});
