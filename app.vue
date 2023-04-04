<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer />
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
