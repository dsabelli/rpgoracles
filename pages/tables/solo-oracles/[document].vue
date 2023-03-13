<template>
  <div>
    <Card v-if="dataTable" :dataTable="dataTable[0]"></Card>
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
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
