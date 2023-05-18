import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('login', {
      actions: {
        isLoggedIn() {
          if(localStorage.getItem('user')===undefined) {
            return false;
          } else {
            return true;
          }
      },
    },
  })