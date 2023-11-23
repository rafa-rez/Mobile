import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";

export default function Insertions({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    axios
      .post("http://192.168.1.4:3000/auth/register", {
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
    <View>
      <View>
        <Text>Nome</Text>
        <TextInput
          placeholder="Insira seu Nome aqui."
          keyboardType="default"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
        <Button title="Registrar-se" onPress={handleRegister} />
        <Button title="Página de Login" onPress={handleGoToLogin} />
      </View>
    </View>
  );
}
