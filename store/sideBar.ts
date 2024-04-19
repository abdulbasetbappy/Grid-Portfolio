// store/sidebar.ts
import { defineStore } from 'pinia';

export const useSideBarStore = defineStore('sidebar', {
  state: () => ({
    showSidebar: false,
  }),
  actions: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
});
