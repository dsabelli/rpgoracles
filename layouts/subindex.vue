<template>
  <div class="max-w-screen-lg mx-auto px-12 py-4">
    <Nav />
    <Head v-if="mainTags.length && subTags.length"
      ><Title>RPG Oracles | {{ title }}</Title></Head
    >
    <h1 v-if="mainTags.length && subTags.length">{{ title }}</h1>
    <div
      v-if="
        metaTables.length &&
        mainTags.length &&
        subTags.length &&
        documents.length
      "
      v-for="t in metaTables"
    >
      <Card
        v-if="t.subtag_id === getSubTagId(subTags, route)"
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
import { getSubTagId } from "~~/composables/getSubTagId";
const metaTablesStore = useMetaTablesStore();
const tagStore = useTagStore();
const documentsStore = useDocumentStore();

const { metaTables } = storeToRefs(metaTablesStore);
const { mainTags, subTags } = storeToRefs(tagStore);
const { documents } = storeToRefs(documentsStore);

const route = useRouter().currentRoute.value.path;
const title = ref("");

watchEffect(() => {
  title.value = `${
    subTags.value.find((s) => route.includes(s.tag_path))?.tag_name
  } ${mainTags.value.find((m) => route.includes(m.tag_path))?.tag_name}`;
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
