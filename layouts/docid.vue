<template>
  <ContainerMain>
    <Head v-if="metaTables"
      ><Title>RPG Oracles | {{ metaTables[0].meta_name }}</Title></Head
    >
    <template v-if="metaTables && tableEntries">
      <Table :metaTable="metaTables[0]" :tableEntries="tableEntries" />
    </template>
  </ContainerMain>
</template>

<script setup lang="ts">
const params = useRoute().params;
const { id } = params;

const { data: metaTables } = await useFetch(`/api/meta-tables/${id}`);

const { data: tableEntries } = await useFetch(`/api/table-entries/${id}`);

if (!metaTables.value || !tableEntries.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
