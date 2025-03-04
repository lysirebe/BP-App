import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

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
    <Card style={{ marginBottom: 20 }}>
      <Card.Cover source={images[tour.id]} />
      <Card.Content>
        <Title>{tour.name}</Title>
        <Paragraph>{`£${tour.price} | ${tour.duration}`}</Paragraph>
        <Button mode="contained" onPress={onPress}>View Tour</Button>
      </Card.Content>
    </Card>

  );
}