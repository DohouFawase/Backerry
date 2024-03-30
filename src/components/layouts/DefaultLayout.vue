<template lang="">
    <div>
        <div class="">
            <Navbar />
            <slot/>
            <router-view />

        </div>
    </div>
</template>


<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Navbar from '../Navbar.vue'
</script>



