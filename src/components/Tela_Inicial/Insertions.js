import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";
import useAuth from "../Hook/useAuth";

export default function Insertions({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState({});
  const { token, setToken } = useAuth();

  const handleLogin = () => {
    axios
      .post("http://192.168.1.4:3000/auth/login", {
        email: email,
        password: senha,
      })
      .then((res) => {
        const newUser = {
          nome: res.data.nome,
          token: res.data.token,
          //administrador: res.data.administrador,
          id: res.data.id,
        };
        setUser(newUser);
        setToken(newUser.token);
        console.log(res.data);
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
    <View>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Insira seu Email aqui."
          keyboardType="default"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text> Senha </Text>
        <TextInput
          placeholder="Insira sua senha aqui."
          keyboardType="default"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <Button title="Logar" onPress={handleLogin} />
        <Button title="Registrar-se" onPress={handleGoToRegister} />
      </View>
    </View>
  );
}
