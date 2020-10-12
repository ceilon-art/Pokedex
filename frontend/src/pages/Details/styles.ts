import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  overflow-x: hidden;
  overflow-y: auto;

  padding: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 15px;
  padding: 20px;
  border: 1px solid var(--color-text-complement);
`;

export const ImagePokemon = styled.img`
  width: 500px;
  height: 500px;

  object-fit: contain;
`;

export const PokemonName = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #000000;
  margin-top: 8px;
`;

export const StatusPokemon = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #000000;
`;