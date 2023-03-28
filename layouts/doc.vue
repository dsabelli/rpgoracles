<template>
  <div class="max-w-screen-lg mx-auto px-12 py-4">
    <Nav />
    <Head v-if="mainTags.length && subTags.length && documents.length"
      ><Title>RPG Oracles | {{ title }}</Title></Head
    >
    <h1 v-if="mainTags.length && subTags.length && documents.length">
      {{ title }}
    </h1>
    <div v-for="t in metaTables">
      <Card
        v-if="documents.length && t.doc_id === getDocId(documents, document)"
        :metaTable="t"
        :subTag="subTags.find((s) => s.id === t.subtag_id)"
        :mainTag="mainTags.find((m) => m.id === t.tag_id)"
        :document="documents.find((d) => d.id === t.doc_id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const metaTablesStore = useMetaTablesStore();
const tagStore = useTagStore();
const documentsStore = useDocumentStore();

const { metaTables } = storeToRefs(metaTablesStore);
const { mainTags, subTags } = storeToRefs(tagStore);
const { documents } = storeToRefs(documentsStore);

const { document } = useRouter().currentRoute.value.params;
const route = useRouter().currentRoute.value.path;
const title = ref("");

watchEffect(() => {
  title.value = `${
    subTags.value.find((s) => route.includes(s.tag_path))?.tag_name
  }  ${mainTags.value.find((m) => route.includes(m.tag_path))?.tag_name} ${
    documents.value.find((d) => d.doc_path === document)?.doc_name
  }`;
});
if (!metaTables || !subTags || !mainTags || !documents) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
