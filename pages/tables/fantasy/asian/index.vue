<template>
  <h2>Asian Fantasy</h2>
  <div v-if="dataTable" v-for="t in dataTable">
    <Card v-if="t.subtag === 'asian'" :dataTable="t" />
  </div>
</template>

<script setup lang="ts">
import { DataTable } from "~~/types";

const { data: dataTable } = await useFetch<DataTable[]>(
  "http://localhost:3001/tables"
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
