import { meta_tables } from "@prisma/client";
export const useMetaTablesStore = defineStore("metaTables", {
  state: () => ({
    metaTables: [] as meta_tables[],
    tablesLoading: false,
  }),
  getters: {},
  actions: {
    async getMetaTables() {
      this.tablesLoading = true;
      const data = await $fetch("/api/meta-tables");
      this.metaTables = data;
      this.tablesLoading = false;
    },
  },
});
