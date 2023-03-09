<template>
  <div class="navbar bg-base-100 px-0">
    <div class="flex-none">
      <NuxtLink to="/">RPG Oracles</NuxtLink>
    </div>
    <div class="z-10">
      <ul class="menu menu-horizontal bg-base-100 rounded-box p-2">
        <li tabindex="0" v-for="table in tables">
          <span
            ><NuxtLink :to="`/tables/${table.pathway}`">
              {{ table.name }}</NuxtLink
            ></span
          >
          <ul class="menu bg-base-100">
            <li tabindex="0" v-for="subTable in table.subTables">
              <span
                ><NuxtLink
                  :to="`/tables/${table.pathway}/${subTable.pathway}`"
                  >{{ subTable.name }}</NuxtLink
                ></span
              >
              <ul class="bg-base-100">
                <li tabindex="0" v-for="subSubTable in subTable.subTables">
                  <span
                    ><NuxtLink
                      :to="`/tables/${table.pathway}/${subTable.pathway}/${subSubTable.pathway}`"
                      >{{ subSubTable.name }}</NuxtLink
                    ></span
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li tabindex="0"><NuxtLink to="/generators">Generators</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tables } from "~~/pages/tables/tables";
</script>

<style scoped></style>
