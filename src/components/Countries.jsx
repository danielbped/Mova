import React, { useContext } from 'react';
import Context from '../context/Context';

function Countries() {
  const { data: { countries, loading } } = useContext(Context);
  const currentPage = 0;
  if(loading) return <p>Carregando</p>;
  const showCountries = [countries[0 + currentPage], countries[1 + currentPage], countries[2 + currentPage]];
  return (
    <section className="flex flex-wrap justify-center">
      {showCountries.map((country) => (
        <div className="w-1/4 m-4" key={ country.name }>
          <img
            src={country.flag}
            alt={ `${country.name} flag` }
          />
        </div>
      ))}
    </section>
  )
};

export default Countries;