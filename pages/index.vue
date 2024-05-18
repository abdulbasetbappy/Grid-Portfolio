<template>
  <!--Background OverLays-->
  <div class="w-[400px] 2xs:w-[200px] sm:w-[350px] md:w-[200px] lg:w-[350px] h-[800px] md:h-[600px] lg:h-[800px] rotate-[30deg] opacity-75 2xs:opacity-90 bg-gradient-to-r from-red-600 to-purple-600 rounded-[100%] absolute top-0 left-[5%] xs:left-[20%] md:left-[15%] sm:left-[25%] blur-[90px] 2xs:blur-[60px] translate-x-[-50px] translate-y-[-100px]"></div>

  <div class="w-[600px] 2xs:w-[250px] sm:w-[350px] md:w-[250px] h-[800px] 2xs:h-[450px] sm:h-[550px] md:h-[300px] lg:h-[500px] rotate-45 xs:rotate-12 opacity-35 2xs:opacity-85 bg-gradient-to-r from-red-600 to-purple-600 rounded-[100%] absolute top-[60%] xs:top-[70%] md:top-[10%] left-[25%] 2xs:left-[5%] xs:left-[30%] md:left-[50%] lg:left-[65%] blur-[90px] translate-x-[-30px] lg:translate-y-[-30px]"></div>

  <div class="w-[300px] 2xs:w-[150px] sm:w-[200px] h-[300px] 2xs:h-[500px] rotate-90 opacity-95 bg-gradient-to-r from-red-600 to-purple-600 rounded-[100%] absolute top-[20%] 2xs:top-[130%] md:top-[50%] xl:top-[60%] left-[60%] 2xs:left-[15%] sm:left-[15%] xs:left-[45%] md:left-[15%] lg:left-[35%] xl:left-[45%] blur-[90px] 2xs:blur-[60px] translate-x-[-50px] translate-y-[-50px]"></div>

  <div class="w-[400px] 2xs:w-[180px] sm:w-[300px] h-[500px] 2xs:h-[600px] lg:h-[500px] rotate-90 2xs:rotate-45 lg:rotate-[60] opacity-35 2xs:opacity-90 bg-gradient-to-r from-red-600 to-purple-600 rounded-[100%] absolute top-[160%] 2xs:top-[190%] sm:top-[175%] md:top-[70%] lg:top-[75%] xl:top-[90%] left-[10%] xs:left-[36%] sm:left-[25%] md:left-[45%] lg:left-[60%] lg:blur-[90px] 2xs:blur-[70px] translate-x-[-50px] translate-y-[-50px]"></div>

  <div class="w-[300px] h-[700px] 2xs:h-[950px] md:h-[820px] lg:h-[550px] xl:h-[750px] rotate-90 xs:-rotate-12 2xs:rotate-6 md:-rotate-45 opacity-55 2xs:opacity-85 bg-gradient-to-r from-red-600 to-purple-600 rounded-[100%] absolute top-[140%] 2xs:top-[245%] md:top-[100%] lg:top-[80%] xl:top-[90%] left-[60%] 2xs:left-[15%] xs:left-[30%] sm:left-[10%] blur-[90px] 2xs:blur-[30px] translate-x-[-30px] translate-y-[-50px]"></div>


  <!--Main Home Page-->
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
        <h2 class="2xl:text-4xl xl:text-3xl 2xs:text-2xl lg:text-xl pb-2 font-san font-semibold">
          Work Experience
        </h2>
        <!--First Experience Details-->
        <div
          class="flex justify-between items-center mt-2 md:p-3 p-4 rounded-xl bg-opacity-80  "
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
              class="xl:h-6 2xs:h-6 lg:h-5 2xl:h-7"
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
            <p class="font-semibold text-slate-400 ">Vue</p>
          </div>
          <!--Pinia-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:pinia" class="xl:h-14 w-14 2xs:h-8 2xl:h-16 2xs:w-8" />
            </div>
            <p class="font-semibold text-slate-400">Pinia</p>
          </div>
          <!--Nuxt-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="logos:nuxt-icon" class="xl:h-14 w-14 2xl:h-16 2xs:h-8 2xs:w-8" />
            </div>
            <p class="text-slate-400 font-semibold">Nuxt</p>
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
            <p class="text-slate-400 font-semibold">Tailwind</p>
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
            <p class="text-slate-400 font-semibold">scss</p>
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
            <p class="text-slate-400 font-semibold">MongoDB</p>
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
            <p class="text-slate-400 font-semibold">NodeJs</p>
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
            <p class="text-slate-400 font-semibold">ExpressJs</p>
          </div>
          <!--Firebase-->
          <div class="flex justify-center items-center flex-col">
            <div
              class="py-3 flex justify-center w-full rounded-md"
            >
              <Icon name="devicon:firebase" class="xl:h-12 2xl:h-14 w-12 2xs:h-8 2xs:w-8" />
            </div>
            <p class="text-slate-400 font-semibold">Firebase</p>
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
            class="dark:text-slate-400 text-slate-600 2xl:text-xl 2xs:text-base lg:text-sm border-slate-600 dark:border-slate-400 border-b-2"
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
              class="absolute bottom-6 2xs:bottom-4 left-0 text-slate-200 bg-slate-500 p-2 px-4 2xs:px-2 xl:text-sm 2xs:text-sm rounded-r-xl lg:text-xs 2xl:text-xl"
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
              class="absolute bottom-6 2xs:bottom-4 left-0 text-slate-200 bg-slate-500 p-2 px-4 2xs:px-2 xl:text-sm 2xs:text-sm lg:text-xs rounded-r-xl 2xl:text-xl"
            >
              Portfolio
            </p>
          </div>

        </div>

      </div>

      <!--Services Details Section Responsive/Design/Code/Efficiency-->
      <div
        class="col-span-12 md:col-span-6 lg:col-span-6 rounded-xl xl:p-6 2xs:p-4 backdrop-blur-3xl grid items-center justify-center bordered shadow-xl bg-slate-200 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200"
      >
        <!--Main Services-->
        <div
          class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center items-center md:gap-8 lg:gap-3 xl:gap-4"
        >
          <div class="text-center font-bold">
            <Icon name="mdi:responsive" class="h-12 w-12" />
            <p class=" text-[16px] mt-2 font-bold">Responsive</p>
          </div>
          <div class="text-center font-bold">
            <Icon name="iconoir:design-nib" class="h-12 w-12"/>
            <p class=" text-[16px] mt-2 font-bold">Design</p>
          </div>
          <div class="text-center font-bold">
            <Icon name="ph:terminal-bold" class="h-12 w-12"/>
            <p class=" text-[16px] mt-2 font-bold">Code</p>
          </div>
          <div class="text-center font-bold">
            <Icon name="material-symbols:network-check-rounded" class="h-12 w-12"/>
            <p class=" text-[16px] mt-2 font-bold">Efficiency</p>
          </div>
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
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[50px]">3+</span>
            <span class="text-md">
              <br />
            years <br />
            Experience
            </span>
          </div>
          <!--Projects Completed-->
          <div
            class="text-center  h-full rounded-xl p-4 lg:p-2 2xl:py-8 2xl:text-2xl 2xs:text-sm 2xs:p-2 xl:text-lg md:text-base"
          >
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl xl:text-4xl 2xl:text-[50px]">10+</span>
            <span class="text-md">
              <br />
            Projects <br />
            Completed
            </span>
          </div>
          <!--Clients Worked -->
          <div
            class="text-center h-full rounded-xl p-4 lg:p-2 2xl:py-8 2xl:text-2xl 2xs:text-sm 2xs:p-2 xl:text-lg md:text-base"
          >
            <span class="font-bold text-3xl 2xs:text-2xl md:text-3xl xl:text-4xl 2xl:text-[50px]">5+</span>
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
              class="h-32 w-80 text-slate-500 2xs:h-24 2xs:w-60 md:h-36 md:w-72 lg:h-40 lg:w-80 xl:h-50 xl:w-80 "
            />
          </div>
          <!--Buttons-->
          <div class="flex items-center justify-between xl:mt-4 2xl:mt-16">
            <p class="uppercase 2xs:text-sm xl:text-xl text-slate-600 dark:text-slate-400 xl:font-semibold 2xl:text-2xl">Credentials</p>
            <NuxtLink to="/About" class="border-b-2 border-slate-600 text-slate-800 dark:text-slate-200 2xs:text-sm xl:text-xl 2xl:text-xl">
              More About Me
              <Icon name="ph:arrow-elbow-right-light" class="h-8 w-8" />
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
          <NuxtLink to="/contact" class="border-b-2 border-slate-600 text-slate-800 dark:text-slate-200 2xs:text-base lg:text-sm xl:text-xl 2xl:text-xl">
            Let's Talk
            <Icon name="ph:arrow-elbow-right-light" class="h-8 w-8" />
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
