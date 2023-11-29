import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

export default function Card({ name, Curso, _id }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nome: {name}</Text>
        <Text style={styles.text}>Curso: {Curso}</Text>
        <Text style={styles.text}>ID: {_id}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get("screen").width * 0.68,
    alignItems: "center",
    marginHorizontal: 40,
    height: 100,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginBottom: 20,
  },
  textContainer: {
    width: "100%",
    marginLeft: 0,
    marginBottom: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
