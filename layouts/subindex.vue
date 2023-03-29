<template>
  <div class="max-w-screen-lg mx-auto px-12 py-4">
    <Nav />
    <Head v-if="mainTags && subTags"
      ><Title
        >RPG Oracles |{{ subTags.tag_name }} {{ mainTags.tag_name }}</Title
      ></Head
    >

    <h1 v-if="mainTags && subTags">
      {{ subTags.tag_name }} {{ mainTags.tag_name }}
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
const subSlug = route.split("/").pop();
const mainSlug = route.split("/").slice(-2).reverse().pop();

const { data: mainTags } = await useFetch(`/api/main-tags/${mainSlug}`);

const { data: subTags } = await useFetch(`/api/sub-tags/${subSlug}`);

const { data: metaTables } = await useFetch(`/api/meta-tables/${subSlug}`);

if (!metaTables || !mainTags || !subTags) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
