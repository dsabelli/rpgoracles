export const useSettingsStore = defineStore("settings", {
  state: () => ({
    theme: "dark",
  }),
  getters: {
    getTheme(): string {
      return this.theme;
    },
  },
  actions: {
    changeTheme() {
      this.theme === "dark" ? (this.theme = "light") : (this.theme = "dark");
    },
  },
});
