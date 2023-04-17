<template>
  <ContainerMain>
    <Head v-if="mainTags && subTags"
      ><Title
        >RPG Oracles |{{ subTags.tag_name }} {{ mainTags.tag_name }}</Title
      ></Head
    >

    <H1 v-if="mainTags && subTags">
      {{ subTags.tag_name }} {{ mainTags.tag_name }}
    </H1>

    <CardGrid>
      <template v-if="metaTables" v-for="a in arr">
        <template v-for="t in a">
          <Card
            :metaTable="t"
            :subTag="t.sub_tags"
            :mainTag="t.main_tags"
            :document="t.doc_types"
        /></template>
      </template>
    </CardGrid>
  </ContainerMain>
</template>

<script setup lang="ts">
import { meta_tables } from ".prisma/client";

const params = useRoute().params;
const { main } = params;
const { sub } = params;

const { data: mainTags } = await useFetch(`/api/main-tags/${main}`);

const { data: subTags } = await useFetch(`/api/sub-tags/${sub}`);

const { data: test } = await useFetch(`/api/sub-meta-tables/${sub}`);
const arr = ref([] as meta_tables[]);
test.value?.forEach(async (val) => {
  const { data: metaTables } = await useFetch(
    `/api/meta-tables/${val.metatable_id}`
  );
  arr.value.push(metaTables.value);
});

const { data: metaTables } = await useFetch(`/api/meta-tables/${sub}`);

if (!metaTables.value || !mainTags.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
