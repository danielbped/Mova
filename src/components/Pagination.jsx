import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Pagination() {
  const { data: { countries, currentPage }, setData, data } = useContext(Context);
  const [totalPages, setTotalPages] = useState(countries.length/3)

  useEffect(() => {
    setTotalPages(countries.length/3)
    console.log(totalPages);
  }, [countries])

  let pages = [];
  for(let index = 0; index <= totalPages; index += 1) {
    pages.push(index);
  }

  function changePage(page) {
    setData({...data, currentPage: page})
  }

  const paginationNumber = [
    (currentPage <= 0 ? null : currentPage - 1), currentPage, (currentPage + 1)
  ];

  return (
    <div className="flex mx-8 justify-center">
        {paginationNumber.map((page) => 
          page !== null ? (
          <button
            type="button"
            onClick={ () => changePage(page) }
            name={ page }
            key={ page }
            className={`
              m-1
              p-1
              px-2
              text-purple-800
              font-bold
              focus:outline-none
              hover:opacity-80 duration-500
              ${currentPage === page && "bg-purple-800 text-white border rounded-xl"}
            `}
            >
            {page}
          </button>
          ) : null
        )}
    </div>
  )
}

export default Pagination;