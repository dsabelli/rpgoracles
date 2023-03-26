import { doc_types } from "@prisma/client";

export const getDocId = (documents: doc_types[], param: string | string[]) => {
  const doc = documents.find((d) => d.doc_path === param);
  return doc?.id;
};
