// components/MealCard.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MealCard({ meal, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <View style={styles.metaRow}>
          <Ionicons name="earth-outline" size={14} color="#888" />
          <Text style={styles.meta}> {meal.strArea}</Text>
          <MaterialCommunityIcons
            name="food-outline"
            size={14}
            color="#888"
            style={{ marginLeft: 10 }}
          />
          <Text style={styles.meta}> {meal.strCategory}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  meta: {
    color: "#555",
    fontSize: 12,
  },
});
