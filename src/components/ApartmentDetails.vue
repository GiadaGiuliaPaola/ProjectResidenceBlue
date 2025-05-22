<template>
  <div class="details">
    <h2>{{ apartment.title }}</h2>
    <img :src="apartment.image" :alt="apartment.title" />
    <p>{{ apartment.address }}</p>
    <p>{{ apartment.price }} €/settimana</p>
    <p>
      Descrizione:
      {{ apartment.description || "Nessuna descrizione disponibile" }}
    </p>
  </div>
</template>

<script setup>
defineProps(["apartment"]);
</script>

<style scoped>
.details {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  margin: 2rem auto;
}
img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
