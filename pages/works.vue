<template>
  <div
    :class="{ dark: isDarkMode }"
    class="2xs:max-w-screen-[345px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl scroll-smooth font-san grid auto-rows-min md:grid-cols-12 2xs:grid-cols-1 2xs:p-2 2xs:m-auto m-2 p-8 gap-3 "
  >
    <NuxtLayout name="profile" class="2xs:static md:col-start-1 md:col-end-6 lg:col-span-4 md:sticky md:top-[4.8rem] left-0 h-fit"></NuxtLayout>
    <div
      class="col-span-12 md:col-span-7 lg:col-span-8 md:col-start-6 lg:col-start-5 rounded-xl p-6 backdrop-blur-3xl shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 dark:text-slate-100"
    >
      <!--Title-->
      <div class="">
        <h2 class="text-[40px] font-semibold">
          My Recent Projects
        </h2>
        <p class="text-lg font-normal">
          I'm here to help if you're searching for a product designer to bring
          your idea to life or a design partner to help take your business to
          the next level.
        </p>
      </div>

      <!--Project Archive-->
      <div class="grid grid-cols-1 p-8 pt-0 mt-4">
        <!--single-Project-->
        <div class="md:col-span-1 p-4">
          <!--single-Blog-Image-->
          <div class="relative">
            <img class="rounded-xl w-full h-[355px]" src="~/assets/Porject01.png" alt="" />
            <p class="absolute bottom-2 left-0 dark:bg-slate-700 rounded-r-md px-5">Web Development</p>
          <!--single-Blog-Details-->
          <div class="absolute top-0 cursor-pointer gap-4 left-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:transition-all hover:duration-700 hover:ease-in-out rounded-lg hover:bg-slate-900 hover:bg-opacity-30 w-full h-full">
            <NuxtLink to="" class="bg-slate-700 px-3 py-2 rounded-md" ><Icon name="mdi:eye-outline"/> Live Demo  </NuxtLink>
            <NuxtLink to="" class="bg-slate-700 px-3 py-2 rounded-md" > <Icon name="tdesign:terminal"/> See Code</NuxtLink>
          </div>
          </div>
        
        </div>


      </div>
      <!--Pagination-->
      <div class=" flex justify-center items-center gap-4 my-4">
        <button class="dark:bg-slate-600 px-5 py-2 text-lg rounded-xl"><Icon name="material-symbols:arrow-left-alt-rounded" /></button>
        <button class="dark:bg-slate-600 px-5 py-2 text-lg rounded-xl">
          <Icon name="material-symbols:arrow-right-alt-rounded" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "~/store/darkMood";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);
</script>

<style scoped></style>
