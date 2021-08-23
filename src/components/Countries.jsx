import React, { useContext } from 'react';
import Context from '../context/Context';

function Countries() {
  const { data: { countries, loading } } = useContext(Context);
  if(loading) return <p>Carregando</p>;
  return (
    <section className="">
      {countries.map((country) => (
        <div>
          <img
            className="w-1/4"
            src={country.flag}
            alt={ `${country.name} flag` }
          />
        </div>
      ))}
    </section>
  )
};

export default Countries;