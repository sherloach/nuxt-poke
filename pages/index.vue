<script setup lang="ts">
import "cal-sans";

const { data: pokemons } = await useFetch("/api/pokemon?offset=1");
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold font-cal">Pokemon</h1>
    <ul v-for="pokemon in pokemons">
      <li>{{ pokemon.name }} x {{ pokemon.url }}</li>
    </ul>
  </div>
</template>
