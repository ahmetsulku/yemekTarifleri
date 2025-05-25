import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Text,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";

export default function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchMeals = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const sorted = response.data.meals.sort((a, b) =>
        a.strMeal.localeCompare(b.strMeal)
      );
      setMeals(sorted);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const filteredMeals = meals
    ? meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const visibleMeals = filteredMeals.slice(0, visibleCount);

  const renderCard = ({ item }) => (
    <MealCard
      meal={item}
      onPress={() => navigation.navigate("RecipeDetail", { meal: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchTerm} onChangeText={setSearchTerm} />

      {loading ? (
        <ActivityIndicator size="large" color="#F54748" />
      ) : (
        <FlatList
          data={visibleMeals}
          keyExtractor={(item) => item.idMeal}
          renderItem={renderCard}
          contentContainerStyle={{ paddingBottom: 80 }}
          ListFooterComponent={
            filteredMeals.length > 1 && visibleCount < filteredMeals.length ? (
              <TouchableOpacity
                style={styles.loadMore}
                onPress={() => setVisibleCount(visibleCount + 5)}
              >
                <Ionicons
                  name="add"
                  size={18}
                  color="#fff"
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.loadMoreText}>Daha fazla göster</Text>
              </TouchableOpacity>
            ) : null
          }
        />
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("Favorites")}
        style={styles.floatingButton}
      >
        <Ionicons name="heart" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 30, backgroundColor: "#fff" },
  loadMore: {
    backgroundColor: "#F54748",
    margin: 10,
    padding: 14,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  loadMoreText: {
    color: "#fff",
    fontWeight: "bold",
  },
  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#F54748",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
