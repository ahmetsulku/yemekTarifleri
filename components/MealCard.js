import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MealCard({ meal, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
        <View style={styles.cardBody}>
          <Text style={styles.mealName}>{meal.strMeal}</Text>
          <View style={styles.row}>
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
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    marginHorizontal: 20,
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
});
