import { defineStore } from 'pinia'
export const useStore = defineStore('baseState', {
    state: () => {
      return { 
        popupOpen: false
    }
    },
  })