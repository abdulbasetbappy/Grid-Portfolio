<template>
  <div :class="{ dark: isDarkMode }" class="w-full">
    <div
      class="2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-screen-xs 2xs:max-w-screen-[345px] m-auto md:m-auto 2xl:m-auto grid grid-cols-1 lg:grid-cols-12 sm:mx-16 md:grid-cols-12 p-8 2xs:p-2 font-san gap-4 2xs:gap-2"
    >
      <!--Profile Details-->
      <NuxtLayout name="profile"></NuxtLayout>

      <!--Experience Details-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-1 md:col-span-6 lg:col-span-4 rounded-xl xl:p-6 2xs:p-4 bg-white dark:bg-black dark:text-slate-200"
      >
      <!--Title-->
        <h2 class="xl:text-3xl 2xs:text-2xl lg:text-xl pb-2 font-san font-semibold">
          Work Experience
        </h2>
        <!--First Experience Details-->
        <div
          class="flex justify-between items-center mt-2 md:p-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900"
        >
          <div>
            <p class="text-xs xl:text-lg">2023 - Present</p>
            <p
              class="font-semibold xl:text-xl 2xs:text-base xs:text-xl md:text-lg lg:text-base"
            >
              Frontend Developer
            </p>
          </div>
          <div>
            <img
              class="xl:h-6 2xs:h-6 lg:h-5"
              src="~/assets/wetechpro.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <!--Expertise-->
      <div
        class="col-span-12 md:row-span-1 md:row-start-2 md:col-span-6 lg:col-span-4 rounded-xl 2xs:p-4 xl:p-6 bg-white dark:bg-black dark:text-slate-200"
      >
      <!--Title-->
        <h2 class="xl:text-3xl 2xs:text-2xl lg:text-xl pb-2 font-san font-semibold">
          My Expert Area
        </h2>
        <!--All Expertise Icons-->
        <div
          class="grid 2xs:mt-2 mt-4 grid-cols-3 grid-rows-2 justify-center items-center gap-3"
        >
          <!--Vue-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:vuejs" class="xl:h-14 w-14 2xs:h-8 2xs:w-8" />
            </div>
            <p class="font-semibold text-slate-300">Vue</p>
          </div>
          <!--Pinia-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:pinia" class="xl:h-14 w-14 2xs:h-8 2xs:w-8" />
            </div>
            <p class="font-semibold text-slate-300">Pinia</p>
          </div>
          <!--Nuxt-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:nuxt-icon" class="xl:h-14 w-14 2xs:h-8 2xs:w-8" />
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
                class="xl:h-12 w-12 2xs:h-8 2xs:w-8"
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
                class="xl:h-12 w-12 2xs:h-8 2xs:w-8"
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
                class="xl:h-12 w-12 2xs:h-8 2xs:w-8"
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
                class="xl:h-12 w-12 2xs:h-8 2xs:w-8"
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
                class="xl:h-12 w-12 2xs:h-8 2xs:w-8"
              />
            </div>
            <p class="text-slate-300 font-semibold">ExpressJs</p>
          </div>
          <!--Firebase-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="bg-slate-400 dark:bg-slate-900 py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:firebase" class="xl:h-12 w-12 2xs:h-8 2xs:w-8" />
            </div>
            <p class="text-slate-300 font-semibold">Firebase</p>
          </div>
        </div>
      </div>

      <!--Recent Projects Details-->
      <div
        class="col-span-12 md:col-span-6 md:row-span-2 lg:col-span-4 rounded-xl xl:p-6 2xs:p-4 bg-white dark:bg-black dark:text-slate-200"
      >

        <!--Title-->
        <div class="flex justify-between items-center">
          <h2
            class="xl:text-3xl 2xs:text-2xl lg:text-xl pb-2 font-san font-semibold"
          >
            Recent Projects
          </h2>
          <NuxtLink
            to="/works"
            class="text-slate-400 2xs:text-base lg:text-sm dark:border-slate-400 border-b-2"
          >
            All Projects
            <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
          </NuxtLink>
        </div>

        <!--Projects-->
        <div
          class="mt-6 lg:mt-3 md:mt-4 flex flex-col justify-center items-center gap-6 lg:gap-3"
        >
          <!--Project 01-->
          <div
            class="xl:p-6 md:p-4 relative pb-0 md:pb-0 xl:pb-0 dark:bg-slate-900 rounded-xl"
          >
            <img
              class="rounded-t-xl xl:h-[225px] w-[320px] 2xs:h-[220px] lg:h-[190px]"
              src="~/assets/Porject01.png"
              alt=""
            />
            <p
              class="absolute bottom-6 2xs:bottom-4 left-0 bg-slate-500 p-2 px-4 2xs:px-2 xl:text-sm 2xs:text-sm rounded-r-xl lg:text-xs"
            >
              Blog Website
            </p>
          </div>

          <!--Project 02-->
          <div
            class="xl:p-6 md:p-4 pb-0 md:pb-0 xl:pb-0 dark:bg-slate-900 relative rounded-xl"
          >
            <img
              class="rounded-t-xl xl:h-[225px] w-[320px] 2xs:h-[220px] lg:h-[190px]"
              src="~/assets/Project02.png"
              alt=""
            />
            <p
              class="absolute bottom-6 2xs:bottom-4 left-0 bg-slate-500 p-2 px-4 2xs:px-2 xl:text-sm 2xs:text-sm lg:text-xs rounded-r-xl"
            >
              Portfolio
            </p>
          </div>

        </div>

      </div>

      <!--Services Details-->
      <div
        class="col-span-12 md:col-span-6 lg:col-span-5 rounded-xl xl:p-6 2xs:p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <!--Title-->
        <h2 class="xl:text-3xl 2xs:text-2xl lg:text-xl font-san pb-2 lg:pb-0 font-semibold">
          Services I Offered
        </h2>
        <!--MEVN-->
        <div
          class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center items-center md:gap-0 xl:gap-4"
        >
          <div class="text-center text-[80px] lg:text-[60px] xl:text-[70px] font-bold">M</div>
          <div class="text-center text-[80px] lg:text-[60px] xl:text-[70px] font-bold">E</div>
          <div class="text-center text-[80px] lg:text-[60px] xl:text-[70px] font-bold">V</div>
          <div class="text-center text-[80px] lg:text-[60px] xl:text-[70px] font-bold">N</div>
        </div>
        <!--Only For Small Devices-->
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

      <!--Project/Experience/Client Section-->
      <div
        class="col-span-12 md:col-span-6 lg:col-span-7 grid items-center rounded-xl 2xs:p-4 xl:p-6 md:p-3 lg:p-4 bg-white dark:bg-black dark:text-slate-200"
      >
        <div
          class="grid grid-cols-3 justify-center gap-6 2xs:gap-2 lg:gap-4 items-center"
        >
        <!--Years Experience-->
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl xl:p-4 2xs:p-2 lg:p-4 2xs:text-sm md:text-base xl:text-lg"
          >
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl xl:text-4xl">3+</span>
            <br />
            years <br />
            Experience
          </div>
          <!--Projects Completed-->
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl p-4 lg:p-4 2xs:text-sm 2xs:p-2 xl:text-lg md:text-base"
          >
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl xl:text-4xl">10+</span>
            <br />
            Projects <br />
            Completed
          </div>
          <!--Clients Worked -->
          <div
            class="text-center dark:bg-slate-900 h-full rounded-xl p-4 lg:p-4 2xs:text-sm 2xs:p-2 xl:text-lg md:text-base"
          >
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl xl:text-4xl">5+</span
            ><br />
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
            <Icon
              name="Signature"
              class="h-32 w-80 2xs:h-24 2xs:w-60 md:h-36 md:w-72 lg:h-40 lg:w-80 xl:h-50 xl:w-80 "
            />
          </div>
          <div class="flex items-center justify-between mt-1">
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
      <!--Headline-->
        <marquee
          direction="rl"
          behavior="scroll"
          scrollamount="infinite"
          delay="1s"
          class="xl:py-3 2xs:py-2 xl:block 2xs:block md:hidden lg:block bg-slate-300 rounded-md xl:px-2 font-semibold 2xs:text-lg xl:text-2xl text-slate-800"
        >
          Available For Hire 🚀 Crafting Digital Experiences 🎨
        </marquee>
      <!--Main Content-->
        <p
          class="font-bold xl:py-2 md:py-2 lg:py-2 lg:leading-tight xl:text-[50px] 2xs:text-[30px] xs:text-[40px]"
        >
          Let's👋 <br />
          Work Together
        </p>
        <!--Button-->
        <div class="flex justify-end items-center">
          <NuxtLink to="/contact" class="border-b-2 2xs:text-base lg:text-sm xl:text-base">
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
