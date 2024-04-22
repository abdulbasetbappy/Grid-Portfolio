<template>
  <div
    :class="{ dark: isDarkMode }"
    class="max-w-[1500px] scroll-smooth font-san m-auto grid grid-cols-12 grid-rows-1 p-8 gap-4"
  >
    <NuxtLayout name="profile" class="sticky top-20 left-0 h-fit"></NuxtLayout>
    <div
      class="col-span-12 md:col-span-8 rounded-xl bg-white dark:bg-transparent dark:text-slate-100"
    >
      <!--About Me Block-->
      <div class="dark:bg-slate-900 p-6 rounded-xl">
        <!--Title-->
        <div class="flex justify-between items-center">
          <h2 class="text-3xl font-bold">
            Hi, This Is <span class="text-blue-400"> Cris Rayaan </span>👋
          </h2>
          <div class="bg-slate-800 py-3 px-5 rounded-xl text-xl text-slate-100">
          <div class="relative inline-flex">
              <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div class="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
              <div class="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
          <p class="inline ml-2">Available For Hire</p>
          </div>
        </div>
        <!--Description-->
        <div class="grid grid-cols-6 mt-4 gap-5 grid-rows-2">
          <div class="md:col-span-4 row-start-1">
            <p class="font-semibold text-lg">
              A Passionate Full Stack Developer 🖥️ & Product Designer having 12
              years of Experiences over 24+ Country Worldwide. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Quos, architecto?
            </p>
          </div>
          <div class="md:col-span-4 flex row-start-2 gap-4">
            <div
              class="flex flex-col justify-center items-center gap-2 bg-slate-600 rounded-xl p-2"
            >
              <span class="text-[60px]">40+</span>
              <span>Year of Experience</span>
            </div>
            <div
              class="flex flex-col justify-center items-center gap-2 bg-slate-600 rounded-xl p-2"
            >
              <span class="text-[60px]">40+</span>
              <span>Year of Experience</span>
            </div>
            <div
              class="flex flex-col justify-center items-center gap-2 bg-slate-600 rounded-xl p-2"
            >
              <span class="text-[60px]">40+</span>
              <span>Year of Experience</span>
            </div>
          </div>
          <div class="col-span-4 row-span-4 row-start-1">
            <img class="h-full" src="~/assets/Blog01.jpeg" alt="" />
          </div>
        </div>
      </div>



      <!-- All Details -->
      <div class="dark:bg-slate-900 p-6 my-4 rounded-xl">
        <!--Details-->
        <div class="grid grid-cols-12 gap-6 h-fit grid-rows-2">
          <!--Experience-->
          <div class="md:col-span-7 row-start-1">
            <h2 class="text-3xl auto-cols-min font-semibold">Experience</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            >
              <div>
                <p>2023 - Present</p>
                <p class="font-semibold text-xl">Frontend Developer</p>
              </div>
              <div>
                <img class="h-8" src="~/assets/wetechpro.png" alt="" />
              </div>
            </div>
          </div>
          <!--Certification-->
          <div class="md:col-span-7 row-start-2 gap-4">
            <h2 class="text-3xl font-semibold">Certification</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            >
              <div class="w-[70%]">
                <p>2023 - 2024</p>
                <p class="font-semibold text-xl">Frontend Developer</p>
              </div>
              <div class="w-[30%]">
                <img class="h-8" src="~/assets/ostad.png" alt="" />
              </div>
            </div>
          </div>
          <!--Education-->
          <div class="col-span-5 row-span-4 row-start-1">
            <h2 class="text-3xl font-semibold">Education</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            >
              <div class="w-full">
                <p>2010 - 2018</p>
                <p class="font-semibold text-xl">Zilla School - Jamalpur</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            >
              <div class="w-full">
                <p>2018 - 2020</p>
                <p class="font-semibold text-xl">BAUC - Mymensingh</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            >
              <div class="w-full">
                <p>2020 - 2025</p>
                <p class="font-semibold text-xl">University of Dhaka</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Tools That I Use -->
      <div class="dark:bg-slate-900 p-6 my-4 rounded-xl">
        <!--Details-->
        <div class="grid grid-cols-12 gap-6 h-fit grid-rows-2">
          <!--Frontend-->
          <div class="md:col-span-6 row-start-1">
            <h2 class="text-3xl auto-cols-min font-semibold">Frontend</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            ></div>
          </div>
          <!--Backend-->
          <div class="md:col-span-6 row-start-1 gap-4">
            <h2 class="text-3xl font-semibold">Backend</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            ></div>
          </div>
          <!--Other-->
          <div class="col-span-12 row-span-4 row-start-2">
            <h2 class="text-3xl font-semibold">Other Tools</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            ></div>
          </div>
        </div>
      </div>

      <!-- Sig & Marquee -->
      <div class="dark:bg-transparent my-4 rounded-xl">
        <!--Details-->
        <div class="grid grid-cols-12 gap-6 h-full grid-rows-1">
          <!--Signature-->
          <div class="md:col-span-5 row-start-1">
            <div
              class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            >
              <Icon name="Signature" class="h-20 w-80" />
            </div>
          </div>
          <!--Marquee-->
          <div class="md:col-span-7 row-start-1">
            <div
              class="p-4 rounded-xl flex items-center justify-center h-full bg-slate-50 dark:bg-slate-800"
            >
              <marquee
                direction="rl"
                behavior="scroll"
                scrollamount="2"
                delay="1s"
                class="py-3 rounded-md px-2 font-semibold text-3xl text-slate-400"
              >
                Available For Hire 🚀 Crafting Digital Experiences 🎨
              </marquee>
            </div>
          </div>
        </div>
      </div>


      <!-- My Recent Blogs -->
      <RecentBlog />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "~/store/darkMood";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);
</script>

<style scoped></style>
