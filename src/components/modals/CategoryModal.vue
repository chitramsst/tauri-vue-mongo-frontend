<script>
import { Modal } from "bootstrap";
export default {
    data(){
        return{
        modelObj: ''
        }
    },
    mounted(){
    
    },
    methods:{
    show(){
        this.modelObj = new Modal(document.getElementById('modal_demo'));
        this.modelObj.show()
    
    },
    hide(){
        this.modelObj.hide()
    }
    }
}
// defineProps({
//   title: {
//     type: String,
//     default: "<<Title goes here>>",
//   },
// });
// let modalEle = ref(null);
// let thisModalObj = null;

// onMounted(() => {
//     console.log("haiu")
//   thisModalObj = new Modal(modalEle.value);
// });
// function _show() {
//   thisModalObj.show();
// }
// defineExpose({ show: _show });
</script>

<template>
 <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
  <div class="modal fade show" id="modal_demo"
 tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" 
 style="display:block">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" @click="OpenCloseFun()" class="btn-close" ></button>
      </div>
      <div class="modal-body">
       <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button"  >{{'Close'}}</button>
      </div>
    </div>
  </div>
</div>
    </transition>
 <!-- <div class="modal fade" id="modal_demo" tabindex="-1" data-bs-keyboard="false" data-bs-backdrop="static" ria-labelledby="modal_demo_label" aria-hidden="true" ref="modelEle">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal_demo_label">Modal title</h5>
        <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
</template>

<!-- <style scoped>
.modal2 {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style> -->