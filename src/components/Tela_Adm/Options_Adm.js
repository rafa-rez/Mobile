import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function OptionsAdm({ navigation }) {
  const handleGoToNew = () => {
    navigation.navigate("ProjectNew");
  };
  const handleGoToUpdate = () => {
    navigation.navigate("ProjectUpdate");
  };
  const handleGoToFind = () => {
    navigation.navigate("ProjectFind");
  };
  const handleGoToAll = () => {
    navigation.navigate("ProjectAll");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bem-vindo à Página dos Administradores. Abaixo estão suas opções.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar nova Matéria" onPress={handleGoToNew} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Atualizar Matéria" onPress={handleGoToUpdate} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ver todos Projetos" onPress={handleGoToAll} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Puxar dados de uma matéria" onPress={handleGoToFind} />
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
});
