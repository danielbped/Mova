import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ App } />
    </BrowserRouter>
  )
}

export default Routes;