import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  const body = readBody(e);
  const documents = await prisma.main_tags.findMany({
    where: { user_id: null, id: 3 },
    include: {
      doc_types: true,
    },
  });

  console.log(body);

  return { documents };
});
