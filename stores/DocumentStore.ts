import baseUrl from "./baseUrl";
import { doc_types } from "@prisma/client";
export const useDocumentStore = defineStore("documents", {
  state: () => ({
    documents: [] as doc_types[],
    docsLoading: false,
  }),
  getters: {},
  actions: {
    async getDocuments() {
      this.docsLoading = true;
      const res = await fetch(baseUrl + "/documents");
      const data = await res.json();
      this.documents = data;
      this.docsLoading = false;
    },
  },
});
