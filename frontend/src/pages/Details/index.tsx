import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Container, ImagePokemon, Card, StatusPokemon, PokemonName } from './styles';
import Header from '../../components/Header';

const PokemonsQuery = gql `
  query {
    getPokemons {
      Nome
      Image
      StatTotal
    }
  }
`

const Details: React.FC = () => {

  const { loading, data } = useQuery(PokemonsQuery);

  if(loading) return <p>Loading ...</p>
  
  return (
    <>
      <Header text='Informações Pokémon' />
      <Container>
        {data?.getPokemons.map(({ Nome, Image, StatTotal }) => (
          <Card>
            <ImagePokemon src={Image} alt={Nome} />
            <PokemonName>
              {Nome}
            </PokemonName>
            <StatusPokemon>Status Total: {StatTotal}</StatusPokemon>
          </Card>        
        ))}
        </Container>
      </>
  );
};

export default Details;
