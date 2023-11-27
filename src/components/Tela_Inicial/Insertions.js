import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import useAuth from "../Hook/useAuth";

export default function Insertions({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState({});

  const { token, setToken } = useAuth();
  const { curso, setCurso } = useAuth();
  const { id, setId } = useAuth();

  const handleLogin = () => {
    axios
      .post("http://192.168.1.10:3000/auth/login", {
        email: email,
        password: senha,
      })
      .then((res) => {
        const newUser = {
          nome: res.data.nome,
          token: res.data.token,
          id: res.data.id,
          curso: res.data.curso,
        };
        setUser(newUser);
        setToken(newUser.token);
        setCurso(newUser.curso);
        setId(newUser.id);

        if (res.data.administrador) {
          navigation.navigate("Options_Adm");
        } else {
          navigation.navigate("Options_User");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
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
          <Button style={styles.button} title="Logar" onPress={handleLogin} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Registrar-se"
            onPress={handleGoToRegister}
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
