import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import { Weather } from './components/Weather.component';

const API_KEY = '';
const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export default function App() {
  const [weatherKey, setWeatherKey] = useState("Clear");
  const [temperature, setTemperature] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      position => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        fetchWeather()
      }
    );
  }

  const fetchWeather = (lat = 20, lon = 20) => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView
      contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
        }
      >
        <Weather temperature={temperature} weatherKey={weatherKey}/>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
});