import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const documents = await prisma.doc_types.findMany({});
  return documents;
});
