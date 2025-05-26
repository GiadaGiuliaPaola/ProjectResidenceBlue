<template>
  <div class="card">
    <h2>{{ apartment.title }}</h2>
    <img
      :src="apartment.image"
      :alt="apartment.title"
      class="image-apartment-details"
    />
    <p>{{ apartment.address }}</p>
    <p v-if="price">Prezzo per la data selezionata: €{{ price }} a settimana</p>
    <br />
    <h3>Richiesta di prenotazione</h3>
    <form class="contact-form" @submit.prevent="submitBooking">
      <label>
        Nome:
        <input v-model="form.name" required />
      </label>
      <label>
        Email:
        <input v-model="form.email" type="email" required />
      </label>
      <label>
        Telefono:
        <input v-model="form.phone" type="tel" required />
      </label>
      <label>
        Data di arrivo:
        <input v-model="form.startDate" type="date" required />
      </label>
      <button type="submit">Invia richiesta</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { apartments, periods } from "./apartments";

const route = useRoute();
const apartmentId = parseInt(route.params.id);

const apartment = apartments.find((a) => a.id === apartmentId);

const form = ref({
  name: "",
  email: "",
  phone: "",
  startDate: "",
});

function getPriceForDate(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  return periods.find((p) => date >= p.start && date <= p.end)?.price || null;
}

const price = computed(() => getPriceForDate(form.value.startDate));

function submitBooking() {
  alert(
    "Richiesta inviata: " +
      JSON.stringify({
        apartment: apartment.title,
        ...form.value,
        price: price.value,
      })
  );
  // Here you can send the data to your backend
}
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem;
  max-width: 700px;
  width: 100%;
}

.contact-form input,
.contact-form textarea {
  display: block;
  max-width: 600px;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 2px solid var(--teal);
  border-radius: 8px;
}

.contact-form button {
  background-color: var(--dark-orange);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: var(--red);
}

.image-apartment-details {
  border-radius: 8px;
  max-width: 600px;
}
@media screen and (max-width: 768px) {
  .card,
.contact-form input,
.contact-form textarea,
.image-apartment-details
 {
    max-width: 95%;
  }


}
</style>
