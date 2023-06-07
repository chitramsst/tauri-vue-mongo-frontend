<template lang="">
  <div>
    <div
      class="w-full h-20 bg-white shadow-sm mb-10 text-gray-600 flex items-center justify-between"
    >
      <div
        class="flex text-md font-bold space-x-5 justify-center items-center w-[50%]"
      >
        <button class="bg-[#F8F8F8] px-4 py-4 rounded-full shadow-none">
          <span class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-[#C5C4C4]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </button>
        <span v-for="item in brandList" :key="item._id"> {{ item.name }} </span>
        <button class="bg-[#FF9494] px-4 py-4 rounded-full shadow-none">
          <span class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </button>
      </div>
      <div
        class="flex text-sm font-bold space-x-5 justify-center items-center top-4 relative shadow-sm bg-white rounded-full p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <div
        class="flex text-sm font-bold space-x-5 justify-center items-center w-[40%] gap-2"
      >
        <div
          class="flex items-center justify-center gap-1 shadow-sm p-2 bg-[#FAFAFA]"
        >
          <button class="bg-[#FF9494] px-4 py-4 rounded-full">
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
          class="flex items-center justify-center px-5 gap-x-5 shadow-sm bg-[#FAFAFA] divide-x-2 p-2"
        >
          <div class="flex gap-1 items-center justify-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF9494"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-[#FF9494]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </span>
            <span class="text-[#FF9494]"> 09 </span>
          </div>
          <div class="flex gap-1 items-center justify-center p-1 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF9494"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-[#FF9494]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span class="text-[#FF9494]"> $985.,35 </span>
          </div>
        </div>
        <div class="relative" @click="showLogin = !showLogin">
          <!-- <div
            class="absolute z-10 mt-2 rounded-md bg-white shadow-lg top-5 -right-[80px]"
          >
            <div class="py-1">
              <a
                @click="$router.push({ name: 'login' })"
                class="text-gray-700 block px-4 py-2 text-sm"
                v-if="
                  showLogin == true && (user === null || user === undefined)
                "
                >Login</a
              >
              <a
                @click="logout()"
                class="text-gray-700 block px-4 py-2 text-sm"
                v-if="showLogin == true && user !== null && user !== undefined"
                >Signout</a
              >
            </div>
          </div> -->

          <button class="bg-[#FF9494] px-4 py-4 rounded-full"  v-if="user !== null && user !== undefined">
            <span class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                />
              </svg>
              <!-- <svg
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
              </svg> -->
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- popular product -->
    <div class="w-full bg-white py-20">
      <div class="flex justify-between items-center w-full px-36"></div>
      <div class="grid grid-cols-4 gap-7 w-full pt-7 px-36">
        <div
          class="bg-white shadow-lg p-2 rounded-lg max-h-[400px]"
          v-for="(item, index) in productList"
          :key="item_id"
        >
          <div class="relative">
            <img
              :src="$api_url + item.image"
              class="h-[250px] w-full rounded-2xl"
            />
            <template v-if="item.like_id.length > 0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF9494"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-9 h-9 text-[#FF9494] absolute top-2 right-2 rounded-full bg-white p-2"
                v-if="user !== null && user !== undefined"
                @click="toggleLike(item._id)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </template>
            <template v-else>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-9 h-9 text-[#C5C4C4] absolute top-2 right-2 rounded-full bg-white p-2 stroke-[3px]"
                v-if="user !== null && user !== undefined"
                @click="toggleLike(item._id)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </template>
          </div>
          <div class="flex m-5 justify-between">
            <div class="flex flex-col">
              <span class="text-black text-lg font-bold"> Smart t- Shirt </span>
              <div class="flex gap-4">
                <span
                  class="text-[#C5C4C4] line-through decoration-[#FF9494] text-[13px] font-bold"
                >
                  {{ item.price }}$
                </span>
                <div class="flex justify-center items-center">
                  <span class="text-black font-extrabold text-[20px]">
                    {{
                      parseFloat(item.price) -
                      (parseFloat(item.price) * 35) / 100
                    }}
                  </span>
                  <span
                    class="text-[#FF9494] font-extrabold text-[12px] align-bottom"
                  >
                    $
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div
                class="px-4 py-2 bg-[#FF9494] rounded-full hover:bg-[#FF9494]/80 hover:text-white font-extrabold text-sm"
              >
                BUY NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from "bootstrap";
import CategoryModal from "../components/modals/ProductImageModal.vue";
export default {
  data() {
    return {
      showLogin: false,
      brandList: [],
      productList: [],
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  mounted() {
    if (this.user !== null) {
    }
    this.getBrandsList();
    this.getBestSellerProductList();
  },
  methods: {
    /* get brands list */
    async getBrandsList() {
      try {
        await this.axios
          .get(this.$api_url + "home/get-brand-list-all")
          .then((response) => {
            if (response.data.success == true) {
              this.brandList = response.data.data;
            }
          });
      } catch (e) {
        console.log("kkk" + e);
      }
    },
    /* get products list */
    async getBestSellerProductList() {
      try {
        await this.axios
          .get(this.$api_url + "home/get-product-list-all")
          .then((response) => {
            if (response.data.success == true) {
              this.productList = response.data.data;
            }
          });
      } catch (e) {
        console.log("kkk" + e);
      }
    },
    /* logout */
    logout() {
      localStorage.setItem("user", null);
      this.$router.push({
        name: "login",
      });
    },
    /* toggle Like */
    async toggleLike(product_id) {
      let item = {
        product_id: product_id,
        user_id: this.user._id,
      };
      try {
        await this.axios
          .post(
            this.$api_url + "product/toggle-like",
            {
              item,
            },
            {
              headers: {
                Token: JSON.parse(localStorage.getItem("user")).token,
              },
            }
          )
          .then((response) => {
            if (response.data.success == true) {
              let index = this.productList.findIndex((x) => {
                return x._id == product_id;
              });
              if (index != -1) {
                this.productList[index] = response.data.data;
                // if(response.data.data==1) {
                //   this.productList[index].like_id.push(likedata)
                // }
                // if(response.data.data==2) {
                //  this.productList[index].like_id.pop(likedata)
                // }
              }
            }
          });
      } catch (e) {
        console.log("kkk" + e);
      }
    },
  },
};
</script>
<style lang=""></style>
