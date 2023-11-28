import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function ProjectRemove({ navigation }) {
  const [projectId, setProjectId] = useState("");
  const { token } = useAuth();

  const handleFindProjectByIdAndRemove = () => {
    try {
      axios
        .delete(`http://192.168.1.10:3000/portifolio/${projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          alert("Materia removida com sucesso.");
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoToAdmOptions = () => {
    navigation.navigate("Options_Adm");
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>ID do Projeto</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o ID do projeto aqui."
        keyboardType="default"
        value={projectId}
        onChangeText={(text) => setProjectId(text)}
      />
      <Button
        style={styles.button}
        title="Buscar Projeto por ID e Apagar"
        onPress={handleFindProjectByIdAndRemove}
      />
      <Button
        style={styles.button}
        title="Voltar"
        onPress={handleGoToAdmOptions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  formContainer: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#f0f0f0",
    marginTop: 20,
  },
  projectContainer: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#e0e0e0",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    marginTop: 10,
  },
});
