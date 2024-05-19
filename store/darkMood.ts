import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    darkMode: true,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    }
  },
});
