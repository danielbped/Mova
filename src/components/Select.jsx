import React from 'react';

const SELECT_OPTIONS = [
  { name: 'Escolha uma opção', value:'country' },
  { name: 'País', value: 'country' },
  { name: 'Região', value: 'region' },
  { name: 'Língua', value: 'language' },
  { name: 'Código de Ligação', value: 'call-code' },
]

function Select () {
  return (
    <select
      className="
        m-8
        p-2
        px-10
        bg-white
        shadow-md"
    >
      {SELECT_OPTIONS.map(({ name, value }) => (
        <option value={ value } key={ value }>
          { name }
        </option>
      ))}
    </select>
  )
};

export default Select;