import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const documents = await prisma.doc_types.findMany({
    where: { user_id: null },
  });

  return documents;
});
