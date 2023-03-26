<template>
  <h2>High Fantasy</h2>
  <div v-for="t in metaTables">
    <Card
      v-if="t.doc_id === getDocId(documents, document)"
      :metaTable="t"
      :subTag="subTags.find((s) => s.id === t.subtag_id)"
      :mainTag="mainTags.find((m) => m.id === t.tag_id)"
      :document="documents.find((d) => d.id === t.doc_id)"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const metaTablesStore = useMetaTablesStore();
const tagStore = useTagStore();
const documentStore = useDocumentStore();

const { metaTables } = storeToRefs(metaTablesStore);
const { mainTags, subTags } = storeToRefs(tagStore);
const { documents } = storeToRefs(documentStore);

const { document } = useRoute().params;

if (!metaTables || !subTags || !mainTags || !documents) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
