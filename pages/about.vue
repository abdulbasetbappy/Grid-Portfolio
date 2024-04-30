<template>
  <div
    :class="{ dark: isDarkMode }"
    class="2xs:max-w-screen-[345px] xs:max-w-screen-xs sm:max-w-screen-sm scroll-smooth font-san m-auto grid grid-cols-12 2xs:grid-cols-1 2xs:py-2 2xs:px-0 p-8 gap-3"
  >
    <NuxtLayout
      name="profile"
      class="2xs:static md:sticky md:top-20 md:left-0 h-fit"
    ></NuxtLayout>    

    <div class="2xs:col-span-12 md:col-span-8 rounded-xl dark:text-slate-100">
      
      <!--About Me Block-->
      <div class="dark:bg-black 2xs:p-4 rounded-xl">
        <!--Title-->
        <div
          class="flex 2xs:flex-col 2xs:justify-start 2xs:items-start justify-between items-center"
        >
          <h2 class="2xs:text-2xl text-3xl font-bold">
            Hi, This Is <span class="text-blue-400"> Abdul Baset </span>👋
          </h2>
          <div class="bg-slate-900 md:py-3 md:px-5 rounded-xl 2xs:hidden md:text-xl text-slate-100">
            <div class="relative inline-flex">
              <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div
                class="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"
              ></div>
              <div
                class="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"
              ></div>
            </div>
            <p class="inline ml-2">Available For Hire</p>
          </div>
        </div>
        <!--Description-->
        <div class="grid grid-cols-6 mt-4 gap-5 2xs:grid-rows-3 grid-rows-2">
          <!--Details Text-->
          <div class="2xs:col-span-6 md:col-span-4 row-start-1">
            <p class="2xs:font-normal md:font-semibold 2xs:text-sm md:text-lg">
              A Passionate Full Stack Developer 🖥️ & Product Designer having 12
              years of Experiences over 24+ Country Worldwide. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Quos, architecto?
            </p>
          </div>
          <!--Details Card-->
          <div class="2xs:col-span-6 md:col-span-4 grid grid-cols-3 row-start-2 2xs:gap-2 md:gap-4">
            <div
              class="flex flex-col justify-center items-center gap-2 bg-slate-600 rounded-xl p-2"
            >
              <span class="2xs:text-3xl md:text-[60px] font-bold">2+</span>
              <span class="2xs:text-sm text-center">Year of Experience</span>
            </div>
            <div
              class="flex flex-col justify-center items-center gap-2 bg-slate-600 rounded-xl p-2"
            >
              <span class="2xs:text-3xl font-bold md:text-[60px]">10+</span>
              <span class="2xs:text-sm text-center" >Projects Completed </span>
            </div>
            <div
              class="flex flex-col justify-center items-center gap-2 bg-slate-600 rounded-xl p-2"
            >
              <span class="2xs:text-3xl md:text-[60px] font-bold">5+</span>
              <span class="2xs:text-sm text-center" >Clients Worked </span>
            </div>
          </div>
          <!--Scroll Down For More-->
          <div class="2xs:col-span-6 md:col-span-4 md:row-span-4 md:row-start-1 2xs:row-start-3">
            <img class="h-full" src="~/assets/Blog01.jpeg" alt="" />
          </div>
        </div>
      </div>

      <!-- All Details -->
      <div class="dark:bg-black 2xs:p-4 p-6 2xs:my-2 md:my-4 rounded-xl">
        <!--Details-->
        <div class="grid 2xs:grid-cols-12 gap-6 2xs:auto-cols-max md:grid-rows-2 2xs:grid-rows-3 ">
          <!--Experience-->
          <div class="2xs:col-span-12 md:col-span-7 2xs:row-start-1">
            <h2 class="2xs:text-xl md:text-3xl auto-cols-min font-semibold">Experience</h2>
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
          <div class="2xs:col-span-12 md:col-span-7 2xs:row-start-2 gap-4">
            <h2 class="2xs:text-xl md:text-3xl font-semibold">Certification</h2>
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
          <div class="2xs:col-span-12 md:col-span-5 row-span-4 2xs:grid-rows-3">
            <h2 class="2xs:text-xl md:text-3xl font-semibold">Education</h2>

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
      <div class="dark:bg-black 2xs:p-4 p-6 2xs:my-2 md:my-4 rounded-xl">
        <!--Details-->
        <div class="grid md:grid-cols-12 md:gap-6 h-fit md:grid-rows-2 2xs:grid-rows-3">
          <!--Frontend-->
          <div class="2xs:col-span-12 md:col-span-6 2xs:row-start-1 md:row-start-1">
            <h2 class="2xs:text-xl md:text-3xl auto-cols-min font-semibold">Frontend</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            ></div>
          </div>
          <!--Backend-->
          <div class="2xs:col-span-12 md:col-span-6 2xs:row-start-2 md:row-start-1 gap-4">
            <h2 class="2xs:text-xl md:text-3xl font-semibold">Backend</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            ></div>
          </div>
          <!--Other-->
          <div class="2xs:col-span-12 md:row-span-4 2xs:row-start-3 md:row-start-2">
            <h2 class="2xs:text-xl md:text-3xl font-semibold">Other Tools</h2>
            <div
              class="flex justify-between items-center mt-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
            ></div>
          </div>
        </div>
      </div>

      <!-- Sig & Marquee -->
      <div class="dark:bg-transparent md:my-4 2xs:my-2 rounded-xl">
        <!--Details-->
        <div class="grid grid-cols-12 md:gap-6 2xs:gap-3 h-full grid-rows-1">
          <!--Signature-->
          <div class="2xs:col-span-5 md:col-span-5 row-start-1">
            <div class="2xs:p-2 md:p-4 rounded-xl bg-slate-50 dark:bg-black">
              <Icon name="Signature" class="2xs:h-12 2xs:w-32 md:h-20 md:w-80 " />
            </div>
          </div>
          <!--Marquee-->
          <div class="2xs:col-span-7 md:col-span-7 row-start-1">
            <div
              class="2xs:p-2 md:p-4 rounded-xl flex items-center justify-center h-full bg-slate-50 dark:bg-black"
            >
              <marquee
                direction="rl"
                behavior="scroll"
                scrollamount="2"
                delay="1s"
                class="2xs:py-2 md:py-3 rounded-md px-2 font-semibold 2xs:text-lg md:text-3xl text-slate-400"
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
