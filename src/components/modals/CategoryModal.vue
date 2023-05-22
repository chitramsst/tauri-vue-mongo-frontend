
<template>
 <div class="modal fade" id="uniqueId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="uniqueIdlLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeUniqueModal()">
          <span aria-hidden="true" class="text-black">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         12321
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  @click="closeUniqueModal()">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 
</template>
<script>
import { Modal } from "bootstrap";
// //import BootstrapVue3 from 'bootstrap-vue-3'
// import 'bootstrap/dist/css/bootstrap.css'
// //import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

export default {
  name:"randomName",
   data(){
   return {uniqueModal:null}
  },
  mounted(){
    this.uniqueModal = new Modal(document.getElementById('uniqueId'));
    
  },
  methods:
  {
   showUniqueModal() {
   
    this.uniqueModal.show();
    },
   closeUniqueModal() {
    this.uniqueModal.hide();
   },
  },
}
</script>

<!-- <style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style> -->
<!-- 
<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped src="bootstrap-vue/dist/bootstrap-vue.css"></style> -->

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>