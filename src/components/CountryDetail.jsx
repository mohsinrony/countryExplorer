import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {Button, Col, Container, Row, Image, Spinner} from 'react-bootstrap';


const CountryDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state.country;
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .catch((error) => {
      console.error("Error fetching weather data: ", error); // Log error
      setError(true);
    })
    .then((response) => {
      setWeather(response.data);
      setIsLoading(false);
    });
  }, [country.capital]);

  if (isLoading) {
    return (
    <Col className='text-center' m-5>
      <Spinner 
      animation='border'
      role='status'
      variant='info'
      className='center'
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </Col>
    );
  }

  return (
    <Container>
      <Row className="m-5">
        <Col>
        {" "}
          <Image thumbnail
          src={`https://source.unsplash.com/featured/1600x900?${country.name.common}`}/>
        </Col>
        <Col>
         <h2 className='display-4'>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area} km<sup>2</sup></p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Timezone: {country.timezones}</p>
          <p>Languages: {Object.values(country.languages).join(", ")}</p>
          <p>Currencies: {Object.values(country.currencies).join(", ")}</p>
          {error && weather && (
            <p>Weather: {weather.weather[0].description}</p>
          )}
         
        </Col>
      </Row>
      <Row>
        <Col>
          <Button 
          variant='light'
          onClick={() => navigate("/countries")}>Back</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CountryDetail;
