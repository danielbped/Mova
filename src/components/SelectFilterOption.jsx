import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectFilterOption({options, loading}) {
  const { filters, setFilter } = useContext(Context);
  const handleChangeFilterOption = ({ target: { value } }) => {
    setFilter({ ...filters, option: value })
  }
  return (
    <select
      name="option"
      onChange = { (e) => handleChangeFilterOption(e) }
      className="
      m-8
      p-2
      px-10
      bg-white
      focus:outline-none
      shadow-md"
      >
      {!loading && options.map((option) => (
        option !== '' && <option value={ option.value } key={ option }>
          { option.name }
        </option>
      ))}
    </select>
  )
}

export default SelectFilterOption;