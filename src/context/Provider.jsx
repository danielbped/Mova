import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [data, setData] = useState({
    countries: {},
    currentPage: 0,
    loading: true,
  });

  const [filters, setFilter] = useState({
    filter: '',
    option: '',
    filterOptions: {},
    loaded: false,
  })

  const [API, setAPI] = useState("https://restcountries.eu/rest/v2/all")

  const switchAPI = (filter) => {
    if(filter.option !== '') {
      switch(filter.filter) {
        case 'country':
          setAPI(`https://restcountries.eu/rest/v2/alpha/${filter.option}`)
          break;
        case 'region':
          setAPI(`https://restcountries.eu/rest/v2/region/${filter.option}`)
          break;
        case 'language':
          setAPI(`https://restcountries.eu/rest/v2/lang/${filter.option}`)
          break;
        case 'call-code':
          setAPI(`https://restcountries.eu/rest/v2/region/${filter.option}`)
          break;
        case 'capital':
          setAPI(`https://restcountries.eu/rest/v2/capital/${filter.option}`)
          break;
        default:
          setAPI("https://restcountries.eu/rest/v2/all")
      }
    }
  }


  useEffect(() => {
    const requestAPI = async () => {
      const result = await fetch(API);
      const response = await result.json();
      if(data.loading) {
        setData({...data, countries: response, loading: false})
        if(!filters.loaded) return setFilter({...filters, filterOptions: response, loaded: true})
      }
    }
    requestAPI();
  });

  useEffect(() => {
    switchAPI(filters)
  }, [filters])

  return (
    <Context.Provider value={{ data, setData, filters, setFilter, API }}>
      { children }
    </Context.Provider>
  )
}

export default Provider;