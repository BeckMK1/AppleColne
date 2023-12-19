import { defineStore } from 'pinia'
export const useStore = defineStore('baseState', {
    state: () => {
      return { 
        popupOpen: false,
        popupContent: '',
        accordionOpen:'phoneAndLaptop',
        isMainMobileNav:false
    }
    },
    actions:{
      mainNavOn(){
        this.isMainMobileNav = !this.isMainMobileNav
      }
    }
  })