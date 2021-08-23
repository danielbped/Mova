import React from 'react';
import Select from './Select';
import SearchButton from './SearchButton';

function Search() {
  return (
    <div className="flex justify-between">
      <Select />
      <SearchButton />
    </div>
  )
};

export default Search;