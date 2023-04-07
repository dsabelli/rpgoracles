<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
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

<style></style>
