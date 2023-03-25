<template>
  <h2>High Fantasy</h2>
  <div v-if="metaTables && subTags" v-for="t in metaTables">
    <Card
      v-if="t.subtag_id === getSubTagId"
      :metaTable="t"
      :subTag="subTags.find((s) => s.id === t.subtag_id)"
      :mainTag="mainTags.find((m) => m.id === t.tag_id)"
      :document="documents.find((d) => d.id === t.doc_id)"
    />
    <p>{{ getSubTagId }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const metaTablesStore = useMetaTablesStore();
const tagStore = useTagStore();
const documentStore = useDocumentStore();

const { metaTables } = storeToRefs(metaTablesStore);
const { mainTags, subTags, getSubTagId } = storeToRefs(tagStore);
const { documents } = storeToRefs(documentStore);

if (!metaTables || !subTags || !mainTags || !documents) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
