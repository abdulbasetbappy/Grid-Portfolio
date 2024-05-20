<template>
  <div :class="{ dark: isDarkMode }" class="w-full">
    <div
      class="2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-screen-xs 2xs:max-w-screen-[345px] m-auto md:m-auto 2xl:m-auto grid grid-cols-1 lg:grid-cols-12 sm:mx-16 md:grid-cols-12 p-8 2xs:p-2 font-san gap-4 2xs:gap-2 xl:gap-3 2xl:gap-4" 
    >
    
      <!--Profile Card Details From Profile Layout-->
      <NuxtLayout name="profile"></NuxtLayout>

      <!--Work Experience Details Section-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-1 md:col-span-6 lg:col-span-4 rounded-xl xl:p-6 2xs:p-4 backdrop-blur-3xl bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200"
      >
      <!--Title-->
        <h2 class="2xl:text-4xl xl:text-3xl 2xs:text-2xl lg:text-xl 2xs:pb-0 md:pb-2 font-san font-semibold">
          Work Experience
        </h2>
        <!--First Experience Details-->
        <div
          class="flex justify-between items-center md:mt-2 2xs:mt-0 md:p-3 p-4 rounded-xl bg-opacity-80  "
        >
          <div>
            <p class="text-xs xl:text-lg 2xl:text-xl">2023 - Present</p>
            <p
              class="font-semibold xl:text-xl 2xl:text-2xl 2xs:text-base xs:text-xl md:text-lg lg:text-base"
            >
              Frontend Developer
            </p>
          </div>
          <div>
            <img
              class="xl:h-6 2xs:h-5 sm:h-6 lg:h-5 2xl:h-7"
              src="~/assets/wetechpro.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <!--Expertise Section-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-2 md:col-span-6 lg:col-span-4 rounded-xl 2xs:p-4 xl:p-6 backdrop-blur-3xl bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200"
      >
      <!--Title-->
        <h2 class="2xl:text-4xl xl:text-3xl 2xs:text-2xl lg:text-xl pb-2 font-san font-semibold">
          My Expert Area
        </h2>
        <!--All Expertise Icons-->
        <div
          class="grid 2xs:mt-2 mt-4 grid-cols-3 grid-rows-2 justify-center items-center gap-3"
        >
          <!--Vue-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:vuejs" class="xl:h-14 2xl:h-16 w-14 2xs:h-8 2xs:w-8" />
            </div>
            <p class="font-semibold 2xs:text-xs sm:text-sm text-slate-400 ">Vue</p>
          </div>
          <!--Pinia-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:pinia" class="xl:h-14 w-14 2xs:h-8 2xl:h-16 2xs:w-8" />
            </div>
            <p class="font-semibold 2xs:text-xs sm:text-sm text-slate-400">Pinia</p>
          </div>
          <!--Nuxt-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:nuxt-icon" class="xl:h-14 w-14 2xl:h-16 2xs:h-8 2xs:w-8" />
            </div>
            <p class="text-slate-400 2xs:text-xs sm:text-sm font-semibold">Nuxt</p>
          </div>
          <!--Tailwind CSS-->
          <div class="flex justify-center items-center flex-col">
            <div
              class=" py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="logos:tailwindcss-icon"
                class="xl:h-12 w-12 2xl:h-14 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-400 2xs:text-xs sm:text-sm font-semibold">Tailwind</p>
          </div>
          <!--SCSS-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="vscode-icons:file-type-scss"
                class="xl:h-12 w-12 2xl:h-14 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-400 2xs:text-xs sm:text-sm font-semibold">scss</p>
          </div>
          <!--MongoDB-->
          <div class="flex justify-center items-center flex-col">
            <div
              class=" py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="vscode-icons:file-type-mongo"
                class="xl:h-12 w-12 2xl:h-14 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-400 2xs:text-xs sm:text-sm font-semibold">MongoDB</p>
          </div>
          <!--NodeJs-->
          <div class="flex justify-center items-center flex-col">
            <div
              class=" py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="logos:nodejs-icon-alt"
                class="xl:h-12 w-12 2xl:h-14 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-400 2xs:text-xs sm:text-sm font-semibold">NodeJs</p>
          </div>
          <!--ExpressJs-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon
                name="skill-icons:expressjs-dark"
                class="xl:h-12 w-12 2xl:h-14 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-400 2xs:text-xs sm:text-sm font-semibold">ExpressJs</p>
          </div>
          <!--Firebase-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:firebase" class="xl:h-12 2xl:h-14 w-12 2xs:h-8 2xs:w-8" />
            </div>
            <p class="text-slate-400 2xs:text-xs sm:text-sm font-semibold">Firebase</p>
          </div>
        </div>
      </div>

      <!--Recent Projects Details Section-->
      <div
        class="col-span-12 md:col-span-6 md:row-span-2 lg:col-span-4 rounded-xl xl:p-6 2xs:p-4 backdrop-blur-3xl bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200"
      >

        <!--Title-->
        <div class="flex justify-between items-center">
          <h2
            class="2xl:text-4xl xl:text-3xl 2xs:text-2xl lg:text-xl pb-2 font-san font-semibold"
          >
            Recent Projects
          </h2>
          <NuxtLink
            to="/works"
            class="dark:text-slate-400 text-slate-600 2xl:text-xl 2xs:text-sm lg:text-sm border-slate-600 dark:border-slate-400 border-b-2"
          >
            All Projects
            <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
          </NuxtLink>
        </div>

        <!--Projects-->
        <div
          class="mt-6 lg:mt-3 md:mt-4 flex flex-col justify-center items-center gap-6 lg:gap-3 2xl:gap-6"
        >
          <!--Project 01-->
          <div
            class="xl:p-6 md:p-4 relative pb-0 md:pb-0 xl:pb-0 bg-opacity-35 bg-slate-400 dark:bg-slate-900 dark:bg-opacity-35 rounded-xl"
          >
            <img
              class="rounded-t-xl 2xl:h-[245px] xl:h-[225px] 2xl:w-[340px] w-[320px] 2xs:h-[220px] lg:h-[190px]"
              src="~/assets/Porject01.png"
              alt=""
            />
            <p
              class="absolute bottom-6 2xs:bottom-4 left-0 text-slate-200 bg-slate-700 p-2 px-4 2xs:px-2 xl:text-sm 2xs:text-sm rounded-r-xl lg:text-xs 2xl:text-xl"
            >
              Blog Website
            </p>
          </div>

          <!--Project 02-->
          <div
            class="xl:p-6 md:p-4 pb-0 md:pb-0 xl:pb-0 bg-opacity-35 bg-slate-400 dark:bg-slate-900 dark:bg-opacity-35 relative rounded-xl"
          >
            <img
              class="rounded-t-xl 2xl:h-[245px] 2xl:w-[340px] xl:h-[225px] w-[320px] 2xs:h-[220px] lg:h-[190px]"
              src="~/assets/Project02.png"
              alt=""
            />
            <p
              class="absolute bottom-6 2xs:bottom-4 left-0 text-slate-200 bg-slate-700 p-2 px-4 2xs:px-2 xl:text-sm 2xs:text-sm lg:text-xs rounded-r-xl 2xl:text-xl"
            >
              Portfolio
            </p>
          </div>

        </div>

      </div>

      <!--Services Details Section Responsive/Design/Code/Efficiency-->
      <div
        class="col-span-12 md:col-span-6 lg:col-span-6 rounded-xl xl:p-6 2xs:p-6 backdrop-blur-3xl grid items-center justify-center bordered shadow-xl bg-slate-200 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200"
      >
        <!--Main Services-->
        <div
          class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center items-center 2xs:gap-3 sm:gap-10 md:gap-8 lg:gap-3 xl:gap-8"
        >
          <div class="text-center font-bold">
            <Icon name="mdi:responsive" class="sm:h-12 sm:w-12 xl:h-16 xl:w-16 2xs:h-10 2xs:w-10" />
            <p class="2xs:text-[14px] md:text-[16px] xl:text-[18px] mt-2 2xs:font-normal sm:font-bold">Responsive</p>
          </div>
          <div class="text-center font-bold">
            <Icon name="iconoir:design-nib" class="sm:h-12 sm:w-12 xl:h-16 xl:w-16 2xs:h-10 2xs:w-10"/>
            <p class="2xs:text-[14px] md:text-[16px] xl:text-[18px] mt-2 2xs:font-normal sm:font-bold">Design</p>
          </div>
          <div class="text-center font-bold">
            <Icon name="ph:terminal-bold" class="sm:h-12 sm:w-12 xl:h-16 xl:w-16 2xs:h-10 2xs:w-10"/>
            <p class="2xs:text-[14px] md:text-[16px] xl:text-[18px] mt-2 2xs:font-normal sm:font-bold">Code</p>
          </div>
          <div class="text-center font-bold">
            <Icon name="material-symbols:network-check-rounded" class="sm:h-12 sm:w-12 2xs:h-10 2xs:w-10 xl:h-16 xl:w-16"/>
            <p class="2xs:text-[14px] md:text-[16px] xl:text-[18px] mt-2 2xs:font-normal sm:font-bold">Efficiency</p>
          </div>
        </div>
        <!--Only For Small Devices-->
        <marquee
          direction="rl"
          behavior="scroll"
          scrollamount="2"
          delay="1s"
          class="py-3 dark:bg-slate-700 bg-slate-300 rounded-md xl:hidden 2xs:hidden md:block lg:hidden px-2 md:mt-5 font-semibold text-xl text-slate-800 dark:text-slate-400"
        >
          Available For Hire 🚀 Crafting Digital Experiences 🎨
        </marquee>
      </div>

      <!-- Total Project/Experience/Client Count Section-->
      <div
        class="col-span-12 md:col-span-6 lg:col-span-6 grid items-center rounded-xl 2xs:p-4 xl:p-6 md:p-3 lg:p-4 backdrop-blur-3xl bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200"
      >
        <div
          class="grid grid-cols-3 justify-center gap-6 2xs:gap-2 lg:gap-4 items-center"
        >
        <!--Years Experience-->
          <div
            class="text-center h-full rounded-xl xl:p-4 2xl:py-8 2xl:text-2xl 2xs:p-2 lg:p-2 2xs:text-sm md:text-base xl:text-lg"
          >
            <span class="font-bold text-3xl 2xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">3+</span>
            <span class="text-md">
              <br />
            years <br />
            Experience
            </span>
          </div>
          <!--Projects Completed-->
          <div
            class="text-center h-full rounded-xl xl:p-4 2xl:py-8 2xl:text-2xl 2xs:p-2 lg:p-2 2xs:text-sm md:text-base xl:text-lg"
          >
            <span class="font-bold text-3xl 2xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">10+</span>
            <span class="text-md">
              <br />
              Projects <br />
              Completed
            </span>
          </div>
          <!--Clients Worked -->
          <div
            class="text-center h-full rounded-xl xl:p-4 2xl:py-8 2xl:text-2xl 2xs:p-2 lg:p-2 2xs:text-sm md:text-base xl:text-lg"
          >
            <span class="font-bold text-3xl 2xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">2+</span>
            <span class="text-md">
              <br />
              Clients <br />
              Worked
            </span>
          </div>
        </div>
      </div>

      <!--More About Me With Signature Section-->
      <div
        class="col-span-12 md:col-span-5 lg:col-span-5 rounded-xl 2xs:p-4 p-6 backdrop-blur-3xl bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 dark:text-slate-200"
      >
        <div class="">
          <!--My Signature-->
          <div class="flex items-center justify-center">
            <Icon
              name="Signature"
              class="h-32 w-80 text-slate-500 2xs:h-24 2xs:w-60 md:h-32 md:w-72 lg:h-40 lg:w-80 xl:h-50 xl:w-80 "
            />
          </div>
          <!--Buttons-->
          <div class="flex items-end justify-between  xl:mt-4 2xl:mt-16">
            <p class="uppercase 2xs:text-sm xl:text-xl text-slate-600 dark:text-slate-400 xl:font-semibold 2xl:text-2xl">Credentials</p>
            <NuxtLink to="/About" class="border-b-2 border-slate-400 text-slate-800 dark:text-slate-400 2xs:text-sm xl:text-xl 2xl:text-xl">
              More About Me
              <Icon name="ph:arrow-elbow-right-light" class="md:h-8 md:w-8 2xs:h-6 2xs:w-6" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- My Recent Blogs Card From RecentBlog Component-->
      <RecentBlog />

      <!--Let's Work Together Section-->
      <div
        class="col-span-12 md:col-span-7 md:row-span-1 md:row-start-5 lg:row-end-4 lg:col-span-7 rounded-xl p-6 2xs:p-4 backdrop-blur-3xl bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 dark:text-slate-200"
      >
      <!--Top Headline-->
        <marquee
          direction="rl"
          behavior="scroll"
          scrollamount="infinite"
          delay="1s"
          class="xl:py-2 2xs:py-2 xl:block 2xs:block md:hidden lg:block bg-slate-400 rounded-md xl:px-2 font-semibold 2xs:text-lg xl:text-2xl 2xl:text-3xl text-slate-800"
        >
          Available For Hire 🚀 Crafting Digital Experiences 🎨
        </marquee>
        <!--Main Content-->
        <p
          class="font-bold xl:pt-2 text-slate-600 dark:text-slate-400 md:pt-2 lg:pt-2 lg:leading-tight xl:text-[46px] 2xl:text-[56px] 2xs:text-[30px] xs:text-[40px]"
        >
          Let's👋 <br />
          Work Together
        </p>
        <!--Button-->
        <div class="flex justify-end items-center">
          <NuxtLink to="/contact" class="border-b-2 border-slate-400 text-slate-800 dark:text-slate-200 2xs:text-sm md:text-base   lg:text-sm xl:text-xl 2xl:text-xl">
            Let's Talk
            <Icon name="ph:arrow-elbow-right-light" class="md:h-8 md:w-8 2xs:w-6 2xs:h-6" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//Import All The Stores
import { useDarkModeStore } from "~/store/darkMood";

// Control DarkMode
const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);
</script>

<style scoped></style>
