<template>
  <div class="navbar bg-base-100 px-0">
    <div class="flex-none">
      <NuxtLink to="/">RPG Oracles</NuxtLink>
    </div>
    <div class="z-10">
      <ul class="menu menu-horizontal bg-base-100 rounded-box p-2">
        <li tabindex="0" v-for="tag in tags">
          <span
            ><NuxtLink :to="`/tables/${tag.path}`">
              {{ tag.name }}</NuxtLink
            ></span
          >
          <ul class="menu bg-base-100">
            <li tabindex="0" v-for="subtag in subtags">
              <span
                ><NuxtLink
                  v-if="tag.path === subtag.parent"
                  :to="`/tables/${tag.path}/${subtag.subtag}`"
                  >{{ subtag.name }}</NuxtLink
                ></span
              >
              <ul class="bg-base-100">
                <li tabindex="0" v-for="table in dataTable">
                  <span
                    ><NuxtLink
                      v-if="table.subtags.includes(subtag.subtag)"
                      :to="`/tables/${tag.path}/${subtag.subtag}/${table.document}`"
                      >{{ table.document }}</NuxtLink
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
import { Tag, Subtag, Document, DataTable } from "~~/types";
const { data: tags } = await useFetch<Tag[]>(`http://localhost:3000/tags`);
const { data: subtags } = await useFetch<Subtag[]>(
  `http://localhost:3000/subtags`
);
const { data: dataTable } = await useFetch<DataTable[]>(
  `http://localhost:3000/tables`
);

if (!tags.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
