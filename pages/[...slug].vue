<script lang="ts" setup>
const { slug } = useRoute().params;
import { useDarkModeStore } from "~/store/darkMood";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);

function handleTags(category: any) {
  return `#${category}`;
}
// Reactive variable to hold unique categories
const uniqueCategories: any = ref([]);

// Fetch unique categories from all posts
(async () => {
  const allPosts = await queryContent("posts").find();
  const categories = new Set();
  allPosts.forEach((post) => {
    if (post.tags) {
      if (Array.isArray(post.tags)) {
        post.tags.forEach((cat) => categories.add(cat));
      } else {
        categories.add(post.tags);
      }
    }
  });
  uniqueCategories.value = Array.from(categories);
})();
</script>

<template>
  <div
    :class="{ dark: isDarkMode }"
    class="grid grid-cols-12 2xs:max-w-screen-[345px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl scroll-smooth font-san m-auto rounded-2xl bg-transparent gap-2 mt-2"
  >
    <article
      class="bg-slate-200 p-2 pt-0 backdrop-blur-3xl shadow-xl dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200 rounded-xl col-start-1 col-end-9"
    >
      <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">
        <!-- Header  -->
        <header class="mt-2">
          <img
            v-if="doc.thumbnail"
            :src="doc.thumbnail"
            :alt="doc.title"
            class="w-full mt-0 rounded-xl"
          />
          <div class=" p-5 flex items-center justify-start">
            <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
          </div>
          <div class="flex flex-row justify-between items-center text-center px-5 pt-0">
            <p class="text-gray-500 text-sm mt-2">
              <Icon name="material-symbols:contract-edit-outline-rounded" class="h-5 w-5" />
              {{ doc.author }}</p>
            <p class="text-gray-500 text-sm mt-2">
              <Icon name="material-symbols:calendar-month-outline-rounded" class="h-5 w-5" />
              {{ doc.date }}</p>
            <p class="text-gray-500 text-sm mt-2">
              <Icon name="material-symbols:music-cast-rounded" class="h-5 w-5" />
              {{ doc.readTime }}</p>
            <p class="text-gray-500 text-sm mt-2">
              <Icon name="material-symbols:category-outline-rounded" class="h-5 w-5" /> 
              {{ doc.category }}
            </p>
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
    <!--Show all tags and search bar and top 5 post title-->
    <aside class="col-start-9 col-end-13">
      <div
        class="bg-slate-200 backdrop-blur-3xl shadow-xl dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-30 text-slate-800 dark:text-slate-200 rounded-xl"
      >
        <!--Search Bar-->
        <div class="p-4 relative mx-auto text-gray-600">
          <input
            class="border-none w-full font-medium caret-slate-700 border-gray-300 bg-white h-12 px-4 pr-10 rounded-lg text-lg focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" class="absolute right-3 top-2 mt-5 mr-4">
            <svg
              class="text-slate-600 h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>

        <!--Feature Blog-->
        <div class="p-4">
          <h3 class="text-xl font-bold">Feature Blog</h3>
          <ContentList
            path="/posts"
            fields="title,date,thumbnail,category"
            v-slot="{ list }"
            :query="{
              draft: false,
              sort: [
                {
                  date: -1,
                },
              ],
              limit: 5,
            }"
          >
            <nuxt-link
              v-for="blog in list"
              :key="blog._path"
              class="flex items-start my-3 gap-3"
              :to="blog.slug"
            >
              <img
                v-if="blog.thumbnail"
                :src="blog.thumbnail"
                :alt="blog.title"
                class="h-14 w-20 rounded-lg"
              />
              <h3 class="text-gray-400 leading-5 text-lg">{{ blog.title }}</h3>
            </nuxt-link>
          </ContentList>
        </div>
        <!--./Feature Blog-->

        <!-- Unique Tags -->
        <div class="p-4">
          <h2 class="my-3 text-xl font-bold">All Tags</h2>
          <div class="flex flex-wrap gap-2">
            <!-- Call a method to fetch unique categories -->
            <div
              v-for="category in uniqueCategories"
              :key="category"
              class="my-2"
            >
              <span
                class="text-gray-800 bg-slate-400 px-3 py-2 rounded-lg text-xl"
                >#{{ category }}</span
              >
            </div>
          </div>
        </div>
        <!-- ./ Unique Tags -->

        <!--Author Details-->
        <div class="p-4">
          <div class="dark:bg-slate-800 bg-slate-300 p-2 rounded-lg">
            <!--Title-->
            <div class="flex items-start justify-start gap-2">
              <img
                src="~/assets/Porject01.png"
                alt="Abdul Baset Bappy"
                class="h-10 w-10 mt-2 rounded-[50%]"
              />
              <div>
                <h3 class="dark:text-slate-200  text-xl mt-1 font-bold">
                  Abdul Baset Bappy
                </h3>
                <p class="dark:text-slate-400 text-slate-600 mt-[-5px] text-sm">Full-Stack Developer</p>
              </div>

              <!--Title Badge-->
              <div
                class="dark:bg-slate-700 bg-slate-400 rounded-lg px-3 py-1 ml-5 lg:block text-slate-100"
              >
                <div class="relative inline-flex">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div
                    class="w-3 h-3 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"
                  ></div>
                  <div
                    class="w-3 h-3 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"
                  ></div>
                </div>
                <p class="inline text-slate-800 dark:text-slate-200 ml-2">Active</p>
              </div>
            </div>
            <p class="p-2">
              A Passionate <strong>Frontend Developer</strong> 🖥️ & <strong>WordPress Designer</strong> having 1+
              years of Experiences over 3+ Country Worldwide.
            </p>
            <div class="flex items-center justify-between">
              <!--Social Links-->
              <div class="flex flex-row">
                <NuxtLink
                  to="https://www.facebook.com/abdulbasetbappy.info"
                  class="border-none p-1 m-1 my-2 rounded-md dark:bg-opacity-65 bg-slate-200 opacity-65 dark:bg-slate-900 dark:border-none"
                >
                  <Icon
                    name="mdi:facebook"
                    class="h-6 w-6 transition-all duration-150 text-slate-500 dark:text-slate-400 group-hover:text-slate-200"
                  />
                </NuxtLink>
                <NuxtLink
                  to="https://www.github.com/abdulbasetbappy"
                  class="border-none p-1 m-1 my-2 rounded-md bg-slate-200 opacity-65 dark:bg-opacity-65 dark:bg-slate-900 dark:border-none"
                >
                  <Icon
                    name="mdi:github"
                    class="w-6 h-6 text-slate-500 dark:text-slate-400"
                  />
                </NuxtLink>
                <NuxtLink
                  to="https://www.codepen.com/abdulbasetbappy"
                  class="border-none p-1 m-1 my-2 dark:bg-opacity-65 rounded-md opacity-65 bg-slate-200 dark:bg-slate-900 dark:border-none"
                >
                  <Icon
                    name="mdi:codepen"
                    class="w-6 h-6 text-slate-500 dark:text-slate-400"
                  />
                </NuxtLink>
                <NuxtLink
                  to="https://www.youtube.com/abdulbasetbappy"
                  class="border-none p-1 m-1 my-2 opacity-65 rounded-md dark:bg-opacity-65 bg-slate-200 dark:bg-slate-900 dark:border-none"
                >
                  <Icon
                    name="mdi:youtube"
                    class="w-6 h-6 text-slate-500 dark:text-slate-400"
                  />
                </NuxtLink>
              </div>

              <!--Signature-->
              <Icon name="Signature" class="h-16 w-28 text-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
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
