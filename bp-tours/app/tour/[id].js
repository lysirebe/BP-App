
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Card, Button, Text } from 'react-native-paper';
import { View, StyleSheet, Dimensions } from 'react-native';
import tours from '../../data/tours.json';

const { width, height } = Dimensions.get('window'); // Dynamic screen size

const images = {
  1: require('../../assets/images/1.jpeg'),
  2: require('../../assets/images/2.avif'),
  3: require('../../assets/images/3.jpeg'),
  4: require('../../assets/images/4.jpeg'),
  5: require('../../assets/images/5.jpeg'),
  6: require('../../assets/images/6.jpeg'),
};

export default function TourDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const tour = tours.find((t) => t.id == id);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Tour Details</Text>

      <View style={styles.cardWrapper}>
        <Card>
          <Card.Cover source={images[tour.id]} style={styles.image} />
          <Card.Content>
            <Text style={styles.title}>{tour.name}</Text>
            <Text>{tour.description}</Text>
            <Text>📍 {tour.location}</Text>
            <Text>💰 £{tour.price}</Text>
            <Text>⏰ {tour.duration}</Text>
            <Text>👥 Group Size: {tour.groupSize}</Text>
            <Text>🕒 Start Times: {tour.startTimes.join(', ')}</Text>
          </Card.Content>

          <Card.Actions>
            <Button mode="contained" onPress={() => router.push(`/booking/${id}`)}>
              Book Now
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F6F6F6',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  cardWrapper: {
    width: width * 0.9, 
    maxWidth: 500,
  },
  image: {
    width: '100%',
    height: height * 0.3,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});


