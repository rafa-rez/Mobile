import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function OptionsUser({ navigation }) {
  const handleGoToSubjects = () => {
    navigation.navigate("UserSubjects");
  };
  const handleGoToRequest = () => {
    navigation.navigate("MakeRequest");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bem-vindo à Página dos Usuários. Abaixo estão suas opções.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Acessar suas Matérias"
          onPress={handleGoToSubjects}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Cadastrar Curso"
          onPress={handleGoToRequest}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
    width: "100%",
  },
});
