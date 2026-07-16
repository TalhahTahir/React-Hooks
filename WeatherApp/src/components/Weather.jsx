import React, { useState, useEffect } from "react";
import Search from "./Search";
import "../index.css"; // Ensure you create this CSS file

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(searchQuery) {
    if (!searchQuery) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=fe74a592bdf5cadacdb6f8383e0efe8e`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message || "City not found");
      }

      setWeather(data);
    } catch (e) {
      setError(e.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    fetchData(search);
  }

  useEffect(() => {
    fetchData("Karachi");
  }, []);

  function getDate() {
    return new Date().toLocaleString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  // Helper to convert Kelvin to Celsius
  const toCelsius = (kelvin) => Math.round(kelvin - 273.15);

  return (
    <div className="weather-app-container">
      <div className="weather-card">
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />

        {loading && <div className="status-message loading">Loading...</div>}
        {error && <div className="status-message error">{error}</div>}

        {!loading && !error && weather && (
          <div className="weather-content">
            <div className="city">
              <h2>
                {weather.name}, <span>{weather.sys?.country}</span>
              </h2>
              <div className="date">{getDate()}</div>
            </div>

            <div className="main-weather">
              {weather.weather?.[0]?.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt="weather icon"
                  className="weather-icon"
                />
              )}
              <div className="temp">{toCelsius(weather.main?.temp)}°C</div>
              <p className="description">{weather.weather?.[0]?.description}</p>
            </div>

            <div className="weather-grid">
              <div className="grid-item">
                <span className="value">{weather.wind?.speed} m/s</span>
                <span className="label">Wind Speed</span>
              </div>
              <div className="grid-item">
                <span className="value">{weather.main?.humidity}%</span>
                <span className="label">Humidity</span>
              </div>
              <div className="grid-item">
                <span className="value">{toCelsius(weather.main?.feels_like)}°C</span>
                <span className="label">Feels Like</span>
              </div>
              <div className="grid-item">
                <span className="value">{weather.main?.pressure} hPa</span>
                <span className="label">Pressure</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;