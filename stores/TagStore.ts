import { main_tags, sub_tags } from "@prisma/client";

export const useTagStore = defineStore("tags", {
  state: () => ({
    mainTags: [] as main_tags[],
    subTags: [] as sub_tags[],
    tagsLoading: false,
  }),
  getters: {
    //gets the subtag id for the user's current subpath using the router path
    getSubTagId(): number {
      const id = this.subTags.find((s) => useRoute().path.includes(s.tag_path));
      if (id) {
        return id.id;
      }
      return 0;
    },
    getMainTagId(): number {
      const id = this.mainTags.find((m) =>
        useRoute().path.includes(m.tag_path)
      );
      if (id) {
        return id.id;
      }
      return 0;
    },
  },
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
