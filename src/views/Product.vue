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
      <div class="flex flex-col w-full px-5 space-y-5">
        <lable class="text-black/50 font-medium text-xl"> Brand </lable>
        <select
          class="h-15 w-full rounded-xl text-xl text-black/50 focus:border-stone-500 focus:ring-0 focus:inline-block"
          v-model="brand"
          placeholder="choose brand"
          :class="v$.brand.$error ? 'dark:border-red-500' : ''"
        >
          <option value="">choose brand</option>
          <option :value="item._id" v-for="item in brandList">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col w-full px-5 space-y-5">
        <lable class="text-black/50 font-medium text-xl "> Image</lable>
        <div class="flex w-full">
          <div class="w-2/6  text-center flex items-center  justify-center">
            <button class="upload-example__button bg-blue-700 hover:bg-blue-400 focus:bg-blue-400" @click="$refs.file.click()" >
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
import { required, numeric } from "@vuelidate/validators";
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
      brandList: [],
      file: null,
      name: "",
      price: "",
      brand: "",
      img: "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      //https://preline.co/docs/sidebar.html
    };
  },
  mounted() {
    this.getBrandsList();
  },
  methods: {
    /* get brands list */
    async getBrandsList() {
      try {
        await this.axios
          .get(this.$api_url + "product/get-brand-list", {
            headers: {
              Token: JSON.parse(localStorage.getItem("user")).token,
            },
          })
          .then((response) => {
            if (response.data.success == true) {
              this.brandList = response.data.data;
            }
          });
      } catch (e) {
        console.log("kkk" + e);
      }
    },
    /* image preview */
    showImage(blob) {
      this.file = blob;
      var imageUrl = URL.createObjectURL(blob);
      var img = document.querySelector("#photo");
      img.src = imageUrl;
    },
    /* reset data */
    resetData() {
      this.image = {
        src: null,
        type: null,
        name: null,
      };
      this.name = "";
      this.price = "";
      this.brand = "";
      var img = document.querySelector("#photo");
      img.src = '/src/assets/no-image.jpg';
      this.v$.$reset()
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
      formdata.append("brand_id", this.brand);
      if (this.file) {
        console.log(this.file)
        formdata.append("image", this.file,"test.jpg");
      }
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
              this.$toast.info("Product Saved Successfully");
              this.$nextTick(()=>{
                this.resetData();
              })
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
      price: { required, numeric },
      brand: { required },
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
