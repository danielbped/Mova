import React, { useContext } from 'react';
import Context from '../context/Context';
import Loading from './Loading';
import Country from './Country';

function Countries() {
  const { data: { countries, loading, currentPage } } = useContext(Context);

  const showCountries = () => {
    if(countries.length > 3) return [countries[0 + (currentPage*3)], countries[1 + (currentPage*3)], countries[2 + (currentPage*3)]];
    return [countries];
  }

  if(loading) return <Loading />;
  return (
    <section className="
      flex
      items-center
      xl:flex-row
      xl:flex-wrap
      xl:justify-center
      xl:h-4/6
      sm: flex-col">
      {showCountries().map((country) => (
        <Country key={ country.name } country={ country } />
      ))}
    </section>
  )
};

export default Countries;