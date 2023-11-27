import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function ProjectNew({ navigation }) {
  const [Materia, setMateria] = useState("");
  const [Professores, setProfessores] = useState("");
  const [Cursos, setCursos] = useState("");
  const [projectId, setProjectId] = useState("");
  const { token } = useAuth();

  const handleNewProject = () => {
    try {
      axios
        .put(
          `http://192.168.1.10:3000/portifolio/${projectId}`,
          {
            Materia: Materia,
            Professores: Professores,
            Cursos: Cursos,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          alert("Materia atualizada com sucesso.");
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
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>ID do projeto</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o ID aqui."
          keyboardType="default"
          value={projectId}
          onChangeText={(text) => setProjectId(text)}
        />
        <Text style={styles.label}>Nova Materia</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a Materia aqui."
          keyboardType="default"
          value={Materia}
          onChangeText={(text) => setMateria(text)}
        />

        <Text style={styles.label}>Novos Professores</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira os Professores aqui."
          keyboardType="default"
          value={Professores}
          onChangeText={(text) => setProfessores(text)}
        />

        <Text style={styles.label}>Novos Cursos Abrangidos</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira os cursos Abrangidos aqui."
          keyboardType="default"
          value={Cursos}
          onChangeText={(text) => setCursos(text)}
        />

        <Button
          style={styles.button}
          title="Enviar"
          onPress={handleNewProject}
        />
        <Button
          style={styles.button}
          title="Voltar"
          onPress={handleGoToAdmOptions}
        />
      </View>
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
