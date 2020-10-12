import React from 'react';

import Form from '../../components/Form';
import Header from '../../components/Header';

import { Container } from './styles';

const EditPage: React.FC = () => {
  return (
    <>
      <Header text='Edição de dados' />
      <Container>
        <Form />
      </Container>
    </>
  );
};

export default EditPage;
