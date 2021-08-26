import React from 'react';
import { Link } from 'react-router-dom';

function Country({ country }) {
  return (
    <div className="w-1/4 m-4 hover:opacity-80 duration-500">
      {country && <Link to={`/countries/${country.alpha2Code || country[0].alpha2Code}`}>
      <img
          src={country.flag || country[0].flag }
          alt={ `${country.name|| country[0].name } flag` }
          key={ country.name || country[0].name }
        />
      </Link>}
    </div>
  )
}

export default Country;