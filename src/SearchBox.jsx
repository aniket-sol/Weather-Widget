/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7fb0bfbb286161922bc3a8aea95d7629";

  let [city, setCity] = useState("");
  let [error, setError] = useState("");

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let res = await response.json();
      let result = {
        city: res.name,
        feels_like: res.main.feels_like,
        humidity: res.main.humidity,
        pressure: res.main.pressure,
        temp: res.main.temp,
        temp_max: res.main.temp_max,
        temp_min: res.main.temp_min,
        weather: res.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };
  let getCity = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    setError("");
    try {
      event.preventDefault();
      let info = await getWeatherInfo();
      updateInfo(info);
      setCity("");
    } catch (err) {
      setError("No such place exist");
    }
  };
  return (
    <div className="SearchBox">
      <form action="">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          onChange={getCity}
          value={city}
        />
        <br /> <br />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such place exists!</p>}
    </div>
  );
}
