<template>
  <div class="hero">
    <label>
      Data di inizio prenotazione:
      <input type="date" v-model="startDate" />
    </label>
    <p v-if="nextSaturday">
      La prenotazione inizierà il sabato:
      <strong>{{ nextSaturday.toLocaleDateString("it-IT") }}</strong>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const startDate = ref(new Date().toISOString().split('T')[0])

function getNextSaturday(dateStr) {
  const date = new Date(dateStr)
  const daysUntilSaturday = (6 - date.getDay() + 7) % 7
  date.setDate(date.getDate() + daysUntilSaturday)
  return date
}

const nextSaturday = computed(() => getNextSaturday(startDate.value))
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(48, 152, 152, 0.7), rgba(48, 152, 152, 0.7)),
              url('/path/to/your-hero-image.jpg') center/cover no-repeat;
  color: var(--white);
  text-align: center;
  padding: 6rem 2rem;
}

.hero label {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: block;
}

.hero input[type="date"] {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
}

.hero h1 {
  font-size: 2rem;
  margin-top: 2rem;
}
</style>
