import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { Container, Formulary, Field, Input, Button } from './styles';

const EDIT_DATA = gql`
  mutation(
    $name: String!,
    $URL: String!, 
    $StatTotal: String!, 
    $Atak: String,
    $Def: String,
    $Status: String,
  ) {
    createPokemon (
      name: $name, 
      URL: $URL, 
      StatTotal: $StatTotal,
      Atak: $Atak,
      Def: $Def,
      Status: $Status
    ){
      id
    }
  }
`

const Form: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [URLData, setURLData] = useState<string>('');
  const [statTotal, setStatTotal] = useState<string>('');
  const [atk, setAtk] = useState<string>('');
  const [def, setDef] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  // const [createPokemon, { data }] = useMutation(EDIT_DATA);

  // async function handleEdit(e: React.MouseEvent) {
  //   e.preventDefault();

  //   createPokemon({
  //     variables: {
  //       name: nome,
  //       URL: URLData,
  //       StatTotal: statTotal,
  //       Atak: atk,
  //       Def: def,
  //       Status: status
  //     }
  //   })
  // }

  return (
    <Container>
      <Formulary>
        <Field>Nome</Field>
        <Input
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <Field>URL da imagem</Field>
        <Input
          value={URLData}
          onChange={e => setURLData(e.target.value)}
        />

        <Field>Status Total</Field>
        <Input
          value={statTotal}
          onChange={e => setStatTotal(e.target.value)}
        />

        <Field>Ataque</Field>
        <Input
          value={atk}
          onChange={e => setAtk(e.target.value)}
        />

        <Field>Defesa</Field>
        <Input
          value={def}
          onChange={e => setDef(e.target.value)}
        />

        <Field>Status</Field>
        <Input
          value={status}
          onChange={e => setStatus(e.target.value)}
        />

        <Link to='/'>
          <Button>Enviar Dados</Button>        
        </Link>
      </Formulary>
    </Container>
  );
};

export default Form;
