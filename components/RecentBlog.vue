<template>
  <!--Blog-->
  <div
    class="col-span-12 md:col-span-12 md:row-span-1 col-end-6 rounded-xl lg:p-6 2xs:p-4 xs:px-6 md:px-4 backdrop-blur-3xl bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30 dark:text-slate-200"
  >
    <!--Title-->
    <div class="flex justify-between items-center pb-2">
      <h2
        class="2xs:text-xl xs:text-2xl lg:text-xl xl:text-3xl font-san pb-2 font-semibold"
      >
        Recent Blog Posts
      </h2>
      <NuxtLink
        to="/blog"
        class="text-slate-400 lg:text-lg 2xl:text-xl 2xs:text-sm xs:text-base dark:border-slate-400 border-b-2"
      >
        All Blogs
        <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
      </NuxtLink>
    </div>

    <div
      class="grid grid-cols-3 md:grid-cols-3 2xs:grid-cols-1 2xs:px-2 md:px-0 gap-4 justify-center items-center"
    >
      <!--Blog 01-->
      <div class="relative">
        <img
          class="h-52 2xs:h-60 md:h-48 xl:h-56 2xl:h-64 w-full rounded-xl"
          src="~/assets/Blog01.jpeg"
          alt=""
        />

        <div
          class="absolute left-0 bottom-0 h-[95%] w-full p-3 flex justify-end items-start flex-col rounded-b-xl 2xl:text-2xl bg-gradient-to-t from-slate-900 from-10% via-slate-900 via-40% to-transparent"
        >
          <h2 class="text-md 2xs:text-base 2xs:font-bold text-slate-200">
            Want To Upgrade Your Brain? Stop Doing These 7 Things
          </h2>
          <div class="flex flex-row gap-6 text-slate-500 text-sm">
            <p>
              <Icon name="material-symbols:readiness-score-outline-sharp" class=""/>
              15 min read</p>
            <p>
              <Icon name="material-symbols:calendar-month-outline" class=""/>
              Nov 6, 2023</p>
          </div>
        </div>
      </div>
      <!--Blog 02-->
      <div class="relative">
        <img
          class="h-52 2xs:h-60 md:h-48 xl:h-56 2xl:h-64 w-full rounded-xl"
          src="~/assets/Blog02.png"
          alt=""
        />
        <div
          class="absolute left-0 bottom-0 h-[95%] w-full p-3 flex justify-end items-start flex-col rounded-b-xl 2xl:text-2xl bg-gradient-to-t from-slate-900 from-10% via-slate-900 via-40% to-transparent"
        >
          <h2 class="text-md 2xs:text-base 2xs:font-bold text-slate-200">
            Want To Upgrade Your Brain? Stop Doing These 7 Things
          </h2>
          <div class="flex flex-row gap-6 text-slate-500 text-sm">
            <p>
              <Icon name="material-symbols:readiness-score-outline-sharp" class=""/>
              15 min read</p>
            <p>
              <Icon name="material-symbols:calendar-month-outline" class=""/>
              Nov 6, 2023</p>
          </div>
        </div>
      </div>
      <!--Blog 03-->
      <div class="relative">
        <img
          class="h-52 2xs:h-60 md:h-48 xl:h-56 2xl:h-64 w-full rounded-xl"
          src="~/assets/Blog03.jpg"
          alt=""
        />
        <div
          class="absolute left-0 bottom-0 h-[95%] w-full p-3 flex justify-end items-start flex-col rounded-b-xl 2xl:text-2xl bg-gradient-to-t from-slate-900 from-10% via-slate-900 via-40% to-transparent"
        >
          <h2 class="text-md 2xs:text-base 2xs:font-bold text-slate-200">
            Want To Upgrade Your Brain? Stop Doing These 7 Things
          </h2>
          <div class="flex flex-row gap-6 text-slate-500 text-sm">
            <p>
              <Icon name="material-symbols:readiness-score-outline-sharp" class=""/>
              15 min read</p>
            <p>
              <Icon name="material-symbols:calendar-month-outline" class=""/>
              Nov 6, 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
