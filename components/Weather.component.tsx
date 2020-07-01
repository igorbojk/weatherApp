import React from 'react';
import { View, StyleSheet, Text,  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weather: any = {
    Rain: {
      background: '#005BEA',
      title: 'Raining',
      subtitle: 'Get a cup of coffee',
      icon: 'weather-rainy',
      temperature: 37
    },
    Clear: {
      background: '#f7b733',
      title: 'So Sunny',
      subtitle: 'It is hurting my eyes',
      icon: 'weather-sunny',
      temperature: 37
    },
    Thunderstorm: {
      background: '#616161',
      title: 'A Storm is coming',
      subtitle: 'Because Gods are angry',
      icon: 'weather-lightning',
      temperature: 37
    },
    Clouds: {
      background: '#1F1C2C',
      title: 'Clouds',
      subtitle: 'Everywhere',
      icon: 'weather-cloudy',
      temperature: 37
    },
    Snow: {
      background: '#00d2ff',
      title: 'Snow',
      subtitle: 'Get out and build a snowman for me',
      icon: 'weather-snowy',
      temperature: 37
    },
    Drizzle: {
      background: '#076585',
      title: 'Drizzle',
      subtitle: 'Partially raining...',
      icon: 'weather-hail',
      temperature: 37
    },
    Haze: {
      background: '#66A6FF',
      title: 'Haze',
      subtitle: 'Another name for Partial Raining',
      icon: 'weather-hail',
      temperature: 37
    },
    Mist: {
      background: '#3CD3AD',
      title: 'Mist',
      subtitle: "Don't roam in forests!",
      icon: 'weather-fog',
      temperature: 37
    }
  };

const Weather: React.FC<{temperature: number, weatherKey: string}> = ({
    temperature,
    weatherKey
}) => {
    return (
        <View style={
            [
              styles.container,
              {backgroundColor: weather[weatherKey].background}
            ]
          }>
            <View style={styles.weatherContainer}>
              <MaterialCommunityIcons size={90} name={weather[weatherKey].icon} color={'#fff'} />
              <Text style={styles.temperature}>
                {temperature}˚
              </Text>
            </View>
            <Text style={styles.title}>
              {weather[weatherKey].title}
            </Text>
          </View>
    );
};

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

export { Weather };