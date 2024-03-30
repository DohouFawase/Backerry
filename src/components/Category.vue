<script setup>
import axios from 'axios'
import {ref, onMounted} from 'vue'

const specifiCat = ref('')

const CategoryList = ref([])

const fetchData = async ()=> {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        CategoryList.value = response.data
        
        
    } catch (error) {
        console.error(error)
    }
}
onMounted(()=>{
    fetchData()
})


</script>

<template lang="">
    <div>
        <div class="p-4 col-1">
              <ul class="hidden md:flex flex-col space-y-5 text-gray-500"  >
                <li v-for="(CategoryList,index) in CategoryList" :key="CategoryList.id">
                  <router-link to="">{{CategoryList}}</router-link>
                </li>
              </ul>
        </div>
    </div>
</template>

