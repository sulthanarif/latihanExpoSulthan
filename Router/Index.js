import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
// import HomeScreen
import HomeScreen from "../screens/Home";
// import ProfileScreen
import ProfileScreen from "../screens/Profile";
// import GalleryScreen
import GalleryScreen from "../screens/Gallery";

// create stack navigator
const Stack = createNativeStackNavigator();
// export default function Index
export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Gallery">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="Profille" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
