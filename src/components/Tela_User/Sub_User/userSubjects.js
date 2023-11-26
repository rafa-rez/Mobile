import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

export default function GetSubjects({ navigation }) {
  const { token } = useAuth();
  const { curso } = useAuth();

  const handleSubjects = () => {
    try {
      axios
        .get("http://192.168.1.15:3000/portifolio/subjects/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            curso: curso,
          },
        })
        .then((res) => {
          console.log(res.data);
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
        <Text>Matérias:</Text>
        <Button title="Enviar" onPress={handleSubjects} />
        <Button title="Voltar" onPress={handleGoToUserOptions} />
      </View>
    </View>
  );
}
