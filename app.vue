<template>
<div :class="{ dark_bg : isDarkMode, light_bg:!isDarkMode}" class=" py-6">
  <NuxtLayout>
  <NuxtPage />
</NuxtLayout>
</div>
</template>
<script setup lang="ts">
import { useDarkModeStore } from "~/store/darkMood";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);
</script>
<style>
.dark_bg{
  background-color: #0f172a;
opacity: 1;
background-image:  linear-gradient(#1e293b 1.8px, transparent 1.8px), linear-gradient(90deg, #1e293b 1.8px, transparent 1.8px), linear-gradient(#1e293b 0.9px, transparent 0.9px), linear-gradient(90deg, #1e293b 0.9px, #0f172a 0.9px);
background-size: 45px 45px, 45px 45px, 9px 9px, 9px 9px;
background-position: -1.8px -1.8px, -1.8px -1.8px, -0.9px -0.9px, -0.9px -0.9px;
}
.light_bg{
  background-color: #ffffff;
opacity: 1;
background-image:  linear-gradient(#e0e0e0 1.8px, transparent 1.8px), linear-gradient(90deg, #e0e0e0 1.8px, transparent 1.8px), linear-gradient(#e0e0e0 0.9px, transparent 0.9px), linear-gradient(90deg, #e0e0e0 0.9px, #ffffff 0.9px);
background-size: 45px 45px, 45px 45px, 9px 9px, 9px 9px;
background-position: -1.8px -1.8px, -1.8px -1.8px, -0.9px -0.9px, -0.9px -0.9px;
}
</style>