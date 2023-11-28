import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function ProjectAdd({ navigation }) {
  const [id, setId] = useState("");
  const [Curso, setCurso] = useState("");
  const { token } = useAuth();

  const handleAddSubject = () => {
    try {
      axios
        .put(
          `http://192.168.1.10:3000/portifolio/curso/${id}`,
          {
            Curso: Curso,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          alert("Curso adicionado com sucesso.");
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
        placeholder="Insira o ID do Usuário aqui."
        keyboardType="default"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Text style={styles.label}>Curso a ser aplicado</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o curso aqui."
        keyboardType="default"
        value={Curso}
        onChangeText={(text) => setCurso(text)}
      />
      <Button
        style={styles.button}
        title="Adicionar curso ao usuário"
        onPress={handleAddSubject}
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
