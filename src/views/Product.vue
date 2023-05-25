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
        <lable class="text-black/50 font-medium text-xl"> Image</lable>

        <div class="upload-example__cropper-wrapper">
			<cropper ref="cropper" class="upload-example__cropper" check-orientation :src="image.src" />
			<div class="upload-example__reset-button" title="Reset Image" @click="reset()">
				<img src="../assets/images/shirt2.jpeg" />
			</div>
			<div class="upload-example__file-type" v-if="image.type">
				{{ image.type }}
			</div>
		</div>

        <div class="upload-example__buttons-wrapper">
			<button class="upload-example__button" @click="$refs.file.click()">
				<input ref="file" type="file" accept="image/*" @change="loadImage($event)" />
				Upload image
			</button>
			<button v-if="image.src" class="upload-example__button" @click="crop()">Download result</button>
		</div>
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
import 'vue-advanced-cropper/dist/theme.compact.css';
import { saveAs } from 'file-saver';

// This function is used to detect the actual image type,
function getMimeType(file, fallback = null) {
	const byteArray = new Uint8Array(file).subarray(0, 4);
	let header = '';
	for (let i = 0; i < byteArray.length; i++) {
		header += byteArray[i].toString(16);
	}
	switch (header) {
		case '89504e47':
			return 'image/png';
		case '47494638':
			return 'image/gif';
		case 'ffd8ffe0':
		case 'ffd8ffe1':
		case 'ffd8ffe2':
		case 'ffd8ffe3':
		case 'ffd8ffe8':
			return 'image/jpeg';
		default:
			return fallback;
	}
}

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Cropper,
  },
  data() {
    return {
      file: "",
      name: "",
      price: "",
      img: "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      image: {
				src: null,
				type: null,
			},
      //https://preline.co/docs/sidebar.html
    };
  },
  methods: {
    crop() {
    const { canvas } = this.$refs.cropper.getResult();
			canvas.toBlob((blob) => {
				//saveAs(blob);
        this.file = blob;
			}, this.image.type);
		},
		reset() {
			this.image = {
				src: null,
				type: null,
			};
		},
		loadImage(event) {
			// Reference to the DOM input element
			const { files } = event.target;
			// Ensure that you have a file before attempting to read it
			if (files && files[0]) {
				// 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
				if (this.image.src) {
					URL.revokeObjectURL(this.image.src);
				}
				// 2. Create the blob link to the file to optimize performance:
				const blob = URL.createObjectURL(files[0]);
				// 3. The steps below are designated to determine a file mime type to use it during the
				// getting of a cropped image from the canvas. You can replace it them by the following string,
				// but the type will be derived from the extension and it can lead to an incorrect result:
				//
				// this.image = {
				//    src: blob;
				//    type: files[0].type
				// }
				// Create a new FileReader to read this image binary data
				const reader = new FileReader();
				// Define a callback function to run, when FileReader finishes its job
        console.log("test")
				reader.onload = (e) => {
					// Note: arrow function used here, so that "this.image" refers to the image of Vue component
					this.image = {
						// Read image as base64 and set it as src:
						src: blob,
						// Determine the image type to preserve it during the extracting the image from canvas:
						type: getMimeType(e.target.result, files[0].type),
					};
				};
				// Start the reader job - read file as a data url (base64 format)
				reader.readAsArrayBuffer(files[0]);
			}
		},
	// destroyed() {
	// 	// Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
	// 	if (this.image.src) {
	// 		URL.revokeObjectURL(this.image.src);
	// 	}
	// },

    // change({ coordinates, canvas }) {
    //   console.log(coordinates, canvas);
    // },
    // handleFileUpload() {
    //   this.file = this.$refs.file.files[0];
    // },
    async save() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }

      let formdata = new FormData();
      formdata.append("name", this.name);
      formdata.append("price", this.price);
      formdata.append("image", this.file,'test.jpg');
      console.log(formdata);
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
            // console.log(response)
            if (response.data.success == true) {
              console.log("save");
            }
          });
      } catch (e) {
        console.log("kkk" + e);
      }
    },
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
<style >
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
  margin-top: 17px;
}
.upload-example__button {
  border: none;
  outline: solid transparent;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  background: #3fb37f;
  cursor: pointer;
  transition: background 0.5s;
  margin: 0 16px;
}
.upload-example__button:hover, .upload-example__button:focus {
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
