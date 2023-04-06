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

metaTablesStore.getMetaTables();
tagStore.getMainTags();
tagStore.getSubTags();
documentsStore.getDocuments();
</script>

<style></style>
