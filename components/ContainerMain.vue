<template>
  <div class="drawer max-w-screen-xl mx-auto pl-4 lg:pl-12 py-4">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col w-full">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-100 gap-4 pl-0 justify-between">
        <div class="lg:hidden">
          <label for="my-drawer-3" class="hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="">
          <NuxtLink class="flex items-center lg:gap-4" to="/"
            ><img
              src="~/assets/static/logo.svg"
              class="w-16 mt-2 sm:w-24 lg:-ml-2"
            />
            <h2 class="text-xl sm:text-3xl">RPG&nbsp;Oracles</h2></NuxtLink
          >
        </div>
        <div class="hidden lg:block">
          <NavDesktop />
        </div>
        <div class="w-6 sm:w-44"></div>
      </div>
      <!-- Page content here -->
      <slot />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <NavMobile />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
