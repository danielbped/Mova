import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainCountries from './components/MainCountries';
import CountryDetails from './pages/CountryDetails';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={ MainCountries } />
        <Route path="/countries/:id" render={ (props) => <CountryDetails {...props} /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;