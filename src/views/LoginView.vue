<template>
  <div class="about py-6 px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div class=" ">
        <img :src="Autodect" class="w-full py-6 px-6" />
      </div>
      <div class="">
        <div class=""></div>
        <form @submite="handlerEvent" class="flex justify-center flex-col">
          <div class="mb-3 flex flex-col space-y-2">
            <label for="">Email {{ formData.email }}</label>
            <input
              type="email"
              v-model="formData.email"
              name="email"
              placeholder="dohfawaz90@gmail.com"
              id="email"
              class="w-64 p-2 border border-solid rounded-lg shadow-sm focus:border-[#B67332]"
            />
            <span v-if="!isvalidEmail" class="text-red-700"
              >Veillez Entre un Mail valid</span
            >
          </div>

          <div class="mb-3 flex flex-col space-y-2">
            <label for="">Password {{ formData.password }}</label>
            <input
              type="password"
              name="password"
              v-model="formData.password"
              placeholder="********"
              id="password"
              class="w-64 p-2 border border-solid rounded-lg shadow-sm focus:border-[#B67332]"
            />
            <span v-if="!isvalidPass" class="text-red-700"
              >Veillez Entre un Mail valid</span
            >
          </div>

          <div class="mb-3 flex gap-12 items-center">
            <div class="flex gap-1 items-center text-sm text-[#DAAB3A]">
              <input type="checkbox" name="" id="" />
              <p class="">Remenber Me</p>
            </div>

            <div class="text-sm text-[#DAAB3A]">
              <router-link to="">Password Forgot</router-link>
            </div>
          </div>

          <div
            class="mb-3 bg-blue-500 w-64 py-2 px-2 pe-1.5 rounded-md hover:bg-blue-600 text-center"
          >
            <button type="submite" :disabled="isformValid">Login</button>
          </div>
          <div
            v-if="messageError.status"
            class="message absolute z-[100] mx-auto w-full top-1 py-4 px-5 md:w-[60%] lg:w-[35%] text-white"
            :class="[messageError.successful ? 'bg-green-500' : 'bg-red-500']"
          >
            {{ messageError.message }}
          </div>
        </form>
        <div class="text-sm">
          <p>
            Click her
            <span class="text-blue-500 hover:text-blue-600"
              ><router-link to="/register">Sign up</router-link>
            </span>
            if you don't have account
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script setup>
import Autodect from "../components/icons/Login.jpeg";
import { RouterLink } from "vue-router";
import { ref, computed, reactive } from "vue";
import axios from "axios";

const formData = ref({
  email: "",
  password: "",
});

//const isvalidName = computed(()=> formData.email.value.trim()!== '')
const isvalidEmail = computed(() => {
  // Regular expression for email validation
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(formData.value.email.trim()); // Trim whitespace
});
const isvalidPass = computed(() => formData.value.password.length >= 8);

const isformValid = computed(() => isvalidEmail && isvalidPass);

const messageError = reactive({
  statut: false,
  susscefful: null,
  message: null,
  fields: {},
});

//  async function handlerEvent(e) {

//       if (isformValid.value) {
//     messageError.status = true;
//     messageError.successful = true;
//     messageError.message = "Form submitted successfully!";
//     return;
//   }
//   try {
//       const response = await axios.post ('https://fakestoreapi.com/auth/login', {
//         password: "dohoudeen",
//         email: "dohfawaz@gmail.com" 
//         // password: formData.password.value,
//         // email: formData.email.value
//       });
//       if (response.status !== 200) { // Check for success status code
//       throw new Error(`API request failed with status ${response.status}`);

//       const data = response.data;
//     console.log("Login successful:", data);
//     router.push("/");
//     }
//   } catch(error){
//     console.error('')
//     messageError.status = true; // Show error message
//     messageError.successful = false;
//      messageError.message = "Login failed. Please check your credentials or try again later.";
//   }
//   // if (isformValid.value) {
//   //   messageError.status = true;
//   //   messageError.successful = true;
//   //   messageError.message = "Form submitted successfully!";
//   // } else {
//     // messageError.status = true; // Show error message
//     // messageError.successful = false;
//     //  messageError.message = "Login failed. Please check your credentials or try again later.";
//   //     "Invalid form. Please check your email and password.";
//   //   // Optionally, set messageError.fields for specific
//   // }

//   if (e) {
//   e.preventDefault();
// }
// }


</script>
