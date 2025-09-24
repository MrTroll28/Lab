import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsScreen from "./ProductScreen";
import FavoritesScreen from "./FavoriteScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Products") iconName = "pricetags-outline";
          else if (route.name === "Favorites") iconName = "heart-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} options={{ title: "Sản phẩm" }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: "Yêu thích" }} />
    </Tab.Navigator>
  );
}
