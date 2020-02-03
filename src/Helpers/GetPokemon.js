import axios from 'axios';

getPokemons = async () => {
  let res = await axios.get(
    'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
  );
  let { pokeData } = res.data;
  this.setState({ pokemons: pokeData });
};
