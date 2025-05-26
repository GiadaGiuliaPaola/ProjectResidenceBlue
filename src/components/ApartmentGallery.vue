<template>
  <div>
    <!-- HERO Section -->
    <div class="hero">

      <div>
        <label>
          Data di inizio prenotazione:
          <input type="date" v-model="startDate"  style="border-radius: 5px; font-size: 20px; color:teal; " />
        </label>
        <p v-if="nextSaturday">
          La prenotazione inizierà il sabato:
          <strong>{{ nextSaturday.toLocaleDateString("it-IT") }}</strong>
        </p>
      </div>
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
import { apartments, periods } from "./apartments";

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
  return apartments.map((apartment) => ({
    ...apartment,
    price,
  }));
});
</script>

<style scoped>

.hero {
  background: url("/caorle.jpg") center/cover no-repeat;
  color: white;
  text-align: center;
  font-size: 25px;
  line-height: 200%;
  padding: 6rem 2rem;
  font-weight: bold;
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
