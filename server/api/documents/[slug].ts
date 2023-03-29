import prisma from "~~/prisma/client";

export default defineEventHandler(async (e) => {
  return await prisma.doc_types.findUnique({
    where: { doc_path: e.context.params?.slug },
  });
});
// import prisma from "~~/prisma/client";

// export default defineEventHandler(async (e) => {
//   const body = readBody(e);
//   const id = e.context.params?.id ? +e.context.params.id : undefined;
//   const document = await prisma.doc_types.findUnique({
//     where: { id: id },
//   });

//   console.log(id);

//   return { document };
// });
