<template>
  <div class="about">
    <div class="">
      <div class="">
        <ShopCarousel />
      </div>
    </div>

    <div class="p-6">
      <div>
        <div class="flex items-center">
          <div class="">
            <form action="" class="flex items-center gap-2  bg-blue-700">
              <input
                type="search"
                name=""
                id=""
                class="p-2 w-34 rounded-md border border-gray-500 focus:border-blue-500"
                placeholder="Recherche product...."
              />
              <button class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </form>
          </div>


        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="">
            <div class="py-4 px-4">
              <span></span>
              <h1 class="font-bold">Categories</h1>
            </div>
 
            <CategoryList />
          </div>
          <div class="col-start-2 col-span-4">
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import ShopCarousel from'../components/ShopCarousel.vue'
import CategoryList from'../components/Category.vue'
const categories = ref(false);
function cat() {
  categories.value = !categories.value;
}

let data = ref(null)



</script>

<style></style>
