<script setup lang="ts">
const { data: pokemons } = await useFetch("/api/pokemon?offset=1");
</script>

<template>
  <div>
    <h1>Welcome to the Pokedex</h1>
    <ul v-for="pokemon in pokemons">
      <li>{{ pokemon.name }} x {{ pokemon.url }}</li>
    </ul>
  </div>
</template>
