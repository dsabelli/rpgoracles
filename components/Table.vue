<template v-if="metaTable">
  <div class="overflow-x-auto pr-4 lg:pr-12">
    <div class="flex justify-between items-center">
      <H1 v-if="metaTable">{{ metaTable.meta_name }}</H1>
      <Modal
        class="mb-4"
        :tableEntries="tableEntries"
        :name="metaTable.meta_name"
      />
    </div>
    <table
      v-if="metaTable && tableEntries"
      class="table table-compact table-zebra w-full z-0"
    >
      <thead>
        <tr>
          <th class="bg-primary">{{ `d${tableEntries.length}` }}</th>
          <th class="bg-primary">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableEntries">
          <th>{{ tableEntries.indexOf(row) + 1 }}</th>
          <td>{{ row.entry_value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { meta_tables, table_entries } from ".prisma/client";

const { metaTable, tableEntries } = defineProps({
  metaTable: { type: Object as PropType<meta_tables>, required: true },
  tableEntries: { type: Object as PropType<table_entries[]>, required: true },
});
</script>

<style scoped></style>
