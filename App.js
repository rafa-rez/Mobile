import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Tela_Inicial/Login";
import Register from "./src/components/Tela_Inicial/Register";
import OptionsAdm from "./src/components/Tela_Adm/Options_Adm";
import OptionsUser from "./src/components/Tela_User/Options_User";
import UserSubjects from "./src/components/Tela_User/Sub_User/userSubjects";
import MakeRequest from "./src/components/Tela_User/Sub_User/makeRequest";
import ProjectFind from "./src/components/Tela_Adm/Sub_Adm/projectFind";
import ProjectNew from "./src/components/Tela_Adm/Sub_Adm/projectNew";
import ProjectUpdate from "./src/components/Tela_Adm/Sub_Adm/projectUpdate";
import ProjectAll from "./src/components/Tela_Adm/Sub_Adm/projectAll";
import ProjectRemove from "./src/components/Tela_Adm/Sub_Adm/projectRemove";
import ProjectAdd from "./src/components/Tela_Adm/Sub_Adm/projectAdd";
import ProjectUserRelation from "./src/components/Tela_Adm/Sub_Adm/projectUserRelation";
import { AuthProvider } from "./src/components/Context/auth";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Options_Adm" component={OptionsAdm} />
          <Stack.Screen name="Options_User" component={OptionsUser} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="UserSubjects" component={UserSubjects} />
          <Stack.Screen name="MakeRequest" component={MakeRequest} />
          <Stack.Screen name="ProjectFind" component={ProjectFind} />
          <Stack.Screen name="ProjectUpdate" component={ProjectUpdate} />
          <Stack.Screen name="ProjectNew" component={ProjectNew} />
          <Stack.Screen name="ProjectAll" component={ProjectAll} />
          <Stack.Screen name="ProjectRemove" component={ProjectRemove} />
          <Stack.Screen name="ProjectAdd" component={ProjectAdd} />
          <Stack.Screen name="ProjectUser" component={ProjectUserRelation} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
