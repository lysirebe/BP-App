// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }
import { Provider as PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}




