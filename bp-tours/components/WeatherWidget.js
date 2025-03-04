import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { getWeather } from '../api/weatherApi';

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then(setWeather);
  }, []);

  return weather ? <Text>Current Weather: {weather}</Text> : <Text>Loading...</Text>;
}