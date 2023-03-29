<template>
  <div class="max-w-screen-lg mx-auto px-12 py-4">
    <Nav />
    <Head v-if="mainTags && subTags && documents"
      ><Title
        >RPG Oracles |{{ subTags.tag_name }} {{ mainTags.tag_name }}
        {{ documents.doc_name }}</Title
      ></Head
    >

    <h1 v-if="mainTags && subTags && documents">
      {{ subTags.tag_name }} {{ mainTags.tag_name }} {{ documents.doc_name }}
    </h1>

    <div v-if="metaTables" v-for="t in metaTables">
      <Card
        :metaTable="t"
        :subTag="t.sub_tags"
        :mainTag="t.main_tags"
        :document="t.doc_types"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRouter().currentRoute.value.path;
const docSlug = route.split("/").pop();
const subSlug = route.split("/").slice(-2).reverse().pop();
const mainSlug = route.split("/").slice(-3).reverse().pop();

const { data: documents } = await useFetch(`/api/documents/${docSlug}`);

const { data: mainTags } = await useFetch(`/api/main-tags/${mainSlug}`);

const { data: subTags } = await useFetch(`/api/sub-tags/${subSlug}`);

const { data: metaTables } = await useFetch(`/api/meta-tables/${docSlug}`);

if (!metaTables || !mainTags || !subTags || !documents) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
