
const pokemon = "https://pokeapi.co/api/v2/pokemon?limit=20";
fetch(pokemon)
  .then((response) => response.json())
  .then((data) => {

    const pokemons = data.results;


    pokemons.forEach((pokemon) => {
      console.log(pokemon.name);
      console.log(pokemon.atack)
    });
  })
  .catch((error) => {
    console.error("Error al obtener datos de la API:", error);
  });
