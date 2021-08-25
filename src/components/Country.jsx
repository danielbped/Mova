import React from 'react';
import { Link } from 'react-router-dom';

function Country({ country }) {
  return (
    <div className="w-1/4 m-4 hover:opacity-80 duration-500">
      {country && <Link to={`/countries/${country.alpha2Code}`}>
      <img
          src={country.flag}
          alt={ `${country.name} flag` }
          key={ country.name }
        />
      </Link>}
    </div>
  )
}

export default Country;