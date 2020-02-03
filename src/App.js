import React, { Component } from 'react';
import PokeList from './components/PokeList';
import axios from 'axios';
import Header from './layouts/Header';

class App extends Component {
  state = {
    pokemons: {}
  };

  // getPokemons = async () => {
  //   let res = await axios.get(
  //     'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
  //   );
  //   let { pokeData } = res.data;
  //   this.setState({ pokemons: pokeData });
  // };

  componentDidMount() {
    axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
      )
      .then(res => this.setState({ pokemons: res.data }));
  }

  render() {
    const { pokemon } = this.state.pokemons;
    return (
      <div>
        {/* {this.state.pokemons === {} ? (
          <div>Loading...</div>
        ) : ( */}
        <Header />
        <div>
          <PokeList pokemons={pokemon} />
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default App;
