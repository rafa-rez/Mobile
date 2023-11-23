import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function OptionsUser({ navigation }) {
  const handleGoToSubjects = () => {
    navigation.navigate("UserSubjects");
  };
  const handleGoToRequest = () => {
    navigation.navigate("MakeRequest");
  };
  return (
    <View>
      <Text>Esta é a página dos usuarios!</Text>
      <Button title="Acessar suas Matérias" onPress={handleGoToSubjects} />
      <Button title="Cadastrar Curso" onPress={handleGoToRequest} />
    </View>
  );
}
