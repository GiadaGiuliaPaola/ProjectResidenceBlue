<template>
  <header>
    <nav>
      <h1>Residence Blue</h1>
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
  background: #5d93f7;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}
</style>
