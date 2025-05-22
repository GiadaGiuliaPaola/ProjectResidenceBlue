<template>
  <div class="filter">
    <input v-model="filterText" placeholder="Cerca per città..." />
    <button @click="$emit('filter', filterText)">Cerca</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const filterText = ref("");
</script>

<style scoped>
.filter {
  margin: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
}
</style>
