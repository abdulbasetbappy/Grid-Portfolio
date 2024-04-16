<template>
  <header
    :class="{ dark: isDarkMode }"
    class="sticky font-san max-w-screen-2xl mx-auto top-0 z-10"
  >
    <div>
      <div
        class="flex bg-white p-2 rounded-lg dark:bg-black dark:text-white items-center justify-between"
      >
        <!--Logo-->
        <NuxtLink to="/" class="flex items-center justify-center flex-row">
          <span class="text-sky-700 font-semibold text-3xl"
            >#<span class="text-slate-500 text-2xl">Bappy</span></span
          >
        </NuxtLink>
        <!--Menu Navigation-->
        <nav>
          <ul class="flex flex-row items-center justify-between">
            <li v-for="item in menuItems" :key="item.id" class="">
              <NuxtLink
                :to="item.path"
                class="flex items-center justify-center transition-colors duration-300 flex-row text-slate-800 dark:text-slate-400 text-xl p-3 rounded-lg group hover:bg-slate-700 focus:bg-slate-700"
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
        <div class="flex items-center justify-center flex-row">
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
        <!--Header Navigation toggler-->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "~/store/darkMood";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);
const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
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
    label: "Services",
    path: "/Services",
    iconName: "ServicesIcon",
  },
  {
    id: "04",
    label: "Works",
    path: "/Works",
    iconName: "WorksIcon",
  },
  {
    id: "05",
    label: "Blog",
    path: "/Blog",
    iconName: "BlogIcon",
  },
  {
    id: "06",
    label: "Contact",
    path: "/Contact",
    iconName: "ContactIcon",
  },
]);
</script>

<style scoped></style>
