<template lang="">
  <div>
    <div>
      <div class="flex justify-center text-center flex-col py-5">
        <p class="text-sm">BIENVENUE CHEZ NOUS</p>
        <h1 class="font-bold text-3xl uppercase">
          Pour un plaisir sucré sans égal
        </h1>
        <h1 class="font-bold text-xl uppercase">rendez-vous à la Pâtisserie</h1>
        <p>
          Gâteau et Autre Dessert pour n'importe qu'elle evenemt de votre vie
        </p>
        <div class="flex justify-center items-center text-center gap-5">
          <div class="bg-[#673e37] px-2.5 py-2.5 pe-1.5 text-white font-normal">
            <router-link to="">Savoire plus</router-link>
          </div>
          <div class="bg-[#673e37] px-2.5 py-2.5 pe-1.5 text-white font-normal">
            <router-link to="">Make Order</router-link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img :src="Logo" class="" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

import Logo from "../components/icons/images1.jpg";
</script>
