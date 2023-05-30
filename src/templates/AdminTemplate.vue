<template lang="">
  <div class="w-full mx-auto flex flex-row bg-slate-900">
    <div
      class="inset-y-0 bg-slate-900 transition-opacity bg-opacity-75 fixed block"
      :class="sidebarVisibility ? 'w-64' : 'w-28'"
    >
      <div
        class="justify-center flex items-center py-4" @click="$router.push({name:'home'})"
      >
        <img
          src="../assets/pngegg.png"
          class="m-2 w-20 h-20 border-spacing-2  object-fill object-center p-2"
          alt=""
        />
      </div>
      <a
        @click="$router.push({ name: 'dashboard' })"
        class="p-4 text-white bg-slate-700 hover:bg-slate-700 font-bold text-md flex flex-row items-center space-x-5"
        :class="sidebarVisibility ? 'justify-left' : 'justify-center'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7 stroke-[2px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
        <span
          class="flex items-center justify-center h-full"
          v-if="sidebarVisibility"
          >Dashboard</span
        ></a
      >
      <a
        @click="$router.push({ name: 'brand' })"
        class="p-4 text-white hover:bg-slate-700 font-bold text-md flex flex-row items-center space-x-5"
        :class="sidebarVisibility ? 'justify-left' : 'justify-center'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-7 w-7 stroke-[2px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span
          class="flex items-center justify-center h-full"
          v-if="sidebarVisibility"
          >Brand</span
        ></a
      >
      <a
        @click="$router.push({ name: 'product' })"
        class="p-4 text-white hover:bg-slate-700 font-bold text-md flex flex-row items-center space-x-5"
        :class="sidebarVisibility ? 'justify-left' : 'justify-center'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7 stroke-[2px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <span
          class="flex items-center justify-center h-full"
          v-if="sidebarVisibility"
          >Product</span
        ></a
      >
      <a
        href="#"
        class="p-4 text-white hover:bg-slate-700 font-bold text-md flex flex-row items-center space-x-5"
        :class="sidebarVisibility ? 'justify-left' : 'justify-center'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7 stroke-[2px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <span
          class="flex items-center justify-center h-full"
          v-if="sidebarVisibility"
          @click="logout"
          >Logout</span
        ></a
      >
    </div>
    <div
      class="w-full text-black"
      :class="sidebarVisibility == true ? 'ml-64' : 'ml-28'"
    >
      <div
        class="h-20 bg-slate-900 bg-opacity-75 text-slate-400 justify-left items-center flex"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="h-10 w-10 p-1 bg-slate-900/80 shadow-md rounded-md"
          @click="
            sidebarVisibility == true
              ? (sidebarVisibility = false)
              : (sidebarVisibility = true)
          "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </div>
      <div class="h-full min-h-[810px] bg-white rounded-3xl p-10">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      sidebarVisibility: true,
    };
  },
  methods: {
     logout(){
      localStorage.setItem("user",null);
      this.$router.push({
        name: 'login'
      })
     }
  },
  watch: {
    sidebarVisibility() {
      this.sidebarVisibility = this.sidebarVisibility;
    },
  },
};
</script>
<style lang=""></style>
