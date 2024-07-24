import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../reduxStore/countriesSlice'


const Countries = () => {
  const dispatch = useDispatch()
  const { countries, isLoading } = useSelector((state) => state.countries)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

 
  return (
    <div>
      <h1>Countries</h1>
      {isLoading ? (
       <div>Loading...</div>
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={country.name}>{country.name.common}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Countries;