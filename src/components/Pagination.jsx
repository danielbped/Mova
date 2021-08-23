import React, { useContext } from 'react';
import Context from '../context/Context';

function Pagination() {
  const { data: { countries } } = useContext(Context);
  const totalPages = countries.length;
  return (
    <div>
      {console.log(totalPages)}
    </div>
  )
}

export default Pagination;