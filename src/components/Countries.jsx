import React, { useContext } from 'react';
import Context from '../context/Context';
import Loading from './Loading';
import Country from './Country';

function Countries() {
  const { data: { countries, loading, currentPage } } = useContext(Context);
  const showCountries = [
    countries[0 + (currentPage*3)], countries[1 + (currentPage*3)], countries[2 + (currentPage*3)]
  ];
 
  if(loading) return <Loading />;
  return (
    <section className="flex flex-wrap justify-center items-center h-4/6">
      {showCountries.map((country) => (
        <Country country={ country } />
      ))}
    </section>
  )
};

export default Countries;