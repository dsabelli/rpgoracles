<template>
  <ContainerMain>
    <Nav />
    <Head v-if="mainTags && documents"
      ><Title
        >RPG Oracles |{{ subTags?.tag_name }} {{ mainTags.tag_name }}
        {{ documents.doc_name }}</Title
      ></Head
    >

    <h1 v-if="mainTags && documents">
      {{ subTags?.tag_name }} {{ mainTags.tag_name }} {{ documents.doc_name }}
    </h1>

    <div v-if="metaTables" v-for="t in metaTables">
      <Card
        :metaTable="t"
        :subTag="t.sub_tags"
        :mainTag="t.main_tags"
        :document="t.doc_types"
      />
    </div>
  </ContainerMain>
</template>

<script setup lang="ts">
const params = useRoute().params;
const { main } = params;
const { sub } = params;
const { document } = params;

const { data: documents } = await useFetch(`/api/documents/${document}`);

const { data: mainTags } = await useFetch(`/api/main-tags/${main}`);

const { data: subTags } = await useFetch(`/api/sub-tags/${sub}`);

const { data: metaTables } = await useFetch(`/api/meta-tables/${document}`);

if (!metaTables.value || !mainTags.value || !documents.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
