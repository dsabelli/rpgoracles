import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const body = readBody(e);
  const documents = await prisma.doc_types.findMany({
    where: { user_id: null },
  });

  console.log(body);

  return { documents };
});
