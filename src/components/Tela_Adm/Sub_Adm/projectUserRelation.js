import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import axios from "axios";
import useAuth from "../../Hook/useAuth";
import Card from "../../Cards/Cards";

export default function ProjectUserRelation({ navigation }) {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    fetchProjectsUser();
  }, []);

  const fetchProjectsUser = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.5:3000/portifolio/relations/users",
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

  const renderItem = ({ item, index }) => (
    <Card
      name={item.name}
      Curso={item.Curso}
      _id={item._id}
      index={index}
      activeIndex={activeBanner}
    />
  );

  const handleGoToAdmOptions = () => {
    navigation.navigate("Options_Adm");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todos os Users e seus Cursos:</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const scrollX = event.nativeEvent.contentOffset.x;
          const index = Math.round(scrollX / Dimensions.get("window").width);
          setActiveBanner(index);
        }}
        contentContainerStyle={styles.flatlistContent}
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
  button: {
    marginTop: 20,
  },
  flatlistContent: {
    marginTop: 140,
  },
});
