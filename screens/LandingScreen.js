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
      source={require("../assets/arkaplan.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
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
            <Text style={styles.buttonText}>Pişirmeye Başla!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
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
    marginTop: 75,
    textAlign: "center",
    marginBottom: 55,
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
