import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
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
          "http://192.168.1.4:3000/portifolio/request",
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
          console.log("Deu certo!");
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
        <Text>Curso Desejado</Text>
        <TextInput
          placeholder="Insira o curso em que deseja ser cadastrado."
          keyboardType="default"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Button title="Enviar" onPress={handleRequest} />
        <Button title="Voltar" onPress={handleGoToUserOptions} />
      </View>
    </View>
  );
}
