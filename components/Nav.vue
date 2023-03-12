<template>
  <!-- <div class="navbar bg-base-100 px-0">
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
                <li tabindex="0" v-for="document in documents">
                  <span> -->
  <!-- This NuxtLink is causing the Vue Router Warning -->
  <!-- <NuxtLink
                      v-if="document.subtags.includes(subtag.subtag)"
                      :to="`/tables/${tag.path}/${subtag.subtag}/${document.document}`"
                      >{{
                        document.document.slice(0, 1).toUpperCase() +
                        document.document.slice(1)
                      }}</NuxtLink
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
  </div> -->
  <div class="navbar bg-base-100 px-0">
    <div class="flex-none">
      <NuxtLink to="/">RPG Oracles</NuxtLink>
    </div>
    <div class="z-10">
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
        <li tabindex="0"><NuxtLink to="/generators">Generators</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Document } from "~~/types";
import { NavPaths } from "~~/pages/tables/tables";

const { data: documents } = await useFetch<Document[]>(
  `http://localhost:3000/documents`
);

if (!documents.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
