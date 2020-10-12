import React from 'react';

import Header from '../../components/Header';
import Form from '../../components/Form';

import { Container } from './styles';

const Create: React.FC = () => {
  return (
    <Container>
      <Header text='Adicione as informações do seu Pokémon' />
      <Form />
    </Container>
  );
};

export default Create;
