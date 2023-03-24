import baseUrl from "./baseUrl";
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
      const res = await fetch(baseUrl + "/metaTables");
      const data = await res.json();
      this.metaTables = data;
      this.tablesLoading = false;
    },
  },
});
