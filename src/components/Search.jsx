import React from 'react';
import SelectDiv from './SelectDiv';
import SearchButton from './SearchButton';

function Search() {
  return (
    <div className="flex justify-between">
      <SelectDiv />
      <SearchButton />
    </div>
  )
};

export default Search;