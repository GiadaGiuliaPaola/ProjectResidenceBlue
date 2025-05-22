<template>
  <div>
    <label>
      Data di inizio prenotazione:
      <input type="date" v-model="startDate" />
    </label>
    <p v-if="nextSaturday">
      La prenotazione inizierà il sabato:
      <strong>{{ nextSaturday.toLocaleDateString("it-IT") }}</strong>
    </p>
    <div class="gallery">
      <ApartmentCard
        v-for="apartment in apartments"
        :key="apartment.id"
        :apartment="apartment"
        :price="getPriceForDate(nextSaturday)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ApartmentCard from "../components/ApartmentCard.vue";

const apartments = ref([
  {
    id: 1,
    title: "Appartamento 1",
    address: "Residence Blue, Bilocale Primo Piano",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Appartamento 2",
    address: "Residence Blue, Bilocale Primo Piano",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Appartamento 3",
    address: "Residence Blue, Bilocale Secondo Piano",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Appartamento 4",
    address: "Residence Blue, Bilocale Secondo Piano",
    image: "https://via.placeholder.com/300x200",
  },
]);

const periods = [
  {
    name: "Maggio",
    start: new Date(2024, 4, 1),
    end: new Date(2024, 4, 31),
    price: 700,
  },
  {
    name: "Giugno (prima parte)",
    start: new Date(2024, 5, 1),
    end: new Date(2024, 5, 27),
    price: 800,
  },
  {
    name: "Giugno (fine) - Agosto (inizio)",
    start: new Date(2024, 5, 28),
    end: new Date(2024, 7, 8),
    price: 900,
  },
  {
    name: "Settembre (fine)",
    start: new Date(2024, 8, 20),
    end: new Date(2024, 8, 30),
    price: 800,
  },
];

const startDate = ref(new Date().toISOString().split("T")[0]);

function getNextSaturday(dateStr) {
  const date = new Date(dateStr);
  if (date.getDay() === 6) return date;
  const daysUntilSaturday = (6 - date.getDay() + 7) % 7;
  date.setDate(date.getDate() + daysUntilSaturday);
  return date;
}

const nextSaturday = computed(() => getNextSaturday(startDate.value));


function getPriceForDate(date) {
  if (!(date instanceof Date)) date = new Date(date);
  for (const period of periods) {
    if (date >= period.start && date <= period.end) {
      return period.price;
    }
  }
  return null;
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
