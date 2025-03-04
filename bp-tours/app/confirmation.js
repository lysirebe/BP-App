import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Confirmation() {
  const router = useRouter();

  return (
    <View style={{ padding: 20, justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>Booking Confirmed!</Text>
      <Button title="Go Home" onPress={() => router.push("/")} />
    </View>
  );
}
