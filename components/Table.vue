<template v-if="dataTable">
  <div class="overflow-x-auto">
    {{ dataTable?.meta_name }}
    <table class="table table-compact table-zebra w-full z-0" v-if="dataTable">
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
import { meta_tables } from ".prisma/client";

const { dataTable } = defineProps({
  dataTable: { type: Object as PropType<meta_tables>, required: false },
});
const getTableEntries = async () => {
  return await $fetch("/api/table-entries");
};
const tableEntries = (await getTableEntries()).filter(
  (t) => t.table_id === dataTable?.id
);
</script>

<style scoped></style>
