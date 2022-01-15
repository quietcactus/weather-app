import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ErrorMessage from './errorMessage';

const WeatherForm = (props) => {
  //States
  const [zipCode, setZipCode] = useState("");
  const [validZipCode, setValidZipCode] = useState(true);
  
  // Geodecode API call
  const zipCodeToCoordinates = () => {

    axios.get('http://api.openweathermap.org/geo/1.0/zip', {
      params: {
        zip: zipCode,
        limit: 1,
        appid: process.env.REACT_APP_WEATHER_API_KEY,
      }
    })
    .then(
      (response) => {
        console.log("then");
        // Store data
        const locationData = {
          lon: response.data.lon,
          lat: response.data.lat,
          name: response.data.name,
          zip: zipCode
        };

        setValidZipCode(true);

        // Update State with data stored
        props.updateZipCode(locationData)
    })
    .catch((error) => {
      if(error.response.status === 400) {
        console.log("bad zipcode")
        setValidZipCode(false);
        // return;
      }
    })
  }

  // Update Zip Code state
  const handleZipCodeUpdate = (e) => {
    setZipCode(e.target.value);
  }

  // Check if zipcode is valid
  const ZipCodeValid = (zipCode) => {
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
    return isValidZip;
  }

  // Form Submit
  const handleFormSubmit = (e) => {
    // Prevent Page reload
    e.preventDefault();

    // Check if zipcode is valid
    if(!ZipCodeValid(zipCode)) {
      // Clear input
      setZipCode('');

      // Update Zipcode State for error message
      setValidZipCode(false);

      // Exit
      return;
    }

    // Geodecode
    zipCodeToCoordinates();

    // Clean input
    setZipCode('');
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <label className='visually-hidden' htmlFor="zip-code">Zip Code</label>
      {!validZipCode && <ErrorMessage/> }
      <input type="number" name="zip-code" id="zip-code" value={zipCode} onChange={handleZipCodeUpdate} placeholder='Zip Code'/>
      <button type="submit">Update Weather Location</button>
    </Form>
  )
}

// Styles

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 700;
    font-size: 30px
  }

  input {
    height: 40px;
    width: 200px;
    border-radius: 5px;
    margin-bottom: 12px;
    border: 1px solid #14213D;
    width: 100%;
    font-size: 18px;
    padding: 12px;
  }

  button {
    border: none;
    background-color: #000;
    color: #FCA311;
    padding: 12px 25px;
    border-radius: 5px;
    font-size: 18px;
    display: block;
    width: 100%;
  }

  p {
    color: maroon;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export default WeatherForm;