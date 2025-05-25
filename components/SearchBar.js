import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Tarif ara..."
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
});
