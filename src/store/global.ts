import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      isLoading: false,
    };
  },
  getters: {},
  actions: {
    setIsLoading(state: boolean) {
      this.isLoading = state;
    },
  },
});
