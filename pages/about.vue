<template>
  <div :class="{ dark: isDarkMode }" class="w-full sticky top-0 right-0">
    <div
      class="2xs:max-w-screen-[345px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl scroll-smooth font-san grid auto-rows-min md:grid-cols-12 2xs:grid-cols-1 2xs:p-2 2xs:m-auto m-2 p-8 gap-3 "
    >
      <NuxtLayout
        name="profile"
        class="2xs:static md:col-start-1 md:col-end-7 lg:col-span-4 md:sticky md:top-[4.8rem] left-0 h-fit"
      ></NuxtLayout>

      <div class="2xs:col-span-12 md:col-span-6 lg:col-span-8 rounded-xl dark:text-slate-100">
        <!--About Me Block-->
        <div class="backdrop-blur-3xl shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200 2xs:p-4 rounded-xl">
          <!--Title-->
          <div
            class="flex 2xs:flex-col 2xs:justify-start 2xs:items-start lg:justify-between lg:flex-row lg:items-center"
          >
          <!--Title Text-->
            <h2 class="2xs:text-2xl lg:text-3xl 2xl:text-5xl font-bold">
              Hi, This Is
              <span class="text-blue-400 2xs:inline-block"> Abdul Baset </span
              >👋
            </h2>
            <!--Title Badge-->
            <div
              class="bg-slate-900 md:py-3 lg:px-5 rounded-xl 2xs:hidden lg:block md:text-xl  text-slate-100"
            >
              <div class="relative inline-flex">
                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div
                  class="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"
                ></div>
                <div
                  class="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"
                ></div>
              </div>
              <p class="inline lg:text-base 2xl:text-2xl ml-2">Available For Hire</p>
            </div>
          </div>
          <!--Description-->
          <div
            class="grid grid-cols-6 auto-rows-fr mt-4 md:gap-5 2xs:gap-2 2xs:grid-rows-3 lg:grid-rows-2"
          >
            <!--Details Text-->
            <div class="2xs:col-span-6 lg:col-span-4 row-start-1">
              <p
                class="2xs:font-normal md:font-semibold lg:font-normal 2xs:text-sm lg:text-lg 2xl:text-2xl"
              >
                A Passionate Full Stack Developer 🖥️ & Product Designer having
                12 years of Experiences over 24+ Country Worldwide. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quos, architecto?
              </p>
            </div>
            <!--Details Card-->
            <div
              class="2xs:col-span-6 lg:col-span-4 grid grid-cols-3 row-start-2 2xs:gap-2 md:gap-4"
            >
              <div
                class="flex flex-col justify-center items-center 2xs:gap-0 sm:gap-2 dark:bg-slate-700 bg-slate-300 rounded-xl 2xl:p-5 p-2 m"
              >
                <span class="2xs:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">2+</span>
                <span class="2xs:text-sm 2xl:text-lg text-center">Year of <br> Experience</span>
              </div>
              <div
                class="flex flex-col justify-center items-center 2xs:gap-0 sm:gap-2 dark:bg-slate-700 bg-slate-300 rounded-xl 2xl:p-4 p-2"
              >
                <span class="2xs:text-3xl font-bold md:text-4xl lg:text-4xl xl:text-5xl">10+</span>
                <span class="2xs:text-sm text-center 2xl:text-lg">Projects <br> Completed </span>
              </div>
              <div
                class="flex flex-col justify-center items-center 2xs:gap-0 sm:gap-2 dark:bg-slate-700 bg-slate-300 rounded-xl 2xl:p-4 p-2"
              >
                <span class="2xs:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">5+</span>
                <span class="2xs:text-sm text-center 2xl:text-lg">Clients <br> Worked </span>
              </div>
            </div>
            <!--Scroll Down For More-->
            <div
              class="2xs:col-span-6 lg:col-span-4 lg:row-span-2 lg:row-start-1 2xs:row-start-3"
            >
              <div class="w-full h-full flex items-center justify-center">
                <div class="field flex items-center justify-around w-72">
                  <div
                    class="w-12 h-20  lg:w-16 lg:h-28 2xl:w-28 2xl:h-48 border-2 2xl:border-4 border-black dark:border-slate-400 rounded-full relative"
                  >
                    <div
                      class="w-3 h-3 2xl:w-8 2xl:h-8 bg-black dark:bg-blue-500 rounded-full absolute top-3 left-1/2 transform -translate-x-1/2 animate-wheel"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- All Details -->
        <div class="backdrop-blur-3xl shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 2xs:p-4 p-6 2xs:my-2 md:my-4 rounded-xl">
          <!--Details-->
          <div
            class="grid 2xs:auto-rows-fr lg:auto-rows-fr 2xs:grid-cols-12 2xs:gap-3 sm:gap-6 md:grid-rows-4 lg:grid-rows-2 2xs:grid-rows-3"
          >
            <!--Experience-->
            <div class="2xs:col-span-12 lg:col-span-7 2xs:row-start-1 md:row-span-1">
              <h2 class="2xs:text-xl md:text-2xl lg:text-2xl 2xl:text-4xl auto-cols-min font-semibold">
                Experience
              </h2>
              <div
                class="flex justify-between items-center mt-2 md:p-4 2xs:p-3 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <div>
                  <p class="2xs:text-xs 2xl:text-base">2023 - Present</p>
                  <p class="font-semibold 2xs:text-sm lg:text-lg xl:text-xl">
                    Frontend Developer
                  </p>
                </div>
                <div>
                  <img
                    class="2xs:h-5 md:h-8 lg:h-6 xl:h-8"
                    src="~/assets/wetechpro.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!--Certification-->
            <div class="2xs:col-span-12 lg:col-span-7 2xs:row-start-2 md:row-span-1 gap-4">
              <h2 class="2xs:text-xl md:text-2xl lg:text-2xl 2xl:text-4xl font-semibold">
                Certification
              </h2>
              <div
                class="flex justify-between items-center mt-2 md:p-4 2xs:p-3 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <div class="w-[70%]">
                  <p class="2xs:text-xs 2xl:text-base">2023 - 2024</p>
                  <p class="font-semibold 2xs:text-sm lg:text-lg xl:text-xl">
                    Frontend Developer
                  </p>
                </div>
                <div class="w-[30%] flex justify-end">
                  <img class="2xs:h-5 md:h-8 lg:h-6 xl:h-8" src="~/assets/Os.png" alt="" />
                </div>
              </div>
            </div>
            <!--Education-->
            <div class="2xs:col-span-12 lg:col-span-5 2xs:row-span-2 md:row-span-2 lg:row-span-2 2xs:row-start-3 lg:col-start-8 lg:row-start-1">
              <h2 class="2xs:text-xl md:text-2xl lg:text-2xl 2xl:text-4xl font-semibold">Education</h2>

              <div class="flex items-start justify-start flex-col md:gap-1 2xl:gap-3">
                             <div
                class="flex justify-between items-center mt-2 w-full md:p-4 2xs:p-3 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <div class="w-full">
                  <p class="2xs:text-xs 2xl:text-base">2018 - 2020</p>
                  <p class="font-semibold 2xs:text-sm lg:text-base">
                    BAUC - Mymensingh
                  </p>
                  <p class="2xs:text-xs 2xl:text-base">Higher Secondary In Science</p>
                </div>
                <div>
                  <img
                    class="2xs:h-10 md:h-10"
                    src="~/assets/bauc.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="flex justify-between items-center w-full mt-2 md:p-4 2xs:p-3 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <div class="w-full">
                  <p class="2xs:text-xs 2xl:text-base ">2020 - 2025</p>
                  <p class="font-semibold 2xs:text-sm md:text-xl lg:text-lg xl:text-xl">
                    University of Dhaka
                  </p>
                  <p class="2xs:text-xs 2xl:text-base">Bsc. in Botany</p>
                </div>
                <div>
                  <img class="2xs:h-10 md:h-10" src="~/assets/du.png" alt="" />
                </div>
              </div> 
              </div>

            </div>
          </div>
        </div>

        <!-- Tools That I Use -->
        <div class="backdrop-blur-3xl shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 2xs:p-4 p-6 2xs:my-2 md:my-4 rounded-xl">
          <!--Details-->
          <div
            class="grid lg:grid-cols-12 lg:gap-6 h-fit lg:grid-rows-2 2xs:grid-rows-3"
          >
            <!--Frontend-->
            <div
              class="2xs:col-span-12 lg:col-span-6 2xs:row-start-1 lg:row-start-1"
            >
              <h2 class="2xs:text-xl md:text-3xl lg:text-2xl xl:text-3xl auto-cols-min font-semibold">
                Frontend
              </h2>
              <div
                class="flex justify-around items-center md:mt-2 2xs:mt-0 md:p-4 2xs:p-3 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <Icon name="simple-icons:nuxtdotjs" class="h-8 w-8" />
                <Icon name="uil:vuejs" class="h-8 w-8" />
                <Icon name="simple-icons:tailwindcss" class="h-8 w-8" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16.171 18.7c-.481.221-1.008.509-2.063 1.088c-.4.225-.818.45-1.207.662c-.027-.027-.055-.061-.082-.089c-2.087-2.23-5.947-3.805-5.783-6.8c.061-1.091.436-3.955 7.413-7.433c5.742-2.83 10.311-2.046 11.1-.307c1.134 2.479-2.449 7.092-8.379 7.761a4.469 4.469 0 0 1-3.751-.948c-.314-.341-.361-.361-.477-.293c-.191.1-.068.409 0 .586a3.5 3.5 0 0 0 2.141 1.684a11.4 11.4 0 0 0 6.956-.689c3.594-1.391 6.4-5.258 5.578-8.5c-.825-3.287-6.281-4.371-11.443-2.537a26 26 0 0 0-8.79 5.047c-2.844 2.66-3.294 4.972-3.11 5.94c.662 3.437 5.4 5.674 7.3 7.331c-.1.055-.184.1-.259.143c-.948.471-4.562 2.36-5.463 4.358c-1.023 2.264.164 3.887.948 4.105a5.832 5.832 0 0 0 6.281-2.544a6.3 6.3 0 0 0 .559-5.8a5.03 5.03 0 0 1 .716-.477c.484-.286.945-.568 1.354-.786a10.475 10.475 0 0 1 4.475-.989c3.246.382 3.887 2.407 3.764 3.26a2.157 2.157 0 0 1-1.03 1.459c-.225.143-.3.191-.28.293c.027.15.136.143.327.116a2.535 2.535 0 0 0 1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753 7.753 0 0 0-2.946.587q-.225.093-.437.2Zm-4.825 7.839c-1.078 1.173-2.578 1.616-3.226 1.241c-.7-.4-.423-2.135.9-3.376a17.18 17.18 0 0 1 2.53-1.889c.157-.1.389-.232.668-.4l.075-.041l.164-.1a4.658 4.658 0 0 1-1.111 4.565"
                  />
                </svg>
              </div>
            </div>
            <!--Backend-->
            <div
              class="2xs:col-span-12 lg:col-span-6 2xs:row-start-2 lg:row-start-1 gap-4"
            >
              <h2 class="2xs:text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xs:mt-1 lg:mt-0 font-semibold">
                Backend
              </h2>
              <div
                class="flex justify-around items-center md:mt-2 2xs:mb-1 lg:mb-0 md:p-4 2xs:p-3 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <Icon name="teenyicons:nodejs-solid" class="h-8 w-8" />
                <Icon name="simple-icons:express" class="h-8 w-8" />
                <Icon name="simple-icons:mongodb" class="h-8 w-8" />
                <Icon name="tabler:brand-mysql" class="h-8 w-8" />
                <Icon name="mdi:nuxt" class="h-8 w-8" />
              </div>
            </div>
            <!--Other-->
            <div
              class="2xs:col-span-12 lg:row-span-1 2xs:row-start-3 lg:row-start-2"
            >
              <h2 class="2xs:text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xs:mt-2 lg:mt-0 font-semibold">
                Other Tools
              </h2>
              <div
                class="flex justify-around items-center md:mt-2 2xs:mt-0 md:p-4 2xs:p-3 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <Icon name="bi:github" class="h-8 w-8" />
                <Icon name="fa6-brands:docker" class="h-8 w-8" />
                <Icon
                  name="akar-icons:typescript-fill"
                  class="h-8 w-8 rounded-md"
                />
                <Icon name="simple-icons:figma" class="h-7 w-7" />
                <Icon name="fa6-brands:wordpress" class="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        <!-- Sig & Marquee -->
        <div class="dark:bg-transparent md:my-4 2xs:my-2 rounded-xl">
          <!--Details-->
          <div class="grid grid-cols-12 md:gap-2 lg:gap-3 2xs:gap-3 h-full justify-center grid-rows-1">
            <!--Signature-->
            <div class="2xs:col-span-5 md:col-span-5 row-start-1">
              <div class="2xs:p-2 md:p-4 rounded-xl flex items-center justify-center backdrop-blur-3xl shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30">
                <Icon
                  name="Signature"
                  class="2xs:h-12 2xs:w-32 md:h-20 md:w-80 lg:h-16 lg:w-64 xl:h-20 xl:w-80 dark:text-slate-100 text-slate-800"
                />
              </div>
            </div>
            <!--Marquee-->
            <div class="2xs:col-span-7 md:col-span-7 row-start-1">
              <div
                class="2xs:p-2 md:p-4 rounded-xl flex items-center justify-center h-full backdrop-blur-3xl shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30"
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
