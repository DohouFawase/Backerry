<template>
    <div class="about py-6 px-6">
      <div class="grid grid-cols-1  md:grid-cols-2 items-center justify-center">
        <div class=" ">
          <img :src="Autodect" class="w-full py-6 px-6" />
        </div>
        <div class="">
          <div class="mb-6">
                <h1 class="font-bold md:text-5xl md:text-center text-xl text-center">Contactez-Nous</h1>
          </div>
          <form @click="handlerEvent"  class="flex justify-center flex-col">
            <div class="mb-3 flex flex-col space-y-2">
              <label for="">Nom: {{ formData.name }}</label>
              <input
                type="name"
                name=""
                placeholder="Dohou Fawase"
                v-model="formData.name"
                id=""
                class="w-84 p-2 border border-solid rounded-lg shadow-sm focus:border-[#B67332]"
              />
              <span v-if="!name" class="text-red-700"
              >Enter your correct Mail</span>
            </div>
  
            <div class="mb-3 flex flex-col space-y-2">
              <label for="">Email:{{ formData.email }}</label>
              <input
                type="email"
                name=""
                placeholder="dohfawaz90@gmail.com"
                v-model="formData.email"
                id=""
                class="w-84  p-2 border border-solid rounded-lg shadow-sm focus:border-[#B67332]"
              />
              <span v-if="!email" class="text-red-700"
              >Enter your correct Mail</span>
            </div>
  
            <div class="mb-3 flex flex-col space-y-2">
              <label for="">Message: {{ formData.message }}</label>
              <textarea name="" v-model="formData.message" id="" cols="30" rows="10"  placeholder="Oject"
              class="w-84 p-2 border border-solid rounded-lg shadow-sm focus:border-[#B67332]"
               ></textarea>
               <span v-if="!message" class="text-red-700"
              >Veilles entre votre Message</span>
            </div>
           
  
            <div class="mb-3 bg-blue-500 w-24 py-2 px-2 pe-1.5 rounded-md hover:bg-blue-600 text-center">
              <button type="button" :disabled="isformValid">Envoyez</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </template>
  
  <style></style>
  
  <script setup>
  import Autodect from "../components/icons/Login.jpeg";
  import { RouterLink } from "vue-router";
  import { ref, computed } from "vue";

  const formData = ({
    name: "",
    email: "",
    message: "",
  })

  const isvalidName = computed(()=> formData.value.name.trim() !== '' )
  const isvalidText = computed(() => formData.value.message.trim() !== '')
  const isvalidEmail = computed(() => {
  // Regular expression for email validation
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(formData.value.email.trim()); // Trim whitespace
});
const isformValid = computed(() => isvalidEmail && isvalidName && isvalidText);



function handlerEvent(e) {
  e.preventDefault()
  if (isformValid.value) {
    messageError.status = true;
    messageError.successful = true;
} else {
  messageError.status = true; // Show error message
    messageError.successful = false; 
}
}

  // if () {
  //   messageError.status = true;
  //   messageError.successful = true;
  //   messageError.message = "Form submitted successfully!";
  // } else {
    // messageError.status = true; // Show error message
    // messageError.successful = false;
    //  messageError.message = "Login failed. Please check your credentials or try again later.";
  //     "Invalid form. Please check your email and password.";
  //   // Optionally, set messageError.fields for specific
  // }
  </script>
  