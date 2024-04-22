<template>
    <!--Profile Details-->
    <div
    :class="{dark:isDarkMode}"
      class="col-span-12 row-span-2 md:row-span-2  md:row-start-1 md:col-span-6
      lg:col-span-4 rounded-xl p-6 2xs:p-4 md:p-4 bg-white dark:bg-black"
    >
      <!--Profile Picture-->
      <div class="bg-stone-100 flex justify-center items-center overflow-hidden dark:bg-slate-900 rounded-xl">
        <img
          src="~/assets/Profile.png"
          class="rounded-xl h-[325px] w-[430px] lg:h-[235px] md:h-[265px] 2xs:h-[260px] 2xs:max-w-[315px] xs:h-[250px] xs:max-w-[315px]"
          alt=""
        />
      </div>
      <!--Profile Info-->
      <div class="pt-4 md:pt-3 2xs:pt-2 dark:text-slate-200">
        <h2 class="py-2 text-3xl md:text-2xl 2xs:text-2xl font-semibold">Abdul Baset Bappy👋</h2>
        <p class="text-md md:text-sm 2xs:text-base">
          A Passionate <strong>Frontend Developer</strong> 🖥️ &
          <strong>WordPress Designer</strong> having
          <strong>1+ years</strong> of Experiences over 3+ Country Worldwide.
        </p>
      </div>
      <!--Profile Buttons-->
      <div class="py-4 md:py-2 2xs:py-2">
        <button
          class="m-2 md:m-1 2xs:text-sm lg:py-3 2xs:m-1 bg-slate-700 2xs:px-3 2xs:py-2 text-slate-50 py-3 ml-0 2xs:ml-0 px-4 rounded-md"
        >
          <Icon
            name="material-symbols:add-call-outline-rounded"
            class="h-6 w-6"
          />
          Make a Call
        </button>
        <button class="m-2 md:m-1 2xs:text-sm 2xs:mr-0 2xs:m-1 2xs:px-3 2xs:py-2 lg:py-3 bg-slate-700 text-slate-50 py-3 px-4 rounded-md">
          <Icon
            name="material-symbols:cloud-download-outline-rounded"
            class="h-6 w-6"
          />
          Download CV
        </button>
      </div>
      <!--Social Links-->
      <div class="flex flex-row gap-2 2xs:gap-1 mb-2">
        <button class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:facebook" class="h-8 2xs:h-6 2xs:w-6 text-slate-500 w-8 " />
        </button>
        <button class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:github" class="h-8 2xs:h-6 2xs:w-6 text-slate-500 w-8" />
        </button>
        <button class="border-none p-2  rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:codepen" class="h-8 2xs:h-6 2xs:w-6 text-slate-500 w-8" />
        </button>
        <button class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:youtube" class="h-8 2xs:h-6 2xs:w-6 text-slate-500 w-8" />
        </button>
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