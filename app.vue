<template>
    <NuxtLoadingIndicator />
  <div
    :class="{ dark_bg: isDarkMode, light_bg: !isDarkMode }"
    class="2xs:py-3 md:py-4 w-[100%] h-full bg-[url('~/assets/graph-paper.svg')]"
  >
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
/*=======Background=========*/
.dark_bg {
background-color: #171717 ;
}
.light_bg {
background-color: #f5f5f5;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #171717 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}
*::-webkit-scrollbar-track {
  background: #ffffff;
}
*::-webkit-scrollbar-thumb {
  background-color: #28242b;
  border-radius: 4px;
  border: 0px none #ffffff;
}
</style>
