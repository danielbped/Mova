import React, { useState, useEffect } from 'react';
import Context from './Context';

const API_URL = 'https://restcountries.eu/rest/v2/all';

function Provider({ children }) {

  const [data, setData] = useState({
    countries: {},
    loading: true,
  });

  useEffect(() => {
    const requestAPI = async () => {
      const result = await fetch(API_URL);
      const response = await result.json();
      if(data.loading) return setData({...data, countries: response, loading: false})
    }
    requestAPI();
  });

  return (
    <Context.Provider value={{ data }}>
      { children }
    </Context.Provider>
  )
}

export default Provider;