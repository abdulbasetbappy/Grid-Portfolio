<template>
    <!--Profile Details-->
    <div
    :class="{dark:isDarkMode}"
      class="col-span-12 md:row-span-2 md:row-start-1 md:col-span-4 rounded-md p-4 bg-white dark:bg-black"
    >
      <!--Profile Picture-->
      <div class="bg-stone-100 rounded-md">
        <img
          src="~/assets/Profile.png"
          class="rounded-md h-[325px] w-[430px]"
          alt=""
        />
      </div>
      <!--Profile Info-->
      <div class="py-4 dark:text-slate-200">
        <h2 class="py-4 text-2xl font-semibold">Abdul Baset Bappy 👋</h2>
        <p>
          A Passionate <strong>Frontend Developer</strong> 🖥️ &
          <strong>WordPress Designer</strong> having
          <strong>1+ years</strong> of Experiences over 3+ Country Worldwide.
        </p>
      </div>
      <!--Profile Buttons-->
      <div>
        <button
          class="m-2 bg-slate-700 text-slate-50 py-2 ml-0 px-4 rounded-md"
        >
          <Icon
            name="material-symbols:add-call-outline-rounded"
            class="h-6 w-6"
          />
          Make a Call
        </button>
        <button class="m-2 bg-slate-700 text-slate-50 py-2 px-4 rounded-md">
          <Icon
            name="material-symbols:cloud-download-outline-rounded"
            class="h-6 w-6"
          />
          Download CV
        </button>
      </div>
      <!--Social Links-->
      <div class="flex flex-row gap-2">
        <button class="border p-2 rounded-md bg-slate-100">
          <Icon name="mdi:facebook" class="h-8 text-slate-500 w-8" />
        </button>
        <button class="border p-2 rounded-md bg-slate-100">
          <Icon name="mdi:github" class="h-8 text-slate-500 w-8" />
        </button>
        <button class="border p-2 rounded-md bg-slate-100">
          <Icon name="mdi:codepen" class="h-8 text-slate-500 w-8" />
        </button>
        <button class="border p-2 rounded-md bg-slate-100">
          <Icon name="mdi:youtube" class="h-8 text-slate-500 w-8" />
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