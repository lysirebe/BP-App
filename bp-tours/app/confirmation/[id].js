import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import tours from '../../data/tours.json';

export default function ConfirmationPage() {
  const { id, date, time, people } = useLocalSearchParams();
  const tour = tours.find((t) => t.id == id);
  const total = tour.price * people;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Booking Confirmed!</Text>
      <Text>{tour.name}</Text>
      <Text>Date: {date}</Text>
      <Text>Time: {time}</Text>
      <Text>Number of People: {people}</Text>
      <Text>Total: £{total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  }
});
