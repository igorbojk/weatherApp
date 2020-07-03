import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Animated, Easing,  } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

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

  const [ isHelpVisible, setHelpVisibility ] = useState(false);

  const showHelp = () => {
    setHelpVisibility(true);
    Pull();
    setTimeout(() => {
      setHelpVisibility(false);
    }, 4000)
  }

  const pullAnim = useRef(new Animated.Value(0)).current;

  const Pull = () => {
    Animated.loop(
      Animated.timing(pullAnim, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true
      }),
      {
        iterations: 4
      }
    ).start();
  };

    return (
        <View style={
            [
              styles.container,
              {backgroundColor: weather[weatherKey].background}
            ]
          }>
            {isHelpVisible &&
              <Animated.View style={[
                styles.helpBlock,
                {transform: [{translateY: pullAnim}]}
              ]}>
                <MaterialIcons size={32} name="touch-app" color={'#fff'}/>
                <Text style={styles.helpText}>Pull to refresh</Text>
              </Animated.View>
            }
            <View style={styles.weatherContainer}>
              <MaterialIcons size={32} name="help" color={'#fff'} style={{opacity: 0.2}} onPress={() => showHelp()}/>
              <View>
                <MaterialCommunityIcons size={90} name={weather[weatherKey].icon} color={'#fff'} />
                <Text style={styles.temperature}>
                  {temperature}˚
                </Text>
              </View>
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
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'row',
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
    },
    helpBlock: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'flex-start',
      top: 50,
      left: 0,
      right: 0,
      marginTop: 0
    },
    helpText: {
      fontSize: 14,
      color: '#fff', 
      marginTop: 6
    }
});

export { Weather };