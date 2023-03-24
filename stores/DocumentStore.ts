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
      const data = await $fetch("/api/documents");
      this.documents = data;
      this.docsLoading = false;
    },
  },
});
