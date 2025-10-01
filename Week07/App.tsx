import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Introduce from './screens/Introduce';
import ProductScreen from './screens/ProductScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from './screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Introduce" 
          component={Introduce} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
