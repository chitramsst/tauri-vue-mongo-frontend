<template lang="">
  <div class="w-screen mx-auto flex flex-row">
    <div
      class="inset-y-0 w-64 bg-gray-900 transition-opacity bg-opacity-75 fixed block" v-if="sidebarVisibility"
    >
      <a href="#" class="block p-4 text-white hover:bg-gray-700">Dashboard</a>
      <a href="#" class="block p-4 text-white hover:bg-gray-700">Logout</a>
    </div>
    <div class="w-full text-black fixed" :class="sidebarVisibility?'ml-64':''">
      <div class="h-10 bg-gray-900 bg-opacity-75 text-slate-400">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="h-10 w-10 p-1 bg-gray-900/80 shadow-md rounded-md"
          @click="sidebarVisibility==true ? sidebarVisibility=false : sidebarVisibility=true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLogin: false,
      sidebarVisibility: true
      //https://preline.co/docs/sidebar.html
    };
  },
  watch:{
    sidebarVisibility(){
      this.sidebarVisibility = this.sidebarVisibility
    }
  }
};
</script>
<style lang=""></style>
