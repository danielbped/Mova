import React from 'react';
import SelectDiv from './SelectDiv';
import SearchButton from './SearchButton';

function Search() {
  return (
    <div className="flex xl:justify-between xl:flex-row sm:flex-col">
      <SelectDiv />
      <SearchButton />
    </div>
  )
};

export default Search;