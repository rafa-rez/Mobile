import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Insertions from "./src/components/Tela_Inicial/Insertions";
import Register from "./src/components/Tela_Inicial/Register";
import OptionsAdm from "./src/components/Tela_Adm/Options_Adm";
import OptionsUser from "./src/components/Tela_User/Options_User";
import UserSubjects from "./src/components/Tela_User/Sub_User/userSubjects";
import MakeRequest from "./src/components/Tela_User/Sub_User/makeRequest";
import { AuthProvider } from "./src/components/Context/auth";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Insertions">
          <Stack.Screen name="Insertions" component={Insertions} />
          <Stack.Screen name="Options_Adm" component={OptionsAdm} />
          <Stack.Screen name="Options_User" component={OptionsUser} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="UserSubjects" component={UserSubjects} />
          <Stack.Screen name="MakeRequest" component={MakeRequest} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
