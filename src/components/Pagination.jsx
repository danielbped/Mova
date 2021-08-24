import React, { useContext } from 'react';
import Context from '../context/Context';

function Pagination() {
  const { data: { countries, currentPage }, setData, data } = useContext(Context);
  const totalPages = Math.floor(countries.length/3);
  let pages = [];
  for(let index = 0; index <= totalPages; index += 1) {
    pages.push(index);
  }

  function changePage(page) {
    setData({...data, currentPage: page})
  }

  return (
    <div className="flex mx-8 flex-wrap">
        {pages.map((page) => 
          <button
            type="button"
            onClick={ () => changePage(page) }
            name={ page }
            className={`
              m-1
              p-1
              px-2
              text-purple-500
              ${currentPage === page && 'border'}
            `}
            >
            {page}
          </button>
        )}
    </div>
  )
}

export default Pagination;