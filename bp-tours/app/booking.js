import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function BookingScreen() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text>Confirm Your Booking</Text>
      <Button title="Confirm Booking" onPress={() => router.push("/confirmation")} />
    </View>
  );
}
