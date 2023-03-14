<template>
  <div v-if="dataTable" v-for="t in dataTable">
    <Card :dataTable="t" />
  </div>
</template>

<script setup lang="ts">
import { DataTable } from "~~/types";

const { document } = useRoute().params;

const { data: dataTable } = await useFetch<DataTable[]>(
  `http://localhost:3001/tables/?document=${document}`
);

if (!dataTable.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
