import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeCountries } from '../reduxStore/countriesSlice'


const Countries = () => {
  const dispatch = useDispatch()
  const { countries, isLoading } = useSelector((state) => state.countries)
  const {searchTerm, setSearchTerm} = useState("");

  useEffect(() => {
    dispatch(initializeCountries())
  }, [dispatch])

 const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  } );

  return (
    <div>
      <h1>Countries</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isLoading ? (
       <div>Loading...</div>
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca2}>
              {country.name.common}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Countries;