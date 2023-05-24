<template lang="">
   <div class="shadow-2xl w-[100%] min-h-[30%] rounded-3xl">
          <h1 class="w-full text-left p-5 text-2xl font-bold text-black/50">
            Category Management
          </h1>
          <div class="grid grid-cols-2 gap-10">
            <div class="flex flex-col w-full p-5 space-y-5">
              <lable class="text-black/50 font-medium text-xl"> Name </lable>
              <input
                type="text"
                class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div class="flex items-center justify-end w-full p-10 space-x-10">
            <button class="rounded-xl px-10 font-bold text-md bg-gray-800/70">
              Save
            </button>
            <button class="rounded-xl px-10 font-bold text-md bg-red-800/90">
              Cancel
            </button>
          </div>
        </div>
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
