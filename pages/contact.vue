<template>
  <div
    :class="{ dark: isDarkMode }"
    class="2xs:max-w-screen-[345px] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl scroll-smooth font-san grid auto-rows-min md:grid-cols-12 2xs:grid-cols-1 2xs:p-2 2xs:m-auto m-2 p-8 gap-4 2xs:gap-2 xl:gap-3 2xl:gap-4"
  >
    <NuxtLayout name="profile" class="2xs:static md:col-start-1 md:col-end-7 lg:col-span-4 md:sticky md:top-[4.8rem] left-0 h-fit"></NuxtLayout>
    <div
      class="col-span-12 md:col-span-6 md:sticky md:top-[4.8rem] left-0 lg:col-span-8 md:col-start-7 lg:col-start-5 rounded-xl p-4 backdrop-blur-3xl shadow-xl bg-neutral-100 dark:bg-neutral-700 dark:bg-opacity-30 bg-opacity-30 dark:text-neutral-100"
    >
      <!--Title-->  
      <div>
        <h2 class="2xs:text-3xl sm:text-4xl mb-3 font-bold">
          Let's 👋 <span class="text-blue-400"> Work </span>Together
        </h2>
        <p class="font-medium text-md">
          I'm here to help if you're searching for a product designer to bring
          your idea to life or a design partner to help take your business to
          the next level.
        </p>

        <!--Contact-->
        <div class="py-4 grid grid-cols-12 gap-4 lg:gap-2 grid-rows-1 md:grid-rows-3 lg:grid-rows-1">
          <!--Mail-->
          <div class="2xs:col-span-12 md:col-span-12 md:row-span-1 lg:col-span-6 flex bg-neutral-900 p-2 sm:p-4 rounded-lg justify-start gap-2 items-center flex-row">
            <div>
              <Icon name="material-symbols:mark-email-unread-outline-rounded" class="h-10 w-10 xl:h-12 xl:w-12" />
            </div>
            <div class="2xs:text-sm xs:text-base lg:text-sm">
              <p>Mail:</p>
              <p>abdulbasetbappy@hotmail.com</p>
            </div>
          </div>
          <!--Call-->
          <div class="flex 2xs:col-span-12 md:col-span-12 lg:col-span-6 bg-neutral-900 p-2 sm:p-4 rounded-lg justify-start gap-2 items-center flex-row">
            <div>
              <Icon name="material-symbols:phone-in-talk-outline-rounded" class="h-10 w-10 xl:h-12 xl:w-12" />
            </div>
            <div class="2xs:text-sm xs:text-base lg:text-sm">
              <p>Call:</p>
              <p>+8801904015818</p>
            </div>
          </div>
        </div>
      </div>
      <!--Social Media Contact-->
      <div class="my-4 flex justify-center items-center gap-2" >
        <NuxtLink to="https://www.facebook.com/abdulbasetbappy.info" class="border-none p-2 rounded-md bg-neutral-100 dark:bg-neutral-900 dark:border-none">
          <Icon name="mdi:facebook" class="xl:h-8 2xs:h-6 2xs:w-6 text-neutral-500 xl:w-8 sm:w-8 sm:h-8 " />
        </NuxtLink>
        <NuxtLink to="www.github.com/abdulbasetbappy" class="border-none p-2 rounded-md bg-neutral-100 dark:bg-neutral-900 dark:border-none">
          <Icon name="mdi:github" class="xl:h-8 2xs:h-6 2xs:w-6 text-neutral-500 xl:w-8 sm:w-8 sm:h-8" />
        </NuxtLink>
        <NuxtLink to="https://www.codepen.com/abdulbasetbappy" class="border-none p-2  rounded-md bg-neutral-100 dark:bg-neutral-900 dark:border-none">
          <Icon name="mdi:codepen" class="xl:h-8 2xs:h-6 2xs:w-6 text-neutral-500 xl:w-8 sm:w-8 sm:h-8" />
        </NuxtLink>
        <NuxtLink to="https://www.youtube.com/abdulbasetbappy" class="border-none p-2 rounded-md bg-neutral-100 dark:bg-neutral-900 dark:border-none">
          <Icon name="mdi:youtube" class="xl:h-8 2xs:h-6 2xs:w-6 text-neutral-500 xl:w-8 sm:w-8 sm:h-8" />
        </NuxtLink>
      </div>
      <!--Form-->
      <div class="my-4">
        <form class="">
          <div class="flex justify-center 2xs:flex-col sm:flex-row  items-center 2xs:gap-2 md:gap-4">
            <!--Name-->
            <div class="2xs:w-[100%] sm:w-[50%]">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="formData.name"
                placeholder="Your Name"
                class="w-full 2xs:text-sm sm:text-base outline-none placeholder-neutral-700 text-neutral-200 caret-neutral-400 bg-neutral-500 rounded-md p-2"
              />
            </div>
            <!--Email-->
            <div class="2xs:w-[100%] sm:w-[50%]">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                name="email"
                placeholder="Your Email"
                class="w-full 2xs:text-sm sm:text-base placeholder-neutral-700 text-neutral-200 caret-neutral-400 bg-neutral-500 outline-none rounded-md p-2"
              />
            </div>
          </div>
          <!--Subject-->
          <div>
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              v-model="formData.subject"
              placeholder="Your Subject"
              class="w-full 2xs:text-sm sm:text-base placeholder-neutral-700 text-neutral-200 caret-neutral-400 bg-neutral-500 outline-none rounded-md p-2"
            />
          </div>
          <!--Message-->
          <div>
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              name="message"
              placeholder="Your Message"
              class="w-full 2xs:text-sm sm:text-base placeholder-neutral-700 text-neutral-200 caret-neutral-400 bg-neutral-500 outline-none rounded-md p-2"
            ></textarea>
          </div>
          <!--Send Button-->
          <button class="bg-neutral-700 rounded-lg mt-2 py-2 2xs:text-base w-full" @click.prevent="handleSend">Send</button>
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


const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
})
const mail = useMail()
const handleSend = () => {
  console.log(formData);
  mail.send({
  from: formData.email,
  subject: formData.subject,
  text: formData.message,
})
}
</script>

<style scoped></style>
