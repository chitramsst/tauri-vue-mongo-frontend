<template lang="">
        <div class="shadow-2xl w-[100%] min-h-[30%] rounded-3xl">
          <h1 class="w-full text-left p-5 text-2xl font-bold text-black/50">
            Product Management
          </h1>
          <div class="grid grid-cols-2 gap-10">
            <div class="flex flex-col w-full p-5 space-y-5">
              <lable class="text-black/50 font-medium text-xl"> Name </lable>
              <input
                type="text"
                class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50"
                placeholder="Enter name" v-model="name"  :class="v$.name.$error ? 'dark:border-red-500' : ''"
              />
            </div>
            <div class="flex flex-col w-full p-5 space-y-5">
              <lable class="text-black/50 font-medium text-xl"> Price </lable>
              <input
                type="text"
                class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50"
                placeholder="Enter Price" v-model="price"  :class="v$.price.$error ? 'dark:border-red-500' : ''"
              />
            </div>
            <div class="flex flex-col w-full px-5 space-y-5">
              <lable class="text-black/50 font-medium text-xl"> Image</lable>
              <input
                type="file" id="file" ref="file" @change="handleFileUpload()"
                class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50"
                placeholder="Enter Price"
              />
            </div>
          </div>
          <div class="flex items-center justify-end w-full p-10 space-x-10">
            <button class="rounded-xl px-10 font-bold text-md bg-gray-800/70" @click="save()">
              Save
            </button>
            <button class="rounded-xl px-10 font-bold text-md bg-red-800/90">
              Cancel
            </button>
          </div>
        </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
    setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      file: '',
      name: '',
      price: ''
      //https://preline.co/docs/sidebar.html
    };
  },
  methods: {
    handleFileUpload(){

        this.file = this.$refs.file.files[0];
    },
      async save(){
        const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }

        let formdata = new FormData();
                formdata.append('name', this.name );
                formdata.append('price',this.price)
                formdata.append('image', this.file);
                console.log(formdata)
                try {
                    await this.axios.post(this.$api_url +'product/save', formdata,
                        {
                            method: 'POST',
                            headers: {
                                'Token': JSON.parse(localStorage.getItem('user')).token,
                                'Content-Type': 'multipart/form-data',
                            }
                        }).then((response) => {
                           // console.log(response)
                            if (response.data.success == true) {
                               console.log("save")
                            }
                        })
                } catch (e) {
                    console.log("kkk" + e)
                }
      }
  },
  watch: {
    sidebarVisibility() {
      this.sidebarVisibility = this.sidebarVisibility;
    },
  },
  validations() {
    return {
      name: { required },
      price: { required },
    };
  },
};
</script>
<style lang=""></style>
