import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Pressable,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function RecipeDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal } = route.params;

  const [activeTab, setActiveTab] = useState("Ingredients");

  const openYoutube = () => {
    if (meal.strYoutube) {
      Linking.openURL(meal.strYoutube);
    }
  };

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />

      <View style={styles.header}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={28} color="#F54748" />
        </TouchableOpacity>
      </View>

      <View style={styles.metaContainer}>
        <View style={styles.metaBox}>
          <MaterialCommunityIcons name="earth" size={18} color="#888" />
          <Text style={styles.metaText}>{meal.strArea}</Text>
        </View>
        <View style={styles.metaBox}>
          <MaterialCommunityIcons name="food" size={18} color="#888" />
          <Text style={styles.metaText}>{meal.strCategory}</Text>
        </View>
        <TouchableOpacity style={styles.metaBox} onPress={openYoutube}>
          <Ionicons name="logo-youtube" size={18} color="red" />
          <Text style={[styles.metaText, { color: "red" }]}>Video</Text>
        </TouchableOpacity>
      </View>

      {/* Sekmeler */}
      <View style={styles.tabs}>
        <Pressable
          onPress={() => setActiveTab("Ingredients")}
          style={[styles.tab, activeTab === "Ingredients" && styles.activeTab]}
        >
          <Text style={styles.tabText}>Ingredients</Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("Instructions")}
          style={[styles.tab, activeTab === "Instructions" && styles.activeTab]}
        >
          <Text style={styles.tabText}>Instructions</Text>
        </Pressable>
      </View>

      {/* İçerik */}
      <ScrollView
        style={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === "Ingredients" ? (
          ingredients.map((item, index) => (
            <Text key={index} style={styles.ingredient}>
              • {item}
            </Text>
          ))
        ) : (
          <Text style={styles.instructions}>{meal.strInstructions}</Text>
        )}
        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 450 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", flex: 1, marginRight: 10 },
  metaContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  metaBox: { flexDirection: "row", alignItems: "center", gap: 5 },
  metaText: { color: "#888", fontSize: 14 },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  activeTab: {
    borderColor: "#F54748",
  },
  tabText: {
    fontWeight: "bold",
    color: "#333",
  },
  ingredient: {
    fontSize: 14,
    marginBottom: 4,
  },
  instructions: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  backButtonContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 10,
  },
});
