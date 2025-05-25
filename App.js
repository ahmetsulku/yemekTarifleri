import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import { FavoriteProvider } from "./components/FavoriteContext";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}
