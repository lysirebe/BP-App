import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={{ padding: 40, justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 28, textAlign: "center" }}>Welcome to BP Tours</Text>
      <TextInput placeholder="Email" style={{ marginVertical: 10, padding: 10, borderWidth: 1 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ marginBottom: 20, padding: 10, borderWidth: 1 }} />
      <Button title="Login" onPress={() => router.push("/")} />
    </View>
  );
}
