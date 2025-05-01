// screens/LandingScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/arkaplan.png")} // kendi arka plan görselini bu şekilde koy
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.topText}>★ Ahmet Sülkü | 18091607 ★</Text>
      <View style={styles.container}>
        <View style={styles.centerTextContainer}>
          <Text style={styles.title}>
            🍳{"\n"}Hadi {"\n"}Pişirelim
          </Text>
          <Text style={styles.subtitle}>
            En iyi yemek tarifleri listesi şimdi elinde.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Start cooking</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 60,
    paddingHorizontal: 25,
  },
  topText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 30,
    textAlign: "center",
    paddingVertical: 60,
  },
  centerTextContainer: {
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 56,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    marginBottom: "55",
    marginTop: "75",
  },
  button: {
    backgroundColor: "#F54748",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
