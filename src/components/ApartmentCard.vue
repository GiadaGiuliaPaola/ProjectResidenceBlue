<template>
  <div class="apartment-card">
    <img :src="apartment.image" :alt="apartment.title">
    <h3>{{ apartment.title }}</h3>
    <p>{{ apartment.address }}</p>
    <p>Prezzo: {{ price || '---' }} €/settimana</p>
    <router-link :to="'/apartment/' + apartment.id">Dettagli</router-link>
  </div>
</template>

<script setup>
defineProps(['apartment', 'price'])
</script>

<style scoped>
.apartment-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  max-width: 300px;
}
img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
