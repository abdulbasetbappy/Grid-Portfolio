<template>
        <!--Blog-->
        <div
          class="col-span-12 md:col-span-12 md:row-span-1 col-end-6 rounded-xl p-6 bg-white dark:bg-black dark:text-slate-200"
        >
          <div class="flex justify-between items-center pb-2">
            <h2 class="text-3xl font-san pb-2 font-semibold">
              Recent Blog Posts
            </h2>
            <NuxtLink
              to="/blog"
              class="text-slate-400 text-lg dark:border-slate-400 border-b-2"
            >
              All Blogs
              <Icon name="ph:arrow-elbow-right-light" class="h-6 w-6" />
            </NuxtLink>
          </div>

          <div class="grid grid-cols-3 gap-4 justify-center items-center">
            <div class="relative">
              <img
                class="h-52 w-full rounded-xl"
                src="~/assets/Blog01.jpeg"
                alt=""
              />
              <h2
                class="absolute left-0 bottom-0 h-[95%] w-full p-3 text-slate-400 text-md flex justify-start items-end rounded-b-xl bg-gradient-to-t from-slate-900 to-transparent"
              >
                This is Like Haven & You Know...
              </h2>
            </div>
            <div class="relative">
              <img
                class="h-52 w-full rounded-xl"
                src="~/assets/Blog02.png"
                alt=""
              />
              <h2
                class="absolute left-0 bottom-0 h-[95%] w-full p-3 text-slate-400 text-md flex justify-start items-end rounded-b-xl bg-gradient-to-t from-slate-900 to-transparent"
              >
                This is Like Haven & You Know...
              </h2>
            </div>
            <div class="relative">
              <img
                class="h-52 w-full rounded-xl"
                src="~/assets/Blog03.jpg"
                alt=""
              />
              <h2
                class="absolute left-0 bottom-0 h-[95%] w-full p-3 text-slate-400 text-md flex justify-start items-end rounded-b-xl bg-gradient-to-t from-slate-900 to-transparent"
              >
                This is Like Haven & You Know...
              </h2>
            </div>
          </div>
        </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>