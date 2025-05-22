<template>
  <ApartmentDetails :apartment="apartment" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ApartmentDetails from '../components/ApartmentDetails.vue'

const route = useRoute()
const apartment = ref({})

onMounted(() => {
  // Simula il caricamento dei dati dell'appartamento (qui puoi fare una chiamata API)
  apartment.value = {
    id: route.params.id,
    title: 'Appartamento ' + route.params.id,
    address: 'Via Esempio ' + route.params.id,
    price: 700,
    image: 'https://via.placeholder.com/300x200',
    description: 'Appartamento accogliente in centro città.'
  }
})
</script>
