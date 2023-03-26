<template>
  <NuxtLayout>
    <div class="min-h-screen">
      <NuxtPage />
    </div>
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

<style scoped></style>
