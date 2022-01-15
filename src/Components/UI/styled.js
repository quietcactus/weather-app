import styled from "styled-components"

export const SingleWeatherBlock = styled.div`
  background-color: #14213D;
  padding: 20px;
  border: 1px solid #14213D;
  margin: 13px;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h2,
  span,
  p {
    text-transform: uppercase;
    color: #fff;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 0;
  }

  span {
    display: block;
  }

  .flex-temperatures {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }

  p {
    margin: 0 5px;
    font-weight: 700;
    font-size: 25px;
  }

  i {
    margin-right: 8px;
    color: #FCA311;
  }

  @media screen and (min-width: 768px) {
    width: 45%;
  }

  @media screen and (min-width: 1025px) {
    width: 25%;
  }
`

export const WeatherBanner = styled.div`
  background-color: #E5E5E5;
  color: #14213D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 25px 50px;
  border-radius: 5px;
  margin-bottom: 30px;
  text-align: center;

  h2 {
    font-size: 50px;
  }

  span {
    font-size: 14px;
    letter-spacing: 0.8px;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    text-align: left;

    h2 {
      margin-bottom: 5px;
    }


  }

`

export const WeatherBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`