import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Container from '@material-ui/core/Container';
import { CardDeck } from 'react-bootstrap';

class PokeList extends Component {
  render() {
    // this.setState({ po: pokemon });
    let pokemon;
    if (this.props?.pokemons) {
      pokemon = this.props.pokemons;
      // const pokemon = this.props.pokemons;
      console.log('Pokelist');
      console.log(pokemon);
    }

    return (
      <Container style={{ margin: 'auto' }}>
        {/* <div style={{ margin: 'auto' }}> */}
        <CardDeck>
          {/* <Pokemon /> */}
          {pokemon?.map(p => (
            <Pokemon poke={p} />
          ))}
        </CardDeck>
        {/* </div> */}
      </Container>
    );
    // return pokemon?.map(poke => <Pokemon pokemon={poke} />);
  }
}

export default PokeList;
