<template>
    <div
      :class="{ dark: isDarkMode }"
      class="max-w-[1500px] scroll-smooth font-san m-auto grid grid-cols-12 grid-rows-1 p-8 gap-4"
    >
      <NuxtLayout name="profile" class="sticky top-20 left-0 h-fit"></NuxtLayout>
      <div
        class="col-span-12 md:col-span-8 rounded-xl p-6 bg-white dark:bg-slate-900 dark:text-slate-100"
      >
        <!--Title-->
        <div class="">
          <h2 class="text-[40px] font-semibold">
            Check Out My Latest Projects 
          </h2>
          <p class="text-lg font-normal">
            I'm here to help if you're searching for a product designer to bring
            your idea to life or a design partner to help take your business to
            the next level.
          </p>
        </div>
  
        <!--Blogs Archive-->
        <div class="grid md:grid-cols-2 mt-4">
          <!--single-Blog-->
          <div class="md:col-span-1 p-4">
            <!--single-Blog-Image-->
            <div class="relative">
              <img class="rounded-xl" src="~/assets/Blog02.png" alt="" />
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
              <img class="rounded-xl" src="~/assets/Blog01.jpeg" alt="" />
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
              <img class="rounded-xl h-64 w-full" src="~/assets/Porject01.png" alt="" />
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
              <img class="rounded-xl  h-64 w-full" src="~/assets/Blog02.png" alt="" />
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
              <img class="rounded-xl  h-64 w-full" src="~/assets/Blog03.jpg" alt="" />
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
              <img class="rounded-xl  h-64 w-full" src="~/assets/Project02.png" alt="" />
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
  