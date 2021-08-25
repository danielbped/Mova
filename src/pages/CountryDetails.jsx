import React, { useEffect, useState, useContext } from 'react';
import Context from '../context/Context';
import Loading from '../components/Loading';
import Country from '../components/Country';

const API_URL = `https://restcountries.eu/rest/v2/alpha/`

function CountryDetails(props) {
  const { filters: { filterOptions } } = useContext(Context);
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const URL = `${API_URL}${id}`;
  const [currentCountry, setCurrentCountry] = useState({
    country: '',
    loading: true,
  });

  useEffect(() => {

    const requestAPI = async () => {
      const result = await fetch(URL);
      const response = await result.json();
      setCurrentCountry(
        { ...currentCountry, country: response, loading: false }
      )
    } 
    requestAPI();
  }, [URL, currentCountry])

  const findBorder = (countriesBorders) => {
    return countriesBorders.map((border) => filterOptions.filter((country) => country.alpha3Code === border))
  }

  if(currentCountry.loading) return <Loading />;
  const {
    name,
    flag,
    region,
    population,
    capital,
    subregion,
    languages,
    borders,
  } = currentCountry.country;
  return (
    <main>
      <h1 className="m-6">{ name }</h1>
      <div className="flex items-center">
      <img className="m-6 w-1/2" src={ flag } alt={ `${name} flag` } />
        <ul>
          <li>Nome: { name }</li>
          <li>Capital: { capital }</li>
          <li>Região: { region }</li>
          <li>Sub-região: { subregion }</li>
          <li>População: { population }</li>
          <li>Línguas: {languages.reduce((acc, curr) => (`${acc.name}, ${curr.name}`), '')}</li>
        </ul>
      </div>
      <h2 className="m-6">Países Vizinhos</h2>
      <div className="flex">
        {borders.length === 0 ? <p className="m-6">Este país não possui vizinhos.</p> : findBorder(borders).map((border) => <Country country={ border[0] } />)}
      </div>
    </main>
  );
};

export default CountryDetails;