<template>
  <div>
    <Card
      v-if="dataTable && subtags"
      :subtags="subtags"
      :dataTable="dataTable[0]"
    ></Card>
  </div>
</template>

<script setup lang="ts">
import { DataTable, Subtag } from "~~/types";

const { document } = useRoute().params;
const { data: dataTable } = await useFetch<DataTable[]>(
  `http://localhost:3000/tables/?document=${document}`
);
const { data: subtags } = await useFetch<Subtag[]>(
  `http://localhost:3000/subtags`
);
if (!dataTable.value || !subtags.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
