import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';

class Pokemon extends Component {
  render() {
    // console.log(this.props.pokemon);
    const pokemon = this.props.poke;
    const { type } = pokemon;
    console.log(type);
    return (
      <div className='col'>
        <Card
          filter={'blur(20px) '}
          style={{
            marginTop: '20px',
            width: '100%',
            backgroundColor: 'rgba(37,37,37,0.5)',
            backdropFilter: 'blur(10px)'
          }}
          className='shadow-lg'
        >
          <Card.Header
            style={{
              backgroundColor: 'rgba(54,54,54,0.5)'
            }}
          >
            {/* {pokemon.} */}
            <br />
            <br />
            <br />
            <div>
              {/* <Card.Img
                variant='top'
                src={'https://www.htmlcsscolor.com/preview/gallery/363636.png'}
                style={{ textAlign: 'center' }}
                roundedCircle
                // thumbnail
              /> */}

              <Image
                src={pokemon?.img}
                roundedCircle
                style={{
                  // textAlign: 'center',
                  // marginTop: '5%',
                  marginLeft: '50%',
                  transform: 'translate(-50%,-75%)',
                  marginBottom: '-50%'
                }}
                // width={100}
                // height={100}
                // className='text-center mr-3'
                // thumbnail
              />
            </div>
          </Card.Header>
          {/* </Col> */}

          <Card.Body className='text-white-50'>
            <Card.Title>{pokemon?.name}</Card.Title>
            <Card.Text>
              <p>Type: {type.map(t => t + ', ')}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Pokemon;
