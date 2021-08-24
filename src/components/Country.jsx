import React from 'react';
import { Link } from 'react-router-dom';

function Country({ country }) {
  return (
    <div className="w-1/4 m-4" key={ country.name }>
      <Link to={`/countries/${country.alpha2Code}`}>
      <img
          src={country.flag}
          alt={ `${country.name} flag` }
        />
      </Link>
    </div>
  )
}

export default Country;