<template>
  <div
  :class="{dark:isDarkMode}"
   class="w-full">
    <div
      class=" max-w-[1500px] m-auto grid grid-cols-12 grid-rows-3 p-8 font-san gap-4"
    >
      <!--Profile Details-->
      <NuxtLayout name="profile"></NuxtLayout>

      <!--Experience Details-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-1 md:col-span-4 rounded-md p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-2xl font-san font-semibold">Work Experience</h2>
      </div>

      <!--Expertise-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-2 md:col-span-4 rounded-md p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-2xl font-san font-semibold">My Expert Area</h2>
        <div
          class="grid py-2 grid-cols-3 grid-rows-2 justify-center items-center gap-3"
        >
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:vuejs" class="h-10 w-10" />
            </div>
            <p>Vue</p>
          </div>
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:nuxt-icon" class="h-10 w-10" />
            </div>
            <p>Nuxt</p>
          </div>
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:tailwindcss-icon" class="h-10 w-10" />
            </div>
            <p>Tailwind</p>
          </div>
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="vscode-icons:file-type-scss" class="h-10 w-10" />
            </div>
            <p>scss</p>
          </div>
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="vscode-icons:file-type-mongo" class="h-10 w-10" />
            </div>
            <p>MongoDB</p>
          </div>
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:nodejs-icon-alt" class="h-10 w-10" />
            </div>
            <p>NodeJs</p>
          </div>
        </div>
      </div>

      <!--Recent Projects Details-->
      <div
        class="col-span-12 md:col-span-4 md:row-span-2 rounded-md p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-san font-semibold">Recent Projects</h2>
          <a href="/work" class="text-slate-500 border-b-2">
            All Projects
            <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
          </a>
        </div>
      </div>
      <!--Services Details-->
      <div
        class="col-span-12 md:col-span-8 md:row-span-1 rounded-md p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-2xl font-san font-semibold">Services I Offered</h2>
      </div>
      <!--Let's Work Together-->
      <div
        class="col-span-12 md:col-span-4 md:row-span-1 rounded-md p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <marquee
          direction="rl"
          behavior="scroll"
          scrollamount="2"
          delay="1s"
          class="py-3 bg-slate-300 rounded-md px-2 font-semibold text-xl text-slate-800"
        >
          Available For Hire 🚀 Crafting Digital Experiences 🎨
        </marquee>
        <p class="font-bold py-3 text-[50px]">
          Let's👋 <br />
          Work Together
        </p>
        <a href="/contact" class="border-b-4">
          Let's Talk
          <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from '~/store/darkMood'

const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.darkMode)
</script>

<style scoped></style>
