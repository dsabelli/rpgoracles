<template>
  <ul v-if="mainTags" class="bg-base-100 w-52 lg:hidden">
    <div class="my-2">
      <NuxtLink class="flex items-center lg:gap-4" to="/"
        ><Logo styles="w-12 h-12" />
        <p class="text-lg">RPG&nbsp;Oracles</p></NuxtLink
      >
    </div>

    <template v-for="mainTag in mainTags">
      <li class="relative border-t-slate-500 border-t mr-4 py-2" tabindex="0">
        <NuxtLink :to="`/tables/${mainTag.tag_path}`"
          ><h3 class="font-bold">
            {{ mainTag.tag_name }}
          </h3></NuxtLink
        >

        <ul class="menu bg-base-100 pl-1" v-if="subTags">
          <template v-for="subTag in subTags">
            <li
              tabindex="0"
              :class="subTag.tag_id === mainTag.id ? '' : 'hidden'"
            >
              <div class="w-full flex justify-between p-2">
                <NuxtLink
                  v-if="subTag.tag_id === mainTag.id"
                  :to="`/tables/${mainTag.tag_path}/${subTag.tag_path}`"
                  >{{ subTag.tag_name }}</NuxtLink
                ><ChevRight />
              </div>
              <ul class="bg-base-100" v-if="documents">
                <template v-for="document in documents">
                  <li
                    tabindex="0"
                    :class="document.subtag_id === subTag.id ? '' : 'hidden'"
                  >
                    <NuxtLink
                      class="py-2"
                      v-if="
                        document.subtag_id === subTag.id &&
                        subTag.tag_id === mainTag.id
                      "
                      :to="`/tables/${mainTag.tag_path}/${subTag.tag_path}/${document.doc_path}`"
                      >{{ document.doc_name }}</NuxtLink
                    >
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>

        <ul class="bg-base-100 menu" v-if="documents">
          <template v-for="document in documents">
            <li
              tabindex="0"
              :class="
                document.subtag_id
                  ? 'hidden'
                  : document.tag_id === mainTag.id
                  ? ''
                  : 'hidden'
              "
            >
              <NuxtLink
                v-if="document.tag_id === mainTag.id"
                :to="`/tables/${mainTag.tag_path}/${document.doc_path}`"
                >{{ document.doc_name }}</NuxtLink
              >
            </li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTagStore } from "~~/stores/TagStore";

const tagsStore = useTagStore();
const docsStore = useDocumentStore();

const { mainTags, subTags } = storeToRefs(tagsStore);
const { documents } = storeToRefs(docsStore);

if (!documents.value || !mainTags.value || !subTags.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Server Error, please try again later",
    fatal: true,
  });
}
</script>

<style scoped></style>
