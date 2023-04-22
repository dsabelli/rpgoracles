<template>
  <Suspense>
    <template #default>
      <div
        class="drawer max-w-screen-xl mx-auto bg-base-100 pl-4 lg:pl-12 py-4 h-fit min-h-screen"
      >
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col w-full z-20 h-full">
          <!-- Navbar -->
          <div
            class="w-full grid grid-cols-8 justify-items-center items-center bg-base-100 gap-4 pl-0"
          >
            <div class="lg:hidden col-span-1">
              <label for="my-drawer-3" class="hover:cursor-pointer">
                <MenuIcon />
              </label>
            </div>

            <NuxtLink
              class="flex items-center lg:gap-4 col-span-6 lg:col-span-2"
              to="/"
            >
              <Logo styles="w-16 h-16 mt-2 sm:w-24 sm:h-24 lg:-ml-2" />

              <p class="text-xl sm:text-2xl">RPG&nbsp;Oracles</p></NuxtLink
            >

            <div class="hidden lg:block w-full lg:col-span-5">
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
    <template #fallback><h2 class="text-5xl">Loading...</h2></template>
  </Suspense>
  <Footer />
</template>

<script setup lang="ts"></script>

<style scoped></style>
