<template>
  <div class="app">
    <Header />
    <main>
      
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
 flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
