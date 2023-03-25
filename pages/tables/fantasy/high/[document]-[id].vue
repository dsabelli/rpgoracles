<template>
  <div v-if="getMetaTable(metaTables, id)">
    <Table :dataTable="getMetaTable(metaTables, id)" />
  </div>
</template>

<script setup lang="ts">
import { meta_tables } from ".prisma/client";
import { storeToRefs } from "pinia";

const metaTablesStore = useMetaTablesStore();

const { metaTables } = storeToRefs(metaTablesStore);

const id = +useRoute().params.id;

const getMetaTable = (metaTables: meta_tables[], id: number) => {
  return metaTables.find((m) => m.id === id);
};

if (!metaTables) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
