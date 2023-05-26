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
          placeholder="Enter name"
          v-model="name"
          :class="v$.name.$error ? 'dark:border-red-500' : ''"
        />
      </div>
      <div class="flex flex-col w-full p-5 space-y-5">
        <lable class="text-black/50 font-medium text-xl"> Price </lable>
        <input
          type="text"
          class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50"
          placeholder="Enter Price"
          v-model="price"
          :class="v$.price.$error ? 'dark:border-red-500' : ''"
        />
      </div>
      <div class="flex flex-col w-full p-5 space-y-5">
        <lable class="text-black/50 font-medium text-xl"> Brand </lable>
        <input
          type="text"
          class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50"
          placeholder="Enter Price"
          v-model="price"
          :class="v$.price.$error ? 'dark:border-red-500' : ''"
        />
      </div>
      <div class="flex flex-col w-full px-5 space-y-5">
        <lable class="text-black/50 font-medium text-xl"> Image</lable>
        <div class="flex w-full">
          <div class="w-2/6 text-center">
            <button class="upload-example__button" @click="$refs.file.click()">
              <input
                ref="file"
                type="file"
                accept="image/*"
                @change="loadImage($event)"
              />
              Upload image
            </button>
          </div>
          <div
            class="w-2/6 border-2 rounded-lg border-slate-200 h-100 w-100 justify-center items-center flex"
          >
            <img
              id="photo"
              src="/src/assets/no-image.jpg"
              class="object-fit h-500 w-500"
            />
          </div>
          <Teleport to="#app1">
            <Modal ref="samplemodal" @displayImage="showImage($event)"></Modal>
          </Teleport>
          <!-- <input
          type="file"
          id="file"
          ref="file"
          @change="handleFileUpload()"
          class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50"
          placeholder="Enter Price"
        /> -->
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
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import "vue-advanced-cropper/dist/theme.compact.css";
import Modal from "../components/modals/ProductImageModal.vue";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Cropper,
    Modal,
  },
  data() {
    return {
      file: null,
      name: "",
      price: "",
      img: "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      //https://preline.co/docs/sidebar.html
    };
  },
  methods: {
    showImage(blob) {
      console.log("blob" + blob);
      this.file = blob;
      var imageUrl = URL.createObjectURL(blob);
      var img = document.querySelector("#photo");
      img.src = imageUrl;
    },
    reset() {
      this.image = {
        src: null,
        type: null,
        name: null,
      };
    },

    // destroyed() {
    // 	// Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
    // 	if (this.image.src) {
    // 		URL.revokeObjectURL(this.image.src);
    // 	}
    // },

    loadImage(event) {
      //this.$refs.samplemodal.loadImage(event)
      this.$refs.samplemodal.showUniqueModal(event);
    },
    async save() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }
      var fileOfBlob = null;
      let formdata = new FormData();
      formdata.append("name", this.name);
      formdata.append("price", this.price);
      formdata.append("brand_id", '647045840c87a98762f8d38a');
      formdata.append("image", this.file, "test.jpg");
      try {
        await this.axios
          .post(this.$api_url + "product/save", formdata, {
            method: "POST",
            headers: {
              Token: JSON.parse(localStorage.getItem("user")).token,
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response.data.success == true) {
              console.log("save");
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
      price: { required },
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
.upload-example__reset-button {
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  background: rgba(63, 179, 127, 0.7);
  transition: background 0.5s;
}
.upload-example__reset-button:hover {
  background: #3fb37f;
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
  background: #3fb37f;
  cursor: pointer;
  transition: background 0.5s;
  margin: 0 16px;
}
.upload-example__button:hover,
.upload-example__button:focus {
  background: #38d890;
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
