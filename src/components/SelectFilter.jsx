import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectFilter({options}) {
  const { filter, setFilter } = useContext(Context);
  const handleChangeFilter = ({ target: { value } }) => {
    setFilter({ ...filter, filter: value })
  }
  return (
    <select
      name="filter"
      onChange={ (e) => handleChangeFilter(e) }
      className="
      m-8
      p-2
      px-10
      bg-white
      focus:outline-none
      shadow-md"
      >
      {options.map(({ name, value }) => (
        <option value={ value } key={ value }>
          { name }
        </option>
      ))}
    </select>
  )
}

export default SelectFilter;