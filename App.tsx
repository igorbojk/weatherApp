import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Weather } from './components/Weather.component';

const API_KEY = '';
const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export default function App() {
  const [weatherKey, setWeatherKey] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = (lat = 50, lon = 30) => {
    fetch(
      `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
    .then(res => res.json())
    .then(json => {
      setWeatherKey(json.weather[0].main);
      setTemperature(json.main.temp.toFixed());
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      {
        isLoading ? 
        <ActivityIndicator size="large" color="#0000ff" /> :
        <Weather temperature={temperature} weatherKey={weatherKey}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
});