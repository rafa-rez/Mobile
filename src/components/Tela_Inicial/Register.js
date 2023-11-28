import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

export default function Insertions({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    axios
      .post("http://192.168.1.10:3000/auth/register", {
        email: email,
        name: name,
        password: senha,
      })
      .then((res) => {
        navigation.navigate("Insertions");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoToLogin = () => {
    navigation.navigate("Insertions");
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

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha aqui."
          keyboardType="default"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Registrar-se"
            onPress={handleRegister}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Página de Login"
            onPress={handleGoToLogin}
          />
        </View>
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
  formContainer: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#fff",
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
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    width: "80%",
    alignSelf: "center",
  },
});
