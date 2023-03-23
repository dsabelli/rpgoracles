export const useMainStore = defineStore("main", {
  state: () => ({
    tags: [] as any[],
    isLoading: false,
  }),
  getters: {
    totalCount: (state): number => state.tags.length,
  },
  actions: {
    async getTags() {
      this.isLoading = true;
      const res = await fetch("http://localhost:8000/api/mainTags");
      const data = await res.json();
      this.tags = data;
      this.isLoading = false;
    },
  },
});
