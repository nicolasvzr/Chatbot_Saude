import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function Chatbot (){
    return(
    <Stack.Navigator //remove a barra em cima
        screenOptions={{
          headerShown: false,
      }}
    >
      <Stack.Screen
        name="ChatQuestion"
        component={Chatbot}
        
        />
      {/* <Tab.Screen
            name="Me informe seus dados" 
            component={info_user} /> */}
      {/* <Tab.Screen 
            name="" 
            component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}