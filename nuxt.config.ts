import { defineNuxtConfig } from "nuxt/config";
import { acceptHMRUpdate } from "pinia";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
  ],
  devServer: { port: 8000 },
  imports: {
    dirs: ["stores"],
  },
  app: {
    head: {
      title: "RPG Oracles",
    },
  },
});
