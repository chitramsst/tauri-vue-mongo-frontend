<template lang="">
 <div class="h-screen bg-white rounded-lg p-5 w-full"></div>
</template>
<script>
export default {
  data() {
    return {
      showLogin: false,
      sidebarVisibility: true,
      //https://preline.co/docs/sidebar.html
    };
  },
  watch: {
    sidebarVisibility() {
      this.sidebarVisibility = this.sidebarVisibility;
    },
  },
};
</script>
<style lang=""></style>
