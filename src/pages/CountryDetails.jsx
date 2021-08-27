import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Loading from '../components/Loading';
import Country from '../components/Country';

const API_URL = `https://restcountries.eu/rest/v2/alpha/`

function CountryDetails(props) {
  const {
    filters: { filterOptions },
    filters,
    setFilter,
    data,
    setData,
  } = useContext(Context);
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

  const handleClick = (regionRedirect) => {
    setData({...data, loading: true})
    setFilter({...filters, filter: 'region', option: regionRedirect });
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
      <div className="flex items-center sm:flex-col">
      <img className="m-6 w-1/2" src={ flag } alt={ `${name} flag` } />
        <ul>
          <li>Nome: { name }</li>
          <li>Capital: { capital }</li>
          <li>
            Região: 
            <Link to="/">
              <button
                type="button"
                onClick={ () => handleClick(region) }
                >
                { region }
              </button>
            </Link>
          </li>
          <li>Sub-região: { subregion }</li>
          <li>População: { population }</li>
          <li>Línguas: {languages.map(
            (a, index) => {
              if(index === 0 && index.length > 1) return `${a.name}, `
              if(index === languages.length-1) return `${a.name}.`
              return `${a.name}, `
            }
            
            )}
          </li>
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