<template v-if="metaTable">
  <div class="overflow-x-auto">
    <table class="table table-compact table-zebra w-full z-0" v-if="metaTable">
      <!-- head -->
      <thead>
        <tr>
          <th>{{ `d${tableEntries.length}` }}</th>
          <th>Result</th>
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
