<template lang="">
    <div class="p-6">
       <div class="flex items-center justify-between transition duration-200  ">
        <div class="">
            <router-link to="" class=" flex items-center gap-3">
                <img :src="Logo" class="w-14 md:flex hidden"  />
                 <h1 class="font-semibold flex md:hidden ">Backerry</h1>
            </router-link>
        </div>
    
        <div class="">
            <nav>
                <ul class="md:flex md:items-center md:px-0 px-10 transition duration-200  md:pb-0 py-0 md:static absolute " :class="[open ? 'right-0' : 'right-[-100%]']">
                    <li class="md:mx-4 md:my-0 my-6 hover:text-[#B67332]  font-semibold  hover:underline duration-500 ease-in-out"><router-link to="/">Acceuile</router-link></li>
                    <li class="md:mx-4 md:my-0 my-6 hover:text-[#B67332]  font-semibold  hover:underline duration-500 ease-in-out"><router-link to="/boutique">Boutique</router-link></li>
                    <li class="md:mx-4 md:my-0 my-6 hover:text-[#B67332]  font-semibold  hover:underline duration-500 ease-in-out"><router-link to="/about">A propos</router-link></li>
                    <li class="md:mx-4 md:my-0 my-6 hover:text-[#B67332]  font-semibold  hover:underline duration-500 ease-in-out"><router-link to="/contact">Contact</router-link></li>
                </ul>
            </nav>
        </div>

        <div class="flex items-center gap-3">
            <span>
                <router-link to="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#93441A]">
                         <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                </svg>
                </router-link>
            </span>
            <div class="flex items-center ">
                <router-link to="/login" class="shadow-lg font-semibold  p-2 rounded-lg hover:bg-[#93441A] hover:text-white hover:translate-x-3 sm:hidden md:block ">Login</router-link>
               <router-link to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#93441A] md:hidden  ">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                </svg>
               </router-link>

            </div>
        </div>
       </div> 
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Logo from "../components/icons/Logo.png";

const open = ref(false)

function toggle() {
    open.value = !open.value
}

</script>