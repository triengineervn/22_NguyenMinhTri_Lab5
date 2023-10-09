import MobileShopApp from "./screen/MobileShopApp";
import SelectColorDetail from "./screen/SelectColorDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MobileShopApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={SelectColorDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
