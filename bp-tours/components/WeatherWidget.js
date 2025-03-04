import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getWeather } from '../api/weatherApi';

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then(setWeather);
  }, []);

  return (
    <View style={styles.container}>
      {weather ? <Text style={styles.weatherText}>🌤️ Blackpool: {weather}</Text> : <Text>Loading...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e6f7ff',
    borderRadius: 15,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1890ff',
  },
  weatherText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});