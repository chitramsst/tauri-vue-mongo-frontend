<template>
<div class="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-gray-800">
  <div class="flex justify-center items-end text-center min-h-screen sm:block">
    <div class="bg-gray-500 transition-opacity bg-opacity-75"></div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
    <div class="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform
        shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
      <div class="items-center w-full mr-auto ml-auto  max-w-7xl md:px-12 lg:px-24">
        <div class="grid grid-cols-1">
             <form ref='form'>
            <div class="flex flex-col items-center pt-6 pr-6 pb-6 pl-6 bg-gray-900">
              <img
                  src="https://socialized.pt/wp-content/uploads/2021/04/E-commerce-6-razoes-para-comecares-a-investir.png" class="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl">
              <p class="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">Sign In</p>
                    <div class="mb-3 w-full mt-3 w-[400px]">
                        <label for="email" class="block mb-2 text-xs font-medium text-white">Your email</label>
                        <input type="email" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :class="v$.email.$error?'dark:border-red-500':''"
                         @keydown.enter="login"
                        >
                    </div>
                       <div class="mb-3 w-full mt-3 w-[400px]">
                        <label for="password" class="block mb-2 text-xs font-medium text-white">Your password</label>
                        <input type="password" id="password" v-model="password" class="border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:bg-gray-700 dark:focus:border-blue-500" :class="v$.password.$error ?'dark:border-red-500':''">
                    </div>
              <div class="w-full mt-6">
                <a class="flex text-center items-center justify-center w-full pt-2 pr-2 pb-2 pl-2 text-base
                    font-medium text-white bg-blue-800 rounded-xl transition duration-500 ease-in-out transform
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="login()">Login</a>
              </div>
            </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
      return {
          email:'',
          password:'',
          login_error: false
      }
    },
    mounted() {
        
    },
    methods: {
        /* login data */
        async login(){
            let self = this
             const isFormCorrect = await this.v$.$validate();
            if (!isFormCorrect) {
                return
            }
            
              this.axios.post(this.$api_url+'login',{email:this.email,password:this.password})
            .then(function (response) {
              if(response.data.success===true) {
              console.log("yes")
              self.axios.defaults.headers.common['token'] = response.data.user.token;
              localStorage.setItem('user', JSON.stringify(response.data.user));
              self.$router.push({name: 'dashboard'})
              } else {
                this.login_error = true;
              }
            })
            .catch(function (error) {`
              // handle error
              console.log(error);`
            })
            .finally(function () {
              // always executed
            });
          
        },
        /* reset form */
        resetForm(){
            this.$refs.form.reset();
            this.$v.$reset() 
        }
    },
    
    validations() {
        return {
            email: { required },
            password: { required },
        };
    },
}
</script>
<style lang="">
    
</style>