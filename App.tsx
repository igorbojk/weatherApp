import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weather = [
  {
    background: '#005BEA',
    title: 'Raining',
    subtitle: 'Get a cup of coffee',
    icon: 'weather-rainy',
    temperature: 37
  },
  {
    background: '#f7b733',
    title: 'So Sunny',
    subtitle: 'It is hurting my eyes',
    icon: 'weather-sunny',
    temperature: 37
  },
  {
    background: '#616161',
    title: 'A Storm is coming',
    subtitle: 'Because Gods are angry',
    icon: 'weather-lightning',
    temperature: 37
  },
  {
    background: '#1F1C2C',
    title: 'Clouds',
    subtitle: 'Everywhere',
    icon: 'weather-cloudy',
    temperature: 37
  },
  {
    background: '#00d2ff',
    title: 'Snow',
    subtitle: 'Get out and build a snowman for me',
    icon: 'weather-snowy',
    temperature: 37
  },
  {
    background: '#076585',
    title: 'Drizzle',
    subtitle: 'Partially raining...',
    icon: 'weather-hail',
    temperature: 37
  },
  {
    background: '#66A6FF',
    title: 'Haze',
    subtitle: 'Another name for Partial Raining',
    icon: 'weather-hail',
    temperature: 37
  },
  {
    background: '#3CD3AD',
    title: 'Mist',
    subtitle: "Don't roam in forests!",
    icon: 'weather-fog',
    temperature: 37
  }
];

export default function App() {
  const [weatherIndex, setWeatherIndex] = useState(0);

  const changeWeather = () => {
    const index = weatherIndex < weather.length - 1 ? weatherIndex + 1 : 0;
    setWeatherIndex(index);
  }
  return (
    <View style={
      [
        styles.container,
        {backgroundColor: weather[weatherIndex].background}
      ]
    }>
      <View style={styles.weatherContainer}>
        <MaterialCommunityIcons size={90} name={weather[weatherIndex].icon} color={'#fff'} />
        <Text style={styles.temperature}>
          {weather[weatherIndex].temperature}˚
        </Text>
      </View>
      <Text style={styles.title}>
        {weather[weatherIndex].title}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={changeWeather}
          title="Change weather"
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20
  },
  buttonContainer: {
    padding: 8
  },
  weatherContainer: {
    alignItems: 'flex-end',
    flex: 1,
    padding: 20,
    paddingTop: 40
  },
  temperature: {
    fontSize: 36,
    textAlign: 'left',
    color: '#fff'
  },
  title: {
    fontSize: 60,
    color: '#fff'
  }
});
