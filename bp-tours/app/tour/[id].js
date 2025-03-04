import { useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";
import tours from "../../data/tours.json";
import { useRouter } from "expo-router";

export default function TourDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const tour = tours.find((t) => t.id.toString() === id);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{tour.name}</Text>
      <Text>{tour.description}</Text>
      <Text>£{tour.price} | {tour.duration}</Text>

      <Button title="Book Now" onPress={() => router.push("/booking")} />
    </View>
  );
}
