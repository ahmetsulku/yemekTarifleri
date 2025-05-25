import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFavorites } from "../components/FavoriteContext";
import MealCard from "../components/MealCard";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Favori Tarifler</Text>
      </View>

      {favorites.length === 0 ? (
        <Text style={styles.empty}>Henüz favori tarif eklenmedi.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <MealCard
              meal={item}
              onPress={() =>
                navigation.navigate("RecipeDetail", { meal: item })
              }
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  empty: {
    fontSize: 16,
    color: "#777",
    marginTop: 20,
  },
});
