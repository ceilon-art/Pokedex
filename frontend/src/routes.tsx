import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Details from './pages/Details';
import EditPage from './pages/EditPage';
import Home from './pages/Home';
import Create from './pages/Create';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/edit' exact component={EditPage} />
        <Route path='/details' exact component={Details} />
        <Route path='/create' exact component={Create} />

        <Route path='/' component={() => <h1>404 - Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );  
}