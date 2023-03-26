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
      const data = await $fetch("/api/mainTags");
      this.mainTags = data;
      this.tagsLoading = false;
    },
    async getSubTags() {
      this.tagsLoading = true;
      const data = await $fetch("/api/subTags");
      this.subTags = data;
      this.tagsLoading = false;
    },
  },
});
