import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get device width and height dynamically

const images = {
  1: require('../assets/images/1.jpeg'),
  2: require('../assets/images/2.avif'),
  3: require('../assets/images/3.jpeg'),
  4: require('../assets/images/4.jpeg'),
  5: require('../assets/images/5.jpeg'),
  6: require('../assets/images/6.jpeg'),
};

export default function TourCard({ tour, onPress }) {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Cover source={images[tour.id]} style={styles.image} />
        <Card.Content>
          <Title style={styles.title}>{tour.name}</Title>
          <Paragraph>{`£${tour.price} | ${tour.duration}`}</Paragraph>
          <Button mode="contained" onPress={onPress}>View Tour</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    marginVertical: 10,
    width: width * 0.9, // Cards take up 90% of the screen width
  },
  card: {
    width: '100%',
    height: height * 0.5, // Cards take up 60% of the screen height
    justifyContent: 'space-between',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    height: '60%', // Image fills 60% of the card height
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});



