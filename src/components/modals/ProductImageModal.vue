<template>
  <div
    class="modal fade"
    id="uniqueId"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    role="dialog"
    aria-labelledby="uniqueIdlLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
      <div class="modal-content">
        <!-- <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeUniqueModal()"
          >
            <span aria-hidden="true" class="text-black">&times;</span>
          </button>
        </div> -->
        <div class="modal-body">
          <div class="upload-example__cropper-wrapper">
            <cropper
              ref="cropper"
              class="upload-example__cropper"
              check-orientation
              :src="image.src"
            />
            <div class="upload-example__file-type" v-if="image.type">
              {{ image.type }}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeUniqueModal()"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="crop()">crop</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from "bootstrap";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import "vue-advanced-cropper/dist/theme.compact.css";

function getMimeType(file, fallback = null) {
  const byteArray = new Uint8Array(file).subarray(0, 4);
  let header = "";
  for (let i = 0; i < byteArray.length; i++) {
    header += byteArray[i].toString(16);
  }
  console.log(header);
  switch (header) {
    case "89504e47":
      return "image/png";
    case "47494638":
      return "image/gif";
    case "ffd8ffe0":
    case "ffd8ffe1":
    case "ffd8ffe2":
    case "ffd8ffe3":
    case "ffd8ffe8":
      return "image/jpeg";
    case "52494646":
      return "image/webp";
    default:
      return fallback;
  }
}

export default {
  name: "randomName",
  props: {},
  components: {
    Cropper,
  },
  data() {
    return {
      uniqueModal: null,
      image: {
        src: null,
        type: null,
      },
    };
  },
  mounted() {
    this.uniqueModal = new Modal(document.getElementById("uniqueId"));

    // this.$emit('changeTitle','Awesome ')
  },
  methods: {
    crop() {
      const { canvas } = this.$refs.cropper.getResult();
      canvas.toBlob((blob) => {
        this.$emit("displayImage", blob);
      }, this.image.type);
      this.uniqueModal.hide();
    },
    loadImage(event) {
      const { files } = event.target;
      if (files && files[0]) {
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src);
        }
        const blob = URL.createObjectURL(files[0]);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = {
            src: blob,
            type: getMimeType(e.target.result, files[0].type),
            name: files[0].name,
          };
        };
        reader.readAsArrayBuffer(files[0]);
      }
    },
    showUniqueModal(event) {
      this.uniqueModal.show();
      this.$nextTick(() => {
        this.loadImage(event);
      });
    },
    closeUniqueModal() {
      this.uniqueModal.hide();
    },
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

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>
