<template>
  <div class="max-w-screen-lg mx-auto px-12 py-4">
    <Nav />
    <Head v-if="mainTags"
      ><Title>RPG Oracles | {{ mainTags.tag_name }}</Title></Head
    >

    <h1 v-if="mainTags">{{ mainTags.tag_name }}</h1>

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
const slug = route.split("/").pop();

const { data: mainTags } = await useFetch(`/api/main-tags/${slug}`);

const { data: metaTables } = await useFetch(`/api/meta-tables/${slug}`);

if (!metaTables || !mainTags) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
