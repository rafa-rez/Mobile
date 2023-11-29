import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function GetSubjects({ navigation }) {
  const { token } = useAuth();
  const { curso } = useAuth();
  const [subjectsData, setSubjectsData] = useState([]);

  const handleSubjects = () => {
    try {
      axios
        .get("http://192.168.1.5:3000/portifolio/subjects/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            curso: curso,
          },
        })
        .then((res) => {
          setSubjectsData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoToUserOptions = () => {
    navigation.navigate("Options_User");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Matérias:</Text>

      <ScrollView style={styles.scrollView}>
        {subjectsData.map((subject, index) => (
          <View key={index} style={styles.subjectContainer}>
            <Text style={styles.subjectTitle}>Matéria: {subject.Materia}</Text>
            <Text style={styles.professors}>
              Professores: {subject.Professores.join(", ")}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Buscar Matérias" onPress={handleSubjects} />
        <Button title="Voltar" onPress={handleGoToUserOptions} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollView: {
    maxHeight: "70%",
  },
  subjectContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  professors: {
    marginTop: 5,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
