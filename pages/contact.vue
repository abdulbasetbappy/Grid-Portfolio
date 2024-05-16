<template>
  <div
    :class="{ dark: isDarkMode }"
    class="2xs:max-w-screen-[345px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl scroll-smooth font-san grid auto-rows-min md:grid-cols-12 2xs:grid-cols-1 2xs:p-2 2xs:m-auto m-2 p-8 gap-3"
  >
    <NuxtLayout name="profile" class="2xs:static md:col-start-1 md:col-end-6 lg:col-span-4 md:sticky md:top-[4.8rem] left-0 h-fit"></NuxtLayout>
    <div
      class="col-span-12 md:col-span-7 md:sticky md:top-[4.8rem] left-0 lg:col-span-8 md:col-start-6 lg:col-start-5 rounded-xl p-4 bg-white dark:bg-black dark:text-slate-100"
    >
      <!--Title-->  
      <div>
        <h2 class="text-3xl mb-3 font-bold">
          Let's 👋 <span class="text-blue-400"> Work </span>Together
        </h2>
        <p class="font-medium text-md">
          I'm here to help if you're searching for a product designer to bring
          your idea to life or a design partner to help take your business to
          the next level.
        </p>

        <!--Contact-->
        <div class="py-4 grid grid-cols-12 gap-4 grid-rows-1">
          <div class="2xs:col-span-12 md:col-span-5 flex bg-slate-900 p-2 rounded-lg justify-start gap-2 items-center flex-row">
            <div>
              <Icon name="material-symbols:mark-email-unread-outline-rounded" class="h-10 w-10" />
            </div>
            <div>
              <p>abdulbasetbappy@hotmail.com</p>
              <p>abdulbasetbappy@hotmail.com</p>
            </div>
          </div>
          <div class="flex 2xs:col-span-12 md:col-span-3 bg-slate-900 p-2 rounded-lg justify-start gap-2 items-center flex-row">
            <div>
              <Icon name="material-symbols:phone-in-talk-outline-rounded" class="h-10 w-10" />
            </div>
            <div>
              <p>+8801799568976</p>
              <p>+8801735465415</p>
            </div>
          </div>
          <div class="flex 2xs:col-span-12 md:col-span-4 bg-slate-900 p-2 rounded-lg justify-start items-center gap-2 flex-row">
            <div>
              <Icon name="material-symbols:house-outline-rounded" class="h-10 w-10" />
            </div>
            <div>
              <p>89/9 Jamalpur,</p>
              <p>Mymensingh, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      <!--Social Media Contact-->
      <div class="my-4 flex justify-center items-center gap-2" >
        <NuxtLink to="https://www.facebook.com/abdulbasetbappy.info" class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:facebook" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 xl:w-8 " />
        </NuxtLink>
        <NuxtLink to="www.github.com/abdulbasetbappy" class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:github" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 xl:w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.codepen.com/abdulbasetbappy" class="border-none p-2  rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:codepen" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 xl:w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.youtube.com/abdulbasetbappy" class="border-none p-2 rounded-md bg-slate-100 dark:bg-slate-900 dark:border-none">
          <Icon name="mdi:youtube" class="xl:h-8 2xs:h-6 2xs:w-6 text-slate-500 xl:w-8" />
        </NuxtLink>
      </div>
      <!--Form-->
      <div class="my-4">
        <form class="">
          <div class="flex justify-center 2xs:flex-col md:flex-row  items-center 2xs:gap-0 md:gap-4">
            <div class="2xs:w-[100%] md:w-[50%]">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                class="w-full text-xl outline-none text-slate-700 rounded-md p-2"
              />
            </div>
            <div class="2xs:w-[100%] md:w-[50%]">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                class="w-full text-xl text-slate-700 outline-none rounded-md p-2"
              />
            </div>
          </div>
          <div>
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your Subject"
              class="w-full text-xl text-slate-700 outline-none rounded-md p-2"
            />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              class="w-full text-xl text-slate-700 outline-none rounded-md p-2"
            ></textarea>
          </div>
          <button class="bg-slate-700 rounded-lg py-2 text-lg w-full" >Send</button>
        </form>
      </div>
      <!--Google Map-->
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.003959679149!2d90.42890129008046!3d23.711623337941433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cc7d566d03%3A0x2472a49ac0504cd2!2sJatra%20Bari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1713489414059!5m2!1sen!2sbd"
          class="w-full h-96 rounded-xl"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "~/store/darkMood";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.darkMode);
</script>

<style scoped></style>
