<script lang="ts" setup>
const { slug } = useRoute().params;
import { useDarkModeStore } from "~/store/darkMood";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);
</script>

<template>
  <article :class="{ dark: isDarkMode }"  class="2xs:max-w-screen-[345px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl scroll-smooth font-san m-auto rounded-2xl backdrop-blur-3xl shadow-xl bg-slate-200 dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200">
    <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }" >
      <!-- Header  -->
      <header class="mt-2">
        <img
          v-if="doc.thumbnail"
          :src="doc.thumbnail"
          :alt="doc.title"
          class="w-full rounded-2xl"
        />
        <div class="text-center p-5">
          <h1 class="text-4xl font-bold lg:w-2/3 mx-auto">{{ doc.title }}</h1>
          <p class="text-gray-500 text-sm mt-2">{{ doc.date }}</p>
          <p class="text-gray-500 text-sm mt-2">By {{ doc.author }}</p>
          <p class="text-gray-500 text-sm mt-2"> {{ doc.readTime }}</p>
          <p class="text-gray-500 text-sm mt-2">Category {{ doc.category }}</p>
        </div>
      </header>
      <!-- ./ Header  -->

      <!-- Content -->
      <div class="mt-4 content p-5">
        <!-- Content  -->
        <ContentRenderer path="/Posts" :value="doc" />
        <!-- ./ Content  -->
        <p v-for="tag in doc.tags" class="inline-block mr-2">#{{ tag }}</p>
      </div>
      <!-- ./ Content  -->
    </ContentDoc>
  </article>
</template>

<style>
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}

.content h1 {
  @apply text-3xl font-bold;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
}
.content h4 {
  @apply text-lg font-bold;
}
.content h5 {
  @apply text-base font-bold;
}
</style>
