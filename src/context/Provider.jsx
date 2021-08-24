import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [data, setData] = useState({
    countries: {},
    currentPage: 0,
    loading: true,
  });

  const [filter, setFilter] = useState({
    filter: '',
    option: '',
    filtered: false,
  })

  let API_URL;

  switch(filter.filter) {
    case 'country':
      API_URL = `https://restcountries.eu/rest/v2/alpha/${filter.option}`;
      break;
    case 'region':
      API_URL = `https://restcountries.eu/rest/v2/region/${filter.option}`;
      break;
    case 'language':
      API_URL = `https://restcountries.eu/rest/v2/lang/${filter.option}`;
      break;
    case 'call-code':
      API_URL = `https://restcountries.eu/rest/v2/region/${filter.option}`;
      break;
    case 'capital':
      API_URL = `https://restcountries.eu/rest/v2/capital/${filter.option}`;
      break;
    default:
      API_URL = "https://restcountries.eu/rest/v2/all";
  }

  useEffect(() => {
    const requestAPI = async () => {
      const result = await fetch(API_URL);
      const response = await result.json();
      if(data.loading) return setData({...data, countries: response, loading: false})
    }
    requestAPI();
  });

  return (
    <Context.Provider value={{ data, setData, API_URL, filter, setFilter }}>
      { children }
    </Context.Provider>
  )
}

export default Provider;