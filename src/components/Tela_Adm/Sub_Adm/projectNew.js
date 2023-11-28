import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function ProjectNew({ navigation }) {
  const { token } = useAuth();
  const [Materia, setMateria] = useState("");
  const [Professores, setProfessores] = useState("");
  const [Cursos, setCursos] = useState("");

  const handleNewProject = () => {
    try {
      const professoresArray = Professores.split(",").map((professor) =>
        professor.trim()
      );
      const cursosArray = Cursos.split(",").map((curso) => curso.trim());

      axios
        .post(
          "http://192.168.1.10:3000/portifolio/",
          {
            Materia: Materia,
            Professores: professoresArray,
            Cursos: cursosArray,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          alert("Projeto criado com sucesso.");
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
        <Text style={styles.label}>Matéria</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a Matéria aqui."
          keyboardType="default"
          value={Materia}
          onChangeText={(text) => setMateria(text)}
        />

        <Text style={styles.label}>Professores</Text>
        <TextInput
          style={styles.input}
          placeholder="Separe por vírgula (Maria, João, etc..)"
          keyboardType="default"
          value={Professores}
          onChangeText={(text) => setProfessores(text)}
        />

        <Text style={styles.label}>Cursos Abrangidos</Text>
        <TextInput
          style={styles.input}
          placeholder="Separe por vírgula (Ciencias_Matematicas, Engenharias, etc..)"
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
