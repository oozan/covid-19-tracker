/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from '@material-ui/core';
import './App.css';
import InfoBox from './components/InfoBox';
import Map from './components/Map';

function App () {
  const [countries, setCountries] = useState ([]);
  const {country, setCountry} = useState ('');

  useEffect (() => {
    const getCountriesData = async () => {
      await fetch ('https://disease.sh/v3/covid-19/countries')
        .then (response => response.json ())
        .then (data => {
          const countries = data.map (country => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries (countries);
        });
    };
    getCountriesData ();
  }, []);
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>covid 19 tracker</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" value={country}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map (country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" />
          <InfoBox title="Recovered" />
          <InfoBox title="Deaths" />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
