import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import BelajarTextInput from './components/BelajarTextInput';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BelajarFlatList from './components/BelajarFlatList';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator()


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
            headerShown: false
          }}
        >
          <Stack.Screen 
            name='BelajarTextInput'
            component={BelajarTextInput}
            options={{ title: "Sign In",}}
          />
          <Stack.Screen 
            name='BelajarFlatList'
            component={BelajarFlatList}
            options={{ title: "Flat List" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor='#3a0ca3' translucent={false} />
    </>
  );
}
