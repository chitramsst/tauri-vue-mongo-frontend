<template>
  <div class="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-gray-800">
    <div
      class="flex justify-center items-end text-center min-h-screen sm:block"
    >
      <div class="flex justify-start p-5">
        <button class="bg-blue-800 px-4 py-4 rounded-full">
          <span class="flex gap-2" @click="$router.push({ name: 'home' })">
            <svg
              fill="#ffffff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="0 0 495.398 495.398"
              xml:space="preserve"
              class="h-5 w-5"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
                    />
                    <path
                      d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </button>
      </div>

      <div
        class="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
      >
        <div
          class="items-center w-full mr-auto ml-auto max-w-7xl md:px-12 lg:px-24"
        >
          <div class="grid grid-cols-1">
            <form ref="form">
              <div
                class="flex flex-col items-center pt-6 pr-6 pb-6 pl-6 bg-gray-900"
              >
                <img
                  src="https://socialized.pt/wp-content/uploads/2021/04/E-commerce-6-razoes-para-comecares-a-investir.png"
                  class="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                />
                <p
                  class="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl"
                >
                  Sign In
                </p>
                <div class="mb-3 w-full mt-3">
                  <label
                    for="email"
                    class="block mb-2 text-xs font-medium text-white"
                    >Your email</label
                  >
                  <input
                    type="email"
                    v-model="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :class="v$.email.$error ? 'dark:border-red-500' : ''"
                    @keydown.enter="login"
                  />
                </div>
                <div class="mb-3 w-full mt-3">
                  <label
                    for="password"
                    class="block mb-2 text-xs font-medium text-white"
                    >Your password</label
                  >
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    class="border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:bg-gray-700 dark:focus:border-blue-500"
                    :class="v$.password.$error ? 'dark:border-red-500' : ''"
                  />
                </div>
                <div class="w-full mt-6">
                  <a
                    class="flex text-center items-center justify-center w-full pt-2 pr-2 pb-2 pl-2 text-base font-medium text-white bg-blue-800 rounded-xl transition duration-500 ease-in-out transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="login()"
                    >Login</a
                  >
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
import Modal from "../components/modals/ProductImageModal.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      login_error: false,
    };
  },
  components: {
    Modal,
  },
  mounted() {},
  methods: {
    openModal() {
      this.$refs.samplemodal.showUniqueModal();
    },
    /* login data */
    async login() {
      let self = this;
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }

      this.axios
        .post(this.$api_url + "login", {
          email: this.email,
          password: this.password,
        })
        .then(function (response) {
          if (response.data.success === true) {
            self.axios.defaults.headers.common["token"] =
              response.data.user.token;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            self.$router.push({ name: "dashboard" });
          } else {
            this.login_error = true;
          }
        })
        .catch(function (error) {
          `
              // handle error
              console.log(error);`;
        })
        .finally(function () {
          // always executed
        });
    },
    /* reset form */
    resetForm() {
      this.$refs.form.reset();
      this.$v.$reset();
    },
  },

  validations() {
    return {
      email: { required },
      password: { required },
    };
  },
};
</script>
<style lang=""></style>
