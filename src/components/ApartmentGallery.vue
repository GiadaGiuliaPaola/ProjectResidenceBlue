<template>
  <div>
    <!-- HERO Section -->
    <div class="hero">
      <label>
        Data di inizio prenotazione:
        <input type="date" v-model="startDate" />
      </label>
      <h2 v-if="nextSaturday">
        La prenotazione inizierà il sabato:
        <strong>{{ nextSaturday.toLocaleDateString("it-IT") }}</strong>
      </h2>
    </div>

    <!-- GALLERY Section -->
    <div class="gallery">
      <ApartmentCard
        v-for="apartment in apartmentsWithPrice"
        :key="apartment.id"
        :apartment="apartment"
        :price="apartment.price"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ApartmentCard from "./ApartmentCard.vue";

// Dati statici appartamenti
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

// Periodi e prezzi (corretti con mesi zero-based!)
const periods = [
  {
    name: "Maggio",
    start: new Date(2025, 4, 1),
    end: new Date(2025, 4, 31),
    price: 700,
  },
  {
    name: "Giugno",
    start: new Date(2025, 5, 1),
    end: new Date(2025, 5, 30),
    price: 800,
  },
  {
    name: "Luglio",
    start: new Date(2025, 6, 1),
    end: new Date(2025, 6, 31),
    price: 900,
  },
  {
    name: "Agosto",
    start: new Date(2025, 7, 1),
    end: new Date(2025, 7, 31),
    price: 1050,
  },
  {
    name: "Settembre",
    start: new Date(2025, 8, 1),
    end: new Date(2025, 8, 30),
    price: 800,
  },
];

// Data selezionata
const startDate = ref(new Date().toISOString().split("T")[0]);

// Calcolo del primo sabato successivo
function getNextSaturday(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDay();
  const daysToAdd = (6 - day + 7) % 7;
  date.setDate(date.getDate() + daysToAdd);
  return date;
}

const nextSaturday = computed(() => getNextSaturday(startDate.value));

// Prezzo in base alla data
function getPriceForDate(date) {
  if (!(date instanceof Date)) date = new Date(date);
  return periods.find((p) => date >= p.start && date <= p.end)?.price || null;
}

// Appartamenti con prezzo calcolato
const apartmentsWithPrice = computed(() => {
  const price = getPriceForDate(nextSaturday.value);
  return apartments.value.map((apartment) => ({
    ...apartment,
    price,
  }));
});
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(48, 152, 152, 0.7), rgba(48, 152, 152, 0.7)),
    url("your-hero-image.jpg") center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.hero h1 {
  font-size: 2rem;
  margin-top: 1rem;
}

.gallery {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
</style>
