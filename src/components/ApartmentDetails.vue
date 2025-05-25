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
    <router-link :to="'/'"><button>Return to home</button></router-link>
  </div>
</template>

<script setup>
defineProps(["apartment"]);
</script>

<style scoped>
.details {
  background-color: #fff;
  padding: 2rem;
  border-radius: 16px;
  max-width: 600px;
  margin: 3rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.details h2 {
  color: #309898;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.details img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 1rem;
  object-fit: cover;
}

.details p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.5rem 0;
}

.details p:nth-of-type(3) {
  color: #FF9F00;
  font-weight: bold;
  font-size: 1.2rem;
}

.details button {
  background-color: #F4631E;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 1.5rem;
}

.details button:hover {
  background-color: #d75113;
}

</style>
