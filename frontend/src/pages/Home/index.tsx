import React from "react";
import { Link } from 'react-router-dom';

import Header from "../../components/Header";
import Row from "../../components/Row";

import { Container, AddPokemon } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header text='Lista de Pokémons' />
      <Link to='/create' >
        <AddPokemon>Adicione um novo Pokémon ...</AddPokemon>
      </Link>
      <Row />
    </Container>
  );
};

export default Home;
