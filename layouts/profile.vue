<template>
    <!--Profile Details-->
    <div
    :class="{dark:isDarkMode}"
      class="col-span-12 row-span-2 md:row-span-2 font-lob md:row-start-1 md:col-span-6
      lg:col-span-4 rounded-xl xl:p-6 2xs:p-4 md:p-4 backdrop-blur-3xl font-san bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-30"
    >
      <!--Profile Picture-->
      <div class="flex backdrop-blur-3xl bg-slate-50 bg-opacity-15 dark:bg-slate-800 dark:bg-opacity-15 shadow-sm dark:shadow-sm justify-center items-center overflow-hidden rounded-xl">
        <img
          src="~/assets/Profile.png"
          class="rounded-xl 2xl:h-[275px] xl:h-[265px] xl:w-[390px] lg:h-[235px] md:h-[265px] 2xs:h-[260px] 2xs:max-w-[315px] xs:h-[250px] xs:max-w-[315px]"
          alt=""
        />
      </div>
      <!--Profile Info-->
      <div class="pt-4 md:pt-3 2xs:pt-2 text-slate-800  dark:text-slate-200">
        <h2 class="py-2 xl:text-3xl md:text-2xl 2xs:text-2xl font-semibold font-san 2xl:text-4xl">Abdul Baset Bappy👋</h2>
        <p class="text-md xl:text-lg lg:text-sm md:text-sm 2xs:text-base 2xl:text-2xl font-san">
          A Passionate <strong>Frontend Developer</strong> 🖥️ &
          <strong>WordPress Designer</strong> having
          <strong>1+ years</strong> of Experiences over 3+ Country Worldwide.
        </p>
      </div>
      <!--Profile Buttons-->
      <div class="xl:py-4 md:py-2 2xs:py-2">
        <button
          class="xl:m-1 md:m-1 2xs:text-sm xl:text-lg xl:py-4 lg:py-2 2xs:m-1 bg-slate-700 bg-opacity-75 2xs:px-3 2xs:py-2 text-slate-200 2xl:p-4 xl:ml-0 2xs:ml-0 rounded-md"
        >
          <Icon
            name="material-symbols:add-call-outline-rounded"
            class="h-6 w-6"
          />
          Make a Call
        </button>
        <button class="xl:m-1 xl:mr-0 md:m-1 2xs:text-sm xl:py-4 2xs:mr-0 2xs:m-1 2xs:px-3 2xs:py-2 xl:text-xl lg:py-2 bg-slate-700 text-slate-200 2xl:p-4 bg-opacity-75 rounded-md">
          <Icon
            name="material-symbols:cloud-download-outline-rounded"
            class="h-6 w-6"
          />
          Download CV
        </button>
      </div>
      <!--Social Links-->
      <div class="flex flex-row xl:gap-2 2xs:gap-1 mb-2">
        <NuxtLink to="https://www.facebook.com/abdulbasetbappy.info" class="border-none p-2 rounded-md dark:bg-opacity-65 bg-slate-200 opacity-65 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:facebook" class="xl:h-8 2xs:h-6 transition-all duration-150 2xs:w-6 text-slate-500 dark:text-slate-400 group-hover:text-slate-200 xl:w-8 " />
        </NuxtLink>
        <NuxtLink to="https://www.github.com/abdulbasetbappy" class="border-none p-2 rounded-md bg-slate-200 opacity-65 dark:bg-opacity-65 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:github" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 dark:text-slate-400 xl:w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.codepen.com/abdulbasetbappy" class="border-none p-2 dark:bg-opacity-65 rounded-md opacity-65 bg-slate-200 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:codepen" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 dark:text-slate-400 xl:w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.youtube.com/abdulbasetbappy" class="border-none p-2 opacity-65 rounded-md dark:bg-opacity-65 bg-slate-200 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:youtube" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 dark:text-slate-400 xl:w-8" />
        </NuxtLink>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from '~/store/darkMood'

const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.darkMode)
</script>

<style scoped>

</style>