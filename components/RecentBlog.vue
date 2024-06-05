<template>
  <!--Blogs-->
  <div
    class="col-span-12 md:col-span-12 md:row-span-1 col-end-6 rounded-xl lg:p-6 2xs:p-4 xs:px-6 md:px-4 backdrop-blur-sm border-2 dark:border-neutral-800 border-neutral-300 border-opacity-30 shadow-xl dark:text-neutral-200"
  >
    <!--Component Title Section-->
    <div class="flex justify-between items-center pb-2">
      <h2
        class="2xs:text-xl xs:text-2xl text-neutral-800 dark:text-neutral-200 lg:text-xl xl:text-3xl font-san pb-2 font-semibold"
      >
        Recent Blog Posts
      </h2>
      <NuxtLink
        to="/blog"
        class="text-neutral-800 dark:text-neutral-400 lg:text-lg 2xl:text-xl 2xs:text-sm xs:text-base dark:border-neutral-400 border-neutral-400 border-b-2"
      >
        All Blogs
        <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
      </NuxtLink>
    </div>

    <!--Main Blogs Section-->
    <div
      class="grid grid-cols-3 md:grid-cols-3 2xs:grid-cols-1 2xs:px-2 md:px-0 gap-4 justify-center items-center"
    >
    <ContentList 
      path="/posts"
      fields = "title,date,thumbnail,category"
      v-slot="{list}"
      :query="{
        draft: false,
        sort: [
          {
            date: -1,
          },
        ],
        limit: 3,
      }"
      >
      <!--Main Blog-->
      <div
      v-for="blog in list"
        :key="blog._path"
      class="relative">
        <img
          class="h-52 2xs:h-60 md:h-48 xl:h-56 2xl:h-64 w-full rounded-xl"
          v-if="blog.thumbnail"
            :src="blog.thumbnail"
            :alt="blog.title"
        />

        <div
          class="absolute left-0 bottom-0 h-[95%] w-full p-3 flex justify-end items-start flex-col rounded-b-xl 2xl:text-2xl bg-gradient-to-t from-neutral-900 from-10% via-neutral-900 via-40% to-transparent"
        >
          <nuxt-link :to="blog.slug" class="text-md 2xs:text-base md:text-sm lg:text-base 2xs:font-bold leading-4 text-neutral-200">
            {{ blog.title }}
          </nuxt-link>
          <div class="flex flex-row gap-6 text-neutral-500 text-sm">
            <p class="md:text-xs lg:text-sm">
              <Icon name="material-symbols:readiness-score-outline-sharp" class=""/>
              {{ blog.readTime }} </p>
            <p class="md:text-xs lg:text-sm">
              <Icon name="material-symbols:calendar-month-outline" class=""/>
              {{ blog.date }}</p>
          </div>
        </div>
      </div>

    </ContentList>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
