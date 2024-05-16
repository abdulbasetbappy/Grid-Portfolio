<template>
  <div
    :class="{ dark: isDarkMode }"
    class="2xs:max-w-screen-[345px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl scroll-smooth font-san grid auto-rows-min md:grid-cols-12 2xs:grid-cols-1 2xs:p-2 2xs:m-auto m-2 p-8 gap-3"
  >
    <NuxtLayout name="profile" class="2xs:static md:col-start-1 md:col-end-6 lg:col-span-4 md:sticky md:top-[4.8rem] left-0 h-fit"></NuxtLayout>
    <div
      class="col-span-12 md:col-span-7 lg:col-span-8 md:col-start-6 lg:col-start-5 rounded-xl p-6 bg-white dark:bg-black dark:text-slate-100"
    >
      <!--Title-->
      <div class="">
        <h2 class="text-[40px] font-semibold">
          My Recent Article and Publications
        </h2>
        <p class="text-lg font-normal">
          I'm here to help if you're searching for a product designer to bring
          your idea to life or a design partner to help take your business to
          the next level.
        </p>
      </div>

      <!--Blogs Archive-->
      <div class="grid md:grid-cols-1 lg:grid-cols-2 mt-4">
        <!--single-Blog-->
        <div class="md:col-span-1 p-4">
          <!--single-Blog-Image-->
          <div class="relative">
            <img class="rounded-xl w-full h-[155px]" src="~/assets/Blog02.png" alt="" />
            <p class="absolute bottom-2 left-0 dark:bg-slate-700 rounded-r-md px-5">Web Development</p>
          </div>
          <!--single-Blog-Details-->
          <div class="pt-2">
            <h2 class="text-2xl font-semibold pb-2">Want To Upgrade Your Brain? Stop Doing These 7 Things</h2>
            <div><span class="mr-6"> 15 min read </span><span> Nov 6, 2023</span></div>
          </div>
          
        </div>
        <!--single-Blog-->
        <div class="md:col-span-1 p-4">
          <!--single-Blog-Image-->
          <div class="relative">
            <img class="rounded-xl w-full h-[155px]" src="~/assets/Blog01.jpeg" alt="" />
            <p class="absolute bottom-2 left-0 dark:bg-slate-700 rounded-r-md px-5">Web Development</p>
          </div>
          <!--single-Blog-Details-->
          <div class="pt-2">
            <h2 class="text-2xl font-semibold pb-2">Want To Upgrade Your Brain? Stop Doing These 7 Things</h2>
            <div><span class="mr-6"> 15 min read </span><span> Nov 6, 2023</span></div>
          </div>
        </div>
        <!--single-Blog-->
        <div class="md:col-span-1 p-4">
          <!--single-Blog-Image-->
          <div class="relative">
            <img class="rounded-xl w-full h-[155px]" src="~/assets/Porject01.png" alt="" />
            <p class="absolute bottom-2 left-0 dark:bg-slate-700 rounded-r-md px-5">Web Development</p>
          </div>
          <!--single-Blog-Details-->
          <div class="pt-2">
            <h2 class="text-2xl font-semibold pb-2">Want To Upgrade Your Brain? Stop Doing These 7 Things</h2>
            <div><span class="mr-6"> 15 min read </span><span> Nov 6, 2023</span></div>
          </div>
        </div>
        <!--single-Blog-->
        <div class="md:col-span-1 p-4">
          <!--single-Blog-Image-->
          <div class="relative">
            <img class="rounded-xl w-full h-[155px]" src="~/assets/Blog02.png" alt="" />
            <p class="absolute bottom-2 left-0 dark:bg-slate-700 rounded-r-md px-5">Web Development</p>
          </div>
          <!--single-Blog-Details-->
          <div class="pt-2">
            <h2 class="text-2xl font-semibold pb-2">Want To Upgrade Your Brain? Stop Doing These 7 Things</h2>
            <div><span class="mr-6"> 15 min read </span><span> Nov 6, 2023</span></div>
          </div>
        </div>
        <!--single-Blog-->
        <div class="md:col-span-1 p-4">
          <!--single-Blog-Image-->
          <div class="relative">
            <img class="rounded-xl w-full h-[155px]" src="~/assets/Blog03.jpg" alt="" />
            <p class="absolute bottom-2 left-0 dark:bg-slate-700 rounded-r-md px-5">Web Development</p>
          </div>
          <!--single-Blog-Details-->
          <div class="pt-2">
            <h2 class="text-2xl font-semibold pb-2">Want To Upgrade Your Brain? Stop Doing These 7 Things</h2>
            <div><span class="mr-6"> 15 min read </span><span> Nov 6, 2023</span></div>
          </div>
        </div>
        <!--single-Blog-->
        <div class="md:col-span-1 p-4">
          <!--single-Blog-Image-->
          <div class="relative">
            <img class="rounded-xl w-full h-[155px]" src="~/assets/Project02.png" alt="" />
            <p class="absolute bottom-2 left-0 dark:bg-slate-700 rounded-r-md px-5">Web Development</p>
          </div>
          <!--single-Blog-Details-->
          <div class="pt-2">
            <h2 class="text-2xl font-semibold pb-2">Want To Upgrade Your Brain? Stop Doing These 7 Things</h2>
            <div><span class="mr-6"> 15 min read </span><span> Nov 6, 2023</span></div>
          </div>
        </div>
      </div>
      <!--Pagination-->
      <div class=" flex justify-center items-center gap-4 my-4">
        <button class="dark:bg-slate-600 px-5 py-2 text-lg rounded-xl">Previous</button>
        <button class="dark:bg-slate-600 px-5 py-2 text-lg rounded-xl">Next</button>
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
