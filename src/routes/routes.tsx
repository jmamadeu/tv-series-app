import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/home/home";
import { ShowScreen } from "../screens/show/show";

export type StackParamsList = {
  Home: undefined;
  Show: { show: Module.Show.Type };
};

const MainStackNavigator = createNativeStackNavigator<StackParamsList>();

export const Routes = () => {
  return (
    <MainStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MainStackNavigator.Screen name="Home" component={HomeScreen} />
      <MainStackNavigator.Screen name="Show" component={ShowScreen} />
    </MainStackNavigator.Navigator>
  );
};
