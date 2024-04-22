<template>
  <div :class="{ dark: isDarkMode }" class="w-full">
    <div
      class="2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-screen-xs 2xs:max-w-screen-[345px] m-auto md:m-auto 2xl:m-auto grid grid-cols-1 lg:grid-cols-12 sm:mx-16 md:grid-cols-12 p-8 2xs:p-2  font-san gap-4"
    >
      <!--Profile Details-->
      <NuxtLayout name="profile"></NuxtLayout>

      <!--Experience Details-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-1 md:col-span-6 lg:col-span-4 rounded-xl p-6 2xs:p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-3xl 2xs:text-2xl pb-2 font-san font-semibold">
          Work Experience
        </h2>
        <div
          class="flex justify-between items-center mt-2 md:p-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900"
        >
          <div>
            <p class="text-xs">2023 - Present</p>
            <p class="font-semibold text-xl 2xs:text-base xs:text-xl md:text-lg">Frontend Developer</p>
          </div>
          <div>
            <img class="h-8 2xs:h-6" src="~/assets/wetechpro.png" alt="" />
          </div>
        </div>
      </div>

      <!--Expertise-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-2 md:col-span-6 lg:col-span-4 rounded-xl 2xs:p-4 p-6 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-3xl 2xs:text-2xl pb-2 font-san font-semibold">
          My Expert Area
        </h2>
        <div
          class="grid 2xs:mt-2 mt-4 grid-cols-3 grid-rows-2 justify-center items-center gap-3"
        >
          <!--Vue-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:vuejs" class="h-14 w-14 2xs:h-8 2xs:w-8" />
            </div>
            <p class="font-semibold text-slate-300">Vue</p>
          </div>
          <!--Pinia-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:pinia" class="h-14 w-14 2xs:h-8 2xs:w-8" />
            </div>
            <p class="font-semibold text-slate-300">Pinia</p>
          </div>
          <!--Nuxt-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:nuxt-icon" class="h-14 w-14 2xs:h-8 2xs:w-8" />
            </div>
            <p class="text-slate-300 font-semibold">Nuxt</p>
          </div>
          <!--Tailwind CSS-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="logos:tailwindcss-icon"
                class="h-12 w-12 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-300 font-semibold">Tailwind</p>
          </div>
          <!--SCSS-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="vscode-icons:file-type-scss"
                class="h-12 w-12 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-300 font-semibold">scss</p>
          </div>
          <!--MongoDB-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="vscode-icons:file-type-mongo"
                class="h-12 w-12 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-300 font-semibold">MongoDB</p>
          </div>
          <!--NodeJs-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="logos:nodejs-icon-alt"
                class="h-12 w-12 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-300 font-semibold">NodeJs</p>
          </div>
          <!--ExpressJs-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="skill-icons:expressjs-dark"
                class="h-12 w-12 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-300 font-semibold">ExpressJs</p>
          </div>
          <!--Firebase-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:firebase" class="h-12 w-12 2xs:h-8 2xs:w-8" />
            </div>
            <p class="text-slate-300 font-semibold">Firebase</p>
          </div>
        </div>
      </div>

      <!--Recent Projects Details-->
      <div
        class="col-span-12 md:col-span-6 md:row-span-2 lg:col-span-4 rounded-xl p-6 2xs:p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-3xl 2xs:text-2xl pb-2 font-san font-semibold">
            Recent Projects
          </h2>
          <NuxtLink
            to="/works"
            class="text-slate-400 text-lg 2xs:text-base dark:border-slate-400 border-b-2"
          >
            All Projects
            <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
          </NuxtLink>
        </div>
        <div
          class="mt-6 md:mt-4 flex flex-col justify-center items-center gap-6"
        >
          <div
            class="p-6 md:p-4 relative pb-0 md:pb-0 dark:bg-slate-900 rounded-xl"
          >
            <img
              class="rounded-t-xl h-[240px] w-[320px] 2xs:h-[220px]"
              src="~/assets/Porject01.png"
              alt=""
            />
            <p
              class="absolute bottom-6 2xs:bottom-4 left-0 bg-slate-500 p-2 px-4 2xs:px-2 2xs:text-sm rounded-r-xl"
            >
              Blog Website
            </p>
          </div>
          <div
            class="p-6 md:p-4 pb-0 md:pb-0 dark:bg-slate-900 relative rounded-xl"
          >
            <img
              class="rounded-t-xl h-[240px] w-[320px] 2xs:h-[220px]"
              src="~/assets/Project02.png"
              alt=""
            />
            <p
              class="absolute bottom-6 2xs:bottom-4 left-0 bg-slate-500 p-2 px-4 2xs:px-2 2xs:text-sm rounded-r-xl"
            >
              Portfolio
            </p>
          </div>
        </div>
      </div>

      <!--Services Details-->
      <div
        class="col-span-12 md:col-span-6 lg:col-span-5 rounded-xl p-6 2xs:p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <h2 class="text-3xl 2xs:text-2xl font-san pb-2 font-semibold">
          Services I Offered
        </h2>
        <!--MEVN-->
        <div
          class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center items-center md:gap-0 gap-4"
        >
          <div class="text-center text-[80px] font-bold">M</div>
          <div class="text-center text-[80px] font-bold">E</div>
          <div class="text-center text-[80px] font-bold">V</div>
          <div class="text-center text-[80px] font-bold">N</div>
        </div>
        <marquee
          direction="rl"
          behavior="scroll"
          scrollamount="2"
          delay="1s"
          class="py-3 bg-slate-300 rounded-md xl:hidden 2xs:hidden md:block lg:hidden px-2 md:mt-5 font-semibold text-xl text-slate-800"
        >
          Available For Hire 🚀 Crafting Digital Experiences 🎨
        </marquee>
      </div>

      <!--project/experience year/client Count section-->
      <div
        class="col-span-12 md:col-span-6 lg:col-span-7 grid items-center rounded-xl 2xs:p-4 p-6 md:p-3  bg-white dark:bg-black dark:text-slate-200"
      >
        <div
          class="grid grid-cols-3 justify-center gap-6 2xs:gap-2 items-center"
        >
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl p-4 2xs:p-2 2xs:text-sm md:text-base"
          >
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl">3+</span> <br />
            years <br />
            Experience
          </div>
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl p-4 2xs:text-sm 2xs:p-2 md:text-base"
          >
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl">10+</span> <br />
            Projects <br />
            Completed
          </div>
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl p-4 2xs:text-sm 2xs:p-2 md:text-base"
          >
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl">5+</span><br />
            Clients <br />
            Worked
          </div>
        </div>
      </div>

      <!--More About Me-->
      <div
        class="col-span-12 md:col-span-5 lg:col-span-5 rounded-xl 2xs:p-4 p-6 bg-white dark:bg-black dark:text-slate-200"
      >
        <div>
          <div class="flex items-center justify-center">
            <Icon name="Signature" class="h-32 w-80 2xs:h-24 2xs:w-60 md:h-36 md:w-72" />
          </div>
          <div class="flex items-center justify-between">
            <p class="uppercase 2xs:text-sm">Credentials</p>
            <NuxtLink to="/About" class="border-b-2 2xs:text-sm">
              More About Me
              <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- My Recent Blogs -->
      <RecentBlog />

      <!--Let's Work Together-->
      <div
        class="col-span-12 md:col-span-7 md:row-span-1 md:row-start-5 lg:row-end-4 lg:col-span-7 rounded-xl p-6 2xs:p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <marquee
          direction="rl"
          behavior="scroll"
          scrollamount="2"
          delay="1s"
          class="py-3 2xs:py-2 xl:block 2xs:block md:hidden lg:block bg-slate-300 rounded-md px-2 font-semibold 2xs:text-lg text-xl text-slate-800"
        >
          Available For Hire 🚀 Crafting Digital Experiences 🎨
        </marquee>
        <p class="font-bold py-3 md:py-2 text-[50px] 2xs:text-[30px] xs:text-[40px]">
          Let's👋 <br />
          Work Together
        </p>
        <div class="flex justify-end items-center">
          <NuxtLink to="/contact" class="border-b-4 2xs:text-base">
            Let's Talk
            <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
          </NuxtLink>
        </div>
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
