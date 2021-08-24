import React, { useContext } from 'react';
import Context from '../context/Context';

function SearchButton () {
  const { data, setData, setFilter, filter, API_URL } = useContext(Context);
  const handleClickFiltered = async () => {
    const response = await fetch(API_URL);
    const result = await response.json();
    setFilter({ ...filter, filtered: true });
    setData({...data, loading: true, countries: [result]});
  }
  return (
    <button
      type="button"
      onClick={ () => handleClickFiltered() }
      className="
        bg-purple-500
        text-white
        m-8
        p-2
        px-4
        rounded-2xl"
    >
      Pesquisar
    </button>
  )
}

export default SearchButton;