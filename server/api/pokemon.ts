import { z } from "zod";

export default defineEventHandler(async (event) => {
  const data: { offset: string } = getQuery(event);
  const offset = parseInt(data.offset);

  if (!Number.isInteger(offset) || offset < 1) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid offset",
    });
  }
  const pokemons = await getPokemons(offset);

  return pokemons;
});

async function getPokemons(offset: number) {
  const data: { results: typeof PokemonsSchema } = await $pk("pokemon", {
    query: {
      limit: 9,
      offset,
    },
  });
  const result = PokemonsSchema.safeParse(data.results);
  if (!result.success) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch pokemons",
    });
  }

  console.log(result);

  return result.data;
}

const PokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});

const PokemonsSchema = z.array(PokemonSchema);

const $pk = $fetch.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
