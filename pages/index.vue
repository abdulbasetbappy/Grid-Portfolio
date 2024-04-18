<template>
  <div :class="{ dark: isDarkMode }" class="w-full">
    <div class="max-w-[1500px] m-auto grid grid-cols-12 p-8 font-san gap-4">
      <!--Profile Details-->
      <NuxtLayout name="profile"></NuxtLayout>

      <!--Experience Details-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-1 md:col-span-4 rounded-xl p-6 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-3xl pb-2 font-san font-semibold">Work Experience</h2>
        <div
          class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-900"
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

      <!--Expertise-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-2 md:col-span-4 rounded-xl p-6 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-3xl pb-2 font-san font-semibold">My Expert Area</h2>
        <div
          class="grid mt-4 grid-cols-3 grid-rows-2 justify-center items-center gap-3"
        >
          <!--Vue-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:vuejs" class="h-14 w-14" />
            </div>
            <p class="font-semibold text-slate-300">Vue</p>
          </div>
          <!--Pinia-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:pinia" class="h-14 w-14" />
            </div>
            <p class="font-semibold text-slate-300">Pinia</p>
          </div>
          <!--Nuxt-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:nuxt-icon" class="h-14 w-14" />
            </div>
            <p class="text-slate-300 font-semibold">Nuxt</p>
          </div>
          <!--Tailwind CSS-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:tailwindcss-icon" class="h-12 w-12" />
            </div>
            <p class="text-slate-300 font-semibold">Tailwind</p>
          </div>
          <!--SCSS-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="vscode-icons:file-type-scss" class="h-12 w-12" />
            </div>
            <p class="text-slate-300 font-semibold">scss</p>
          </div>
          <!--MongoDB-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="vscode-icons:file-type-mongo" class="h-12 w-12" />
            </div>
            <p class="text-slate-300 font-semibold">MongoDB</p>
          </div>
          <!--NodeJs-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:nodejs-icon-alt" class="h-12 w-12" />
            </div>
            <p class="text-slate-300 font-semibold">NodeJs</p>
          </div>
          <!--ExpressJs-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="skill-icons:expressjs-dark" class="h-12 w-12" />
            </div>
            <p class="text-slate-300 font-semibold">ExpressJs</p>
          </div>
          <!--Firebase-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:firebase" class="h-12 w-12" />
            </div>
            <p class="text-slate-300 font-semibold">Firebase</p>
          </div>
        </div>
      </div>

      <!--Recent Projects Details-->
      <div
        class="col-span-12 md:col-span-4 md:row-span-2 rounded-xl p-6 bg-white dark:bg-black dark:text-slate-200"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-3xl pb-2 font-san font-semibold">Recent Projects</h2>
          <NuxtLink
            to="/works"
            class="text-slate-400 text-lg dark:border-slate-400 border-b-2"
          >
            All Projects
            <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
          </NuxtLink>
        </div>
        <div class="mt-6 flex flex-col justify-center items-center gap-6">
          <div class="p-6 relative pb-0 dark:bg-slate-900 rounded-xl">
            <img
              class="rounded-t-xl h-[240px] w-[320px]"
              src="~/assets/Porject01.png"
              alt=""
            />
            <p
              class="absolute bottom-6 left-0 bg-slate-500 p-2 px-4 rounded-r-xl"
            >
              Blog Website
            </p>
          </div>
          <div class="p-6 pb-0 dark:bg-slate-900 relative rounded-xl">
            <img
              class="rounded-t-xl h-[240px] w-[320px]"
              src="~/assets/Project02.png"
              alt=""
            />
            <p
              class="absolute bottom-6 left-0 bg-slate-500 p-2 px-4 rounded-r-xl"
            >
              Portfolio
            </p>
          </div>
        </div>
      </div>

      <!--Services Details-->
      <div
        class="col-span-12 md:col-span-5 rounded-xl p-6 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-3xl font-san pb-2 font-semibold">Services I Offered</h2>
        <!--MEVN-->
        <div class="grid grid-cols-4 justify-center items-center gap-4">
          <div class="text-center text-[80px] font-bold">M</div>
          <div class="text-center text-[80px] font-bold">E</div>
          <div class="text-center text-[80px] font-bold">V</div>
          <div class="text-center text-[80px] font-bold">N</div>
        </div>
      </div>

      <!--project/experience year/client Count section-->
      <div
        class="col-span-12 md:col-span-4 grid items-center rounded-xl p-6 bg-white dark:bg-black dark:text-slate-200"
      >
        <div class="grid grid-cols-3 justify-center gap-6 items-center">
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl px-4 py-4"
          >
            <span class="font-bold text-3xl" >3+</span> <br />
            years <br />
            Experience
          </div>
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl px-4 py-4"
          >
            <span class="font-bold text-3xl" >10+</span> <br />
            Projects <br />
            Completed
          </div>
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl px-4 py-4"
          >
            <span class="font-bold text-3xl" >5+</span><br />
            Clients <br />
            Worked
          </div>
        </div>
      </div>

      <!--More About Me-->
      <div
        class="col-span-12 md:col-span-3 rounded-xl p-6 bg-white dark:bg-black dark:text-slate-200"
      >
        <div>
          <Icon name="Signature" class="h-32 w-80" />
          <div class="flex justify-between">
            <p class="uppercase" >Credentials</p>
            <NuxtLink to="/About" class="border-b-2" >
              More About Me
              <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- My Recent Blogs -->
      <RecentBlog/>

      <!--Let's Work Together-->
      <div
        class="col-span-12 md:col-span-4 md:row-span-1 rounded-xl p-6 bg-white dark:bg-black dark:text-slate-200"
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
        <NuxtLink to="/contact" class="border-b-4">
          Let's Talk
          <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
        </NuxtLink>
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
