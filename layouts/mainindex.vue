<template>
  <ContainerMain>
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
  </ContainerMain>
</template>

<script setup lang="ts">
const params = useRoute().params;
const { main } = params;

const { data: mainTags } = await useFetch(`/api/main-tags/${main}`);

const { data: metaTables } = await useFetch(`/api/meta-tables/${main}`);

if (!metaTables.value || !mainTags.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
