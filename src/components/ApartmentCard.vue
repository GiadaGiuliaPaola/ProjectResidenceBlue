<template>
  <div class="apartment-card">
    <img :src="apartment.image" :alt="apartment.title" />
    <h3>{{ apartment.title }}</h3>
    <p>{{ apartment.address }}</p>
    <p>Prezzo: {{ price }} €/settimana</p>
    <router-link :to="'/apartment/' + apartment.id">
      <button class="unit-btn">Dettagli</button>
    </router-link>
  </div>
</template>

<script setup>
defineProps(["apartment", "price"]);
</script>

<style scoped>

.apartment-card {
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 1rem;
  margin: 1rem;
  max-width: 300px;
  transition: all 0.2s ease;
  background-color: var(--white);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.apartment-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

/* ========== Button ========== */
.unit-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--dark-orange);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.unit-btn:hover {
  background-color: #d45310;
}
</style>
