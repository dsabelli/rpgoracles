<template>
  <div class="drawer max-w-screen-xl mx-auto py-4">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col w-full">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-100">
        <div class="flex-none md:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
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
        <div class="flex-1 px-2 mx-2">
          <NuxtLink to="/">RPG Oracles</NuxtLink>
        </div>
        <div class="flex-none hidden md:block">
          <NavDesktop />
        </div>
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
