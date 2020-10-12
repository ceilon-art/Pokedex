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

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 15px;
  padding: 20px;
  border: 1px solid var(--color-text-complement);

  cursor: pointer;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;

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

export const Button = styled.button`
  margin-top: 10px;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-box-base);

  background-color: var(--color-secondary);
  width: 120px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  border:none;

  transition: background-color .3s;

  &:hover,
  &:focus {
    background: var(--color-secondary-dark)
  }
`;

