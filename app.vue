<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#B10618 0%,#4a1f80 33%,#4a1f80 66%,#4bfc57 100%)"
    />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const tagStore = useTagStore();
const metaTablesStore = useMetaTablesStore();
const documentsStore = useDocumentStore();
const settingsStore = useSettingsStore();

metaTablesStore.getMetaTables();
tagStore.getMainTags();
tagStore.getSubTags();
documentsStore.getDocuments();

watchEffect(() => {
  useHead({
    htmlAttrs: {
      "data-theme": settingsStore.getTheme,
    },
  });
});
</script>

<style>
#__nuxt {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
}
</style>
