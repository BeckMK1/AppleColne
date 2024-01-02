import { defineStore } from 'pinia'
export const useStore = defineStore('baseState', {
    state: () => {
      return { 
        popupOpen: false,
        popupContent: '',
        accordionOpen:'phoneAndLaptop',
        isMainMobileNav:false,
        isSubMobileNav:false
    }
    },
    actions:{
      mainNavOn(){
        this.isMainMobileNav = !this.isMainMobileNav
      },
      subNavOn(){
        this.isSubMobileNav = !this.isSubMobileNav
      }
    }
  })