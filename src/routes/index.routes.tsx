import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import Chatbot from "../pages/chatbot";

export default function Routes(){
    const Stack = createStackNavigator()
    return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFF'
        }
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={Login} 
      />
      <Stack.Screen   
        name="BottomRoutes"
        component={BottomRoutes}
      />
      <Stack.Screen   
        name="Chatbot"
        component={Chatbot}
      />

      
    </Stack.Navigator>
  );
}
