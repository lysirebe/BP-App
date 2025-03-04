import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, Text, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import tours from '../../data/tours.json';

export default function BookingPage() {
  const { id } = useLocalSearchParams();
  const tour = tours.find((t) => t.id == id);
  const router = useRouter();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const total = tour.price * people;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tour.name}</Text>
      <Text>📍 {tour.location}</Text>
      <Text>Price per person: £{tour.price}</Text>

      <TextInput label="Select Date" value={date} onChangeText={setDate} />
      <TextInput label="Select Time" value={time} onChangeText={setTime} />
      <TextInput label="Number of People" keyboardType="numeric" value={String(people)} onChangeText={(v) => setPeople(Number(v))} />

      <Text>Total: £{total}</Text>

      <Button mode="contained" onPress={() => router.push(`/confirmation/${id}?date=${date}&time=${time}&people=${people}`)}>
        Confirm Booking
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  }
});
