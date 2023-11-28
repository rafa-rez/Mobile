import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function ProjectUserRelation({ navigation }) {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjectsUser();
  }, []);

  const fetchProjectsUser = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.10:3000/portifolio/relations/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Erro ao obter projetos do servidor:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.projectContainer}>
      <Text>Nome: {item.name}</Text>
      <Text>Curso: {item.Curso}</Text>
      <Text>Id: {item._id}</Text>
    </View>
  );

  const handleGoToAdmOptions = () => {
    navigation.navigate("Options_Adm");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todos os Projetos:</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
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
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  projectContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  button: {
    marginTop: 20,
  },
});
