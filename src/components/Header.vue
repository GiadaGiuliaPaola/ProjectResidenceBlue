<template>
  <header>
    <nav>
      <img
        src="../assets/residence_blue_logo.png"
        class="logo"
        alt="Logo Residence Blue"
      />
      <h1 class="title">Residence Blue</h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">Chi siamo</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

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
}

.title {
  color: white;
}

nav a {
  color: var(--white);
  margin-left: 1.5rem;
  position: relative;
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

/* nav {
  background: #5ca9e3;
  color: orange;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
} */

ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.logo {
  padding-left: 30px;
  max-width: 150px;
  height: auto;
}
</style>
