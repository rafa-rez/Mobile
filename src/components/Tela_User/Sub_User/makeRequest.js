import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function MakeRequest({ navigation }) {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const { token } = useAuth();

  const handleRequest = () => {
    try {
      axios
        .post(
          "http://192.168.1.15:3000/portifolio/request",
          {
            requisitor: name,
            email: email,
            description: description,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          alert("Requerimento para o curso em questão realizado com sucesso.");
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
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu Nome aqui."
          keyboardType="default"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu Email aqui."
          keyboardType="default"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Curso Desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o curso em que deseja ser cadastrado."
          keyboardType="default"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <Button style={styles.button} title="Enviar" onPress={handleRequest} />
        <Button
          style={styles.button}
          title="Voltar"
          onPress={handleGoToUserOptions}
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
