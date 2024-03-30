<template lang="">
    <div>
        <div class="">
                <div>
                    <button @click="currentTab = 'About'">A propos </button>
                    <button @click="currentTab = 'Vision'">Visons </button>
                    <button @click="currentTab = 'Abition'">Ambition </button>
                </div>

                <component :is='tabs[currentTab]' />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import About from '@/components/tables/AboutTable.vue'
import Vision from '@/components/tables/VisionTable.vue'
import Abition from '@/components/tables/AbitionTable.vue'

const currentTab = ref('About')

const tabs = {
    About,
    Vision,
    Abition
}

</script>