import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Info_user from '../pages/info_user';
import { Button } from 'react-native';

//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomRoutes(){
  return (
    <Stack.Navigator //remove a barra em cima
        screenOptions={{
          headerShown: false,
      }}
    >
      <Stack.Screen
        name="FormScreen"
        component={Info_user}
        
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