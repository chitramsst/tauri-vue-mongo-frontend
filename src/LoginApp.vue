
<template>
    <LoginTemplate v-if="currentTemplate=='LoginTemplate'"/>
    <AdminTemplate v-if="currentTemplate=='AdminTemplate'"/>
        
</template>

<script>
import LoginTemplate from '../src/templates/LoginTemplate.vue'
import AdminTemplate from '../src/templates/AdminTemplate.vue'
export default {
    computed:{
     currentTemplate(){
        return this.$route.meta.template
     }
    },
    components : {
        LoginTemplate,
        AdminTemplate
    }
}
</script>