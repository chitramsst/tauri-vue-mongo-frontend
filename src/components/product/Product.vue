<template>
       <div
          class="bg-white shadow-lg p-2 rounded-lg max-h-[400px]"
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
                @click="addToCart"
              >
                ADD TO CART
              </div>
            </div>
          </div>
        </div>
</template>
<script>
export default {
    props: {
     item: {
        
     }
    },
    emits : [
        'toggleProductLike'
    ],
  data() {
    return {
      showLogin: false,
      brandList: [],
      productList: [],
      user: JSON.parse(localStorage.getItem("user")),
      cart: [],
    };
  },
  created() {
    //console.log("item")
  },
  mounted() {
  },
  methods: {
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
            this.$emit('toggleProductLike',{
                'currentProduct' : response.data.data
            })
            }
          });
      } catch (e) {
        console.log("kkk" + e);
      }
    },
  },
};
</script>