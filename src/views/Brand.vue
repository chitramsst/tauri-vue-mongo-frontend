<template lang="">
  <div class="shadow-2xl w-[100%] min-h-[30%] rounded-3xl">
    <h1 class="w-full text-left p-5 text-2xl font-bold text-black/50">
      Brand Management
    </h1>
    <div class="grid grid-cols-2 gap-10">
      <div class="flex flex-col w-full px-5 space-y-5">
        <lable class="text-black/50 font-medium text-xl"> Name </lable>
        <input
          type="text"
          class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50"
          placeholder="Enter name"
          v-model="name"
          :class="v$.name.$error ? 'dark:border-red-500' : ''"
        />
      </div>
      <div class="flex flex-col w-full px-5 space-y-5">
        <lable class="text-black/50 font-medium text-xl"> Logo</lable>
        <div class="flex w-full">
          <div class="upload-example__button">
            <input
              ref="file"
              type="file"
              accept="image/*"
              @change="onSelectFile()"
            />
          </div>
          <div class="w-2/6 h-100 w-100 justify-center items-center flex">
            <img
              id="photo"
              ref="fileInput"
              src="/src/assets/no-image.jpg"
              class="object-fit h-300 w-300 rounded-3xl"
              @click="$refs.file.click()"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end w-full p-10 space-x-10">
      <button
        class="rounded-xl px-10 font-bold text-md bg-gray-800/70"
        @click="save()"
      >
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
      name: null,
    };
  },
  methods: {
    onSelectFile() {
      const input = this.$refs.file;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          var img = document.querySelector("#photo");
          img.src = reader.result;
        };
        reader.readAsDataURL(files[0]);
        this.file = files[0];
      }
    },
    async save() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }
      try {
        let formdata = new FormData();
        formdata.append("name", this.name);
        formdata.append("image", this.file,this.file.name);
        await this.axios
          .post(this.$api_url + "brand/save", formdata, {
            method: "POST",
            headers: {
              Token: JSON.parse(localStorage.getItem("user")).token,
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.info("Brand Saved Successfully");
            }
          });
      } catch (e) {
        console.log("kkk" + e);
      }
    },
  },
  validations() {
    return {
      name: { required },
    };
  },
};
</script>
<style>
.upload-example {
  margin-top: 20px;
  margin-bottom: 20px;
  user-select: none;
}
.upload-example__cropper {
  border: solid 1px #eee;
  min-height: 300px;
  max-height: 500px;
  width: 100%;
}
.upload-example__cropper-wrapper {
  position: relative;
}

.upload-example__buttons-wrapper {
  display: flex;
  justify-content: center;
}
.upload-example__button {
  border: none;
  outline: solid transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.5s;
  margin: 0 16px;
}
.upload-example__button input {
  display: none;
}
.upload-example__file-type {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #0d0d0d;
  border-radius: 5px;
  padding: 0px 10px;
  padding-bottom: 2px;
  font-size: 12px;
  color: white;
}
</style>
