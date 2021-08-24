import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectFilterOption({options, loading}) {
  const { filter, setFilter } = useContext(Context);
  const handleChangeFilterOption = ({ target: { value } }) => {
    setFilter({ ...filter, option: value })
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
      shadow-md"
      >
      {!loading && options.map((option) => (
        option !== '' && <option value={ option } key={ option }>
          { option }
        </option>
      ))}
    </select>
  )
}

export default SelectFilterOption;