<template>
    <!--Profile Details-->
    <div
    :class="{dark:isDarkMode}"
      class="col-span-12 row-span-2 md:row-span-2 font-lob md:row-start-1 md:col-span-6
      lg:col-span-4 rounded-xl xl:p-6 2xs:p-4 md:p-4 backdrop-blur-3xl bordered shadow-xl bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 bg-opacity-50"
    >
      <!--Profile Picture-->
      <div class="bg-stone-100 flex justify-center items-center overflow-hidden dark:bg-slate-900 rounded-xl">
        <img
          src="~/assets/Profile.png"
          class="rounded-xl 2xl:h-[275px] xl:h-[265px] xl:w-[390px] lg:h-[235px] md:h-[265px] 2xs:h-[260px] 2xs:max-w-[315px] xs:h-[250px] xs:max-w-[315px]"
          alt=""
        />
      </div>
      <!--Profile Info-->
      <div class="pt-4 md:pt-3 2xs:pt-2 dark:text-slate-200">
        <h2 class="py-2 xl:text-3xl md:text-2xl 2xs:text-2xl font-semibold 2xl:text-4xl">Abdul Baset Bappy👋</h2>
        <p class="text-md xl:text-lg lg:text-sm md:text-sm 2xs:text-base 2xl:text-2xl">
          A Passionate <strong>Frontend Developer</strong> 🖥️ &
          <strong>WordPress Designer</strong> having
          <strong>1+ years</strong> of Experiences over 3+ Country Worldwide.
        </p>
      </div>
      <!--Profile Buttons-->
      <div class="xl:py-4 md:py-2 2xs:py-2">
        <button
          class="xl:m-1 md:m-1 2xs:text-sm xl:text-lg xl:py-4 lg:py-2 2xs:m-1 bg-slate-700 2xs:px-3 2xs:py-2 text-slate-50 2xl:p-4 xl:ml-0 2xs:ml-0 rounded-md"
        >
          <Icon
            name="material-symbols:add-call-outline-rounded"
            class="h-6 w-6"
          />
          Make a Call
        </button>
        <button class="xl:m-1 xl:mr-0 md:m-1 2xs:text-sm xl:py-4 2xs:mr-0 2xs:m-1 2xs:px-3 2xs:py-2 xl:text-xl lg:py-2 bg-slate-700 text-slate-50 2xl:p-4 rounded-md">
          <Icon
            name="material-symbols:cloud-download-outline-rounded"
            class="h-6 w-6"
          />
          Download CV
        </button>
      </div>
      <!--Social Links-->
      <div class="flex flex-row xl:gap-2 2xs:gap-1 mb-2">
        <NuxtLink to="https://www.facebook.com/abdulbasetbappy.info" class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:facebook" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 xl:w-8 " />
        </NuxtLink>
        <NuxtLink to="https://www.github.com/abdulbasetbappy" class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:github" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 xl:w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.codepen.com/abdulbasetbappy" class="border-none p-2  rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:codepen" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 xl:w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.youtube.com/abdulbasetbappy" class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:youtube" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 xl:w-8" />
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