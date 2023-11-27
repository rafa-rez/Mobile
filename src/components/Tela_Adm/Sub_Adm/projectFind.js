import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function ProjectFind({ navigation }) {
  const [projectId, setProjectId] = useState("");
  const [projectSlug, setProjectSlug] = useState("");
  const { token } = useAuth();
  const [projectData, setProjectData] = useState(null);

  const handleFindProjectById = () => {
    try {
      axios
        .get(`http://192.168.1.10:3000/portifolio/id/${projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProjectData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFindProjectBySlug = () => {
    try {
      axios
        .get(`http://192.168.1.10:3000/portifolio/${projectSlug}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProjectData(res.data);
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
      {projectData && (
        <View style={styles.projectContainer}>
          <Text>ID do Projeto: {projectData._id}</Text>
          <Text>Materia: {projectData.Materia}</Text>
          <Text>Professores: {projectData.Professores.join(", ")}</Text>
          <Text>Cursos: {projectData.Cursos.join(", ")}</Text>
        </View>
      )}

      <View style={styles.formContainer}>
        <Text style={styles.label}>ID do Projeto</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o ID do projeto aqui."
          keyboardType="default"
          value={projectId}
          onChangeText={(text) => setProjectId(text)}
        />

        <Text style={styles.label}>Slug do Projeto</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o Slug do projeto aqui."
          keyboardType="default"
          value={projectSlug}
          onChangeText={(text) => setProjectSlug(text)}
        />

        <Button
          style={styles.button}
          title="Buscar Projeto por ID"
          onPress={handleFindProjectById}
        />

        <Button
          style={styles.button}
          title="Buscar Projeto por Slug"
          onPress={handleFindProjectBySlug}
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
