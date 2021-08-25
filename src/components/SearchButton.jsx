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