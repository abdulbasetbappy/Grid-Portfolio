<template>
  <header
    :class="{ dark: isDarkMode }"
    class="sticky font-san 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-screen-xs mx-auto top-0 z-10"
  >
    <div>
      <div
        class="flex backdrop-blur-lg p-2 rounded-lg  dark:text-white items-center justify-between"
      >
        <!--Logo-->
        <NuxtLink to="/" class="flex items-center justify-center flex-row">
          <span class="text-sky-700 font-semibold text-3xl"
            >#<span class="text-slate-500 text-2xl">Bappy</span></span
          >
        </NuxtLink>
        <!--Menu Navigation-->
        <div class="flex justify-end items-center"> 
          <nav class="2xs:hidden lg:block">
            <ul class="flex flex-row items-center gap-2 lg:gap-1 justify-end">
              <li v-for="item in menuItems" :key="item.id" class="">
                <NuxtLink
                  :to="item.path"
                  class="flex items-center justify-center transition-colors duration-300 flex-row text-slate-800 dark:text-slate-400 xl:text-xl lg:text-sm  p-3 rounded-lg group hover:bg-slate-700 focus:bg-slate-700"
                >
                  <Icon
                    :name="item.iconName"
                    class="group-hover:text-slate-100 group-focus:text-slate-100"
                  />
                  <span
                    class="group-hover:text-slate-100 group-focus:text-slate-100"
                    >{{ item.label }}</span
                  >
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <!--Header Buttons-->
          <div class="lg:flex items-center justify-center flex-row 2xs:hidden">
            <button
              v-if="!isDarkMode"
              @click="toggleDarkMode"
              class="p-2 text-slate-500 rounded-lg transition-colors duration-300 hover:bg-slate-200"
            >
              <Icon name="MoonIcon" />
            </button>
            <button
              v-if="isDarkMode"
              @click="toggleDarkMode"
              class="p-2 rounded-lg transition-colors duration-300 hover:bg-slate-700"
            >
              <Icon name="SunIcon" />
            </button>
            <NuxtLink
              to="/contact"
              class="flex ml-2 items-center justify-center flex-row bg-slate-500 py-2 px-3 rounded-md text-slate-100 text-xl"
            >
              <span>Let's Talk</span>
              <Icon name="GoArrowIcon" />
            </NuxtLink>
          </div>
        </div>
        <!--Header Navigation toggler-->
        <div
          @click="toggleSidebar()"
          class="w-7 cursor-pointer lg:hidden flex justify-end items-end gap-1 flex-col ease-in-out delay-700 group"
        >
          <div class="w-full bg-slate-400 h-1 rounded-md"></div>
          <div
            class="w-[75%] group-hover:w-full transition-all ease-in-out duration-700 bg-slate-500 h-1 rounded-md"
          ></div>
          <div
            class="w-[50%] group-hover:w-full transition-all ease-in-out duration-700 bg-slate-400 h-1 rounded-md"
          ></div>
        </div>
        <!-- Sidebar -->
        <transition name="slide">
          <div
            v-if="showSidebar"
            class="fixed lg:hidden top-0 right-0 h-full flex flex-col p-2 justify-around items-center w-[70%] bg-gray-800 text-white z-30"
          >
            <!--Header Buttons-->
            <div
              class="w-full flex items-center justify-between flex-row-reverse"
            >
              <button
                v-if="!isDarkMode"
                @click="toggleDarkMode"
                class="p-2 text-slate-500 rounded-lg transition-colors duration-300 hover:bg-slate-200"
              >
                <Icon name="MoonIcon" />
              </button>
              <button
                v-if="isDarkMode"
                @click="toggleDarkMode"
                class="p-2 rounded-lg transition-colors duration-300 hover:bg-slate-700"
              >
                <Icon name="SunIcon" />
              </button>
              <NuxtLink
                to="/"
                class="flex ml-2 items-center justify-center flex-row bg-slate-500 py-2 px-3 rounded-md text-slate-100 text-xl"
              >
                <span>Let's Talk</span>
                <Icon name="GoArrowIcon" />
              </NuxtLink>
            </div>

            <!-- Sidebar content goes here -->
            <nav class="w-full">
              <ul>
                <li v-for="item in menuItems" :key="item.id">
                  <NuxtLink
                    :to="item.path"
                    class="block py-2 px-4 hover:bg-gray-600 hover:rounded-xl"
                  >
                    <Icon
                      :name="item.iconName"
                      class="inline-block w-6 h-6 mr-2"
                    />
                    <span>{{ item.label }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </nav>

            <!--Bottom Profile Card-->
            <div
              class="w-full flex flex-row items-center justify-start p-2 dark:bg-slate-700 rounded-xl"
            >
              <img
                src="https://i.pinimg.com/280x280_RS/65/aa/b4/65aab49a5d7170aa1497bd61caec6dc6.jpg"
                alt="Profile Picture"
                class="w-8 h-8 rounded-full"
              />
              <div class="ml-2">
                <h3 class="text-md font-semibold">Abul Baset Bappy</h3>
                <p class="text-[10px] font-light">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </transition>
        <!-- Overlay -->
        <div
          v-if="showSidebar"
          @click="toggleSidebar"
          class="fixed lg:hidden top-0 left-0 w-full h-full bg-black opacity-50 z-10"
        ></div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "~/store/darkMood";
import { useSideBarStore } from "~/store/sideBar";
//DarMood
const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);
const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
};
//Sidebar
const sideBarStore = useSideBarStore();
const showSidebar = computed(() => sideBarStore.showSidebar);
const toggleSidebar = () => {
  sideBarStore.toggleSidebar();
};
//Reactive Variables - Menu Items
const menuItems = reactive([
  {
    id: "01",
    label: "Home",
    path: "/",
    iconName: "HomeIcon",
  },
  {
    id: "02",
    label: "About",
    path: "/About",
    iconName: "AboutIcon",
  },
  {
    id: "03",
    label: "Works",
    path: "/Works",
    iconName: "WorksIcon",
  },
  {
    id: "04",
    label: "Blog",
    path: "/Blog",
    iconName: "BlogIcon",
  },
  {
    id: "05",
    label: "Contact",
    path: "/Contact",
    iconName: "ContactIcon",
  },
]);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s ease;
}

.slide-enter-to,
.slide-leave {
  transform: translateX(0);
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
