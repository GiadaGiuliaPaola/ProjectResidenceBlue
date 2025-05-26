<template>
  <header>
    <nav>
      <img
        src="../assets/residence_blue_logo.png"
        class="logo"
        alt="Logo Residence Blue"
      />
      <h1 class="title">Residence Blue</h1>

      <button class="menu-toggle" @click="toggleMenu">☰</button>

      <ul :class="{ open: isMenuOpen }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">Chi siamo</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
nav {
  background-color: var(--teal);
  color: var(--white);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  flex-wrap: wrap;
}

.title {
  color: white;
  margin-left: 1rem;
}

nav a {
  color: var(--white);
  margin-left: 1.5rem;
  position: relative;
  text-decoration: none;
}

nav a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--orange);
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.logo {
  padding-left: 30px;
  max-width: 250px;
  height: auto;
}

.menu-toggle {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  margin-left: auto;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .logo {
    max-width: 180px;
  }

  .title {
    display:none;
  }

  .menu-toggle {
    display: block;
  }

  ul {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }

  ul.open {
    display: flex;
  }

  ul li {
    margin: 0.5rem 0;
  }

  nav {
    align-items: flex-start;
  }
}
</style>
