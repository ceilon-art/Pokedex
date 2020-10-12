import React from 'react';

import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Container, PokemonCard, PokemonImage, PokemonName, StatusPokemon, Button } from './styles';

const PokemonsQuery = gql `
  query {
    getPokemons {
      id
      Nome
      Image
      StatTotal
    }
  }
`

const Row: React.FC = () => {
  const { loading, data } = useQuery(PokemonsQuery);

  if(loading) return <p>Loading ...</p>

  return (
    <Container>
      {data?.getPokemons.map(({ id, Nome, Image, StatTotal }) => (
        <PokemonCard key={id}>
          <Link to='/details' >
            <PokemonImage src={Image} alt={Nome} />
          </Link>

          <PokemonName>{Nome}</PokemonName>
          <StatusPokemon>Status Total: {StatTotal}</StatusPokemon>      
          
          <Link to="/edit">
            <Button>Editar Dados</Button>
          </Link>
          
        </PokemonCard>
      ))}
    </Container>
  )
};

export default Row;
