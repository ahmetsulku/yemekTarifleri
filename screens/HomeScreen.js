// screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MealCard from "../components/MealCard";

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
      console.error("Veri çekme hatası:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const visibleMeals = filteredMeals.slice(0, visibleCount);

  const renderCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("RecipeDetail", { meal: item })}
    >
      <View style={styles.card}>
        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
        <View style={styles.cardBody}>
          <Text style={styles.mealName}>{item.strMeal}</Text>
          <View style={styles.row}>
            <Ionicons name="earth-outline" size={14} color="#888" />
            <Text style={styles.meta}> {item.strArea}</Text>
            <MaterialCommunityIcons
              name="food-outline"
              size={14}
              color="#888"
              style={{ marginLeft: 10 }}
            />
            <Text style={styles.meta}> {item.strCategory}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tarif ara..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#F54748" />
      ) : (
        <FlatList
          data={visibleMeals}
          keyExtractor={(item) => item.idMeal}
          renderItem={renderCard}
          contentContainerStyle={{ paddingBottom: 80 }}
          ListFooterComponent={
            visibleCount < filteredMeals.length ? (
              <TouchableOpacity
                style={styles.loadMore}
                onPress={() => setVisibleCount(visibleCount + 5)}
              >
                <Text style={styles.loadMoreText}>Daha fazla göster</Text>
              </TouchableOpacity>
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 30, backgroundColor: "#fff" },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    height: 280,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
  },
  cardBody: {
    paddingTop: 25,
    paddingBottom: 25,
    alignItems: "center",
  },
  mealName: {
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 5,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  meta: {
    color: "#888",
    fontSize: 12,
  },
  loadMore: {
    backgroundColor: "#F54748",
    margin: 10,
    padding: 14,
    borderRadius: 15,
    alignItems: "center",
  },
  loadMoreText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
