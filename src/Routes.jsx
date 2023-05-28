import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainCountries from './components/MainCountries';
import CountryDetails from './pages/CountryDetails';

function Routes() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Header />
      <Switch>
        <Route path="/countries/:id" render={ (props) => <CountryDetails {...props} /> } />
        <Route exact path="/" component={ MainCountries } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;