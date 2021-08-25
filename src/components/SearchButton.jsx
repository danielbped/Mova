import React, { useContext } from 'react';
import Context from '../context/Context';

function SearchButton () {
  const { data, setData } = useContext(Context);
  const handleClickFiltered = async () => {
    setData({...data, loading: true});
  }

  return (
    <button
      type="button"
      onClick={ () => handleClickFiltered() }
      className="
        bg-purple-800
        text-white
        m-8
        p-2
        px-4
        font-bold
        rounded-2xl
        focus:outline-none
        hover:opacity-80 duration-500"
    >
      Pesquisar
    </button>
  )
}

export default SearchButton;