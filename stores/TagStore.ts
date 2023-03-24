import { main_tags, sub_tags } from "@prisma/client";

export const useTagStore = defineStore("tags", {
  state: () => ({
    mainTags: [] as main_tags[],
    subTags: [] as sub_tags[],
    tagsLoading: false,
  }),
  getters: {},
  actions: {
    async getMainTags() {
      this.tagsLoading = true;
      const res = await fetch("http://localhost:8000/api/mainTags");
      const data = await res.json();
      this.mainTags = data;
      this.tagsLoading = false;
    },
    async getSubTags() {
      this.tagsLoading = true;
      const res = await fetch("http://localhost:8000/api/subTags");
      const data = await res.json();
      this.subTags = data;
      this.tagsLoading = false;
    },
  },
});
