<template>
  <div class="apartment-details-view">
    <ApartmentDetails :apartment="apartment" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ApartmentDetails from "../components/ApartmentDetails.vue";
import { apartments } from "@/components/apartments";


const route = useRoute();
const apartment = ref({});

onMounted(() => {
  const id = parseInt(route.params.id);
  apartment.value = apartments.find((a) => a.id === id) || {
    id: id,
    title: "Appartamento " + id,
    address: "Via Esempio " + id,
    price: 700,
    image: "https://via.placeholder.com/300x200",
    description: "Appartamento accogliente in centro città.",
  };
});
</script>

