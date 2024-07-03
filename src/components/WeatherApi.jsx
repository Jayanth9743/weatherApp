import axios from "axios";
import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import { assets } from "../assets/Photo";

const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const { children } = props;
  const [city, setCity] = useState("india");
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '6fe4a478fd5a422b99545744242706';

  const fetchWeatherData = async (query) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchWeatherDataByCoordinates = (latitude, longitude) => {
    setCoordinates({ latitude, longitude });
  };

  useEffect(() => {
    const query = coordinates ? `${coordinates.latitude},${coordinates.longitude}` : city;
    fetchWeatherData(query);
  }, [city, coordinates]);

  // Refresh weather data every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const query = coordinates ? `${coordinates.latitude},${coordinates.longitude}` : city;
      fetchWeatherData(query);
    }, 10000); // Refresh every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount or dependency change
  }, [city, coordinates]);

  const imageToggler = (img) => {
    if (img === "Sunny" || img === "Clear") {
      return assets.s2;
    } else if (img === "Partly cloudy" || img === "Cloudy" || img === "Overcast") {
      return assets.c1;
    } else if (img === "Mist" || img === "Fog") {
      return assets.m1;
    } else if (
      img === "Patchy Rain Possible" ||
      img === "Patchy Light Drizzle" ||
      img === "Light Drizzle" ||
      img === "Light Rain" ||
      img === "Patchy Light Rain" ||
      img === "Moderate Rain at Times" ||
      img === "Moderate Rain" ||
      img === "Heavy Rain at Times" ||
      img === "Heavy Rain"
    ) {
      return assets.r4;
    } else if (img === "Thundery Outbreaks Possible") {
      return assets.t1;
    } else {
      return assets.n13;
    }
  }
  
  const contextValue = {
    city,
    setCity,
    weatherData,
    fetchWeatherDataByCoordinates,
    imageToggler
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { WeatherProvider, WeatherContext };
