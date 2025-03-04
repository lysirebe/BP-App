// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>BP Tours.</Text>
//     </View>
//   );
// }

import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import WeatherWidget from "../components/WeatherWidget";
import tours from "../data/tours.json";
import TourCard from "../components/TourCard";

export default function Index() {
  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>BP Tours</Text>
      <WeatherWidget />
      <FlatList
        data={tours}
        renderItem={({ item }) => (
          <Link href={`/tour/${item.id}`}>
            <TourCard tour={item} />
          </Link>
        )}
      />
    </View>
  );
}

