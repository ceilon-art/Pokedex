import React from "react";
import { ApolloProvider }  from '@apollo/react-hooks';

import GlobalStyle from "./assets/styles/global";

import Routes from "./routes";
import client from "./services/client";

function App() {
  return (
    <ApolloProvider client={client}>      
      <Routes />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
