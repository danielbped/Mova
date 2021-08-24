import React from 'react';

function SelectFilterOption({options, loading}) {
  return (
    <select
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