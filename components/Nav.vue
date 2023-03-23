<template>
  <div class="navbar bg-base-100 px-0 max-w-screen-lg justify-between">
    <div class="flex-none">
      <NuxtLink to="/">RPG Oracles</NuxtLink>
    </div>
    <div class="w-full flex justify-center z-10">
      <ul class="menu menu-horizontal bg-base-100 rounded-box p-2">
        <li tabindex="0" v-for="navPath in NavPaths">
          <span
            ><NuxtLink :to="`/tables/${navPath.pathway}`">
              {{ navPath.name }}</NuxtLink
            ></span
          >
          <ul class="menu bg-base-100">
            <li tabindex="0" v-for="subPath in navPath.subPathways">
              <span
                ><NuxtLink
                  :to="`/tables/${navPath.pathway}/${subPath.pathway}`"
                  >{{ subPath.name }}</NuxtLink
                ></span
              >
              <ul class="bg-base-100 z-20">
                <li tabindex="0" v-for="document in documents">
                  <span
                    :class="
                      document.subtag.includes(subPath.pathway) ? '' : 'hidden'
                    "
                    ><NuxtLink
                      :to="`/tables/${navPath.pathway}/${subPath.pathway}/${document.document}`"
                      >{{ document.name }}</NuxtLink
                    ></span
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Document } from "~~/types";
import { NavPaths } from "~~/tables";

const { data: documents } = await useFetch<Document[]>(
  `http://localhost:3001/documents`
);

if (!documents.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
