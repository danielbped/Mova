import React from 'react';
import Search from './Search';
import Countries from './Countries';
import Pagination from './Pagination';

function MainCountries () {
  return (
    <main>
      <Search />
      <Countries />
      <Pagination />
    </main>
  )
};

export default MainCountries;