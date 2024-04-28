import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import BelajarTextInput from "./components/BelajarTextInput";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BelajarFlatList from "./components/BelajarFlatList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Component01, Component02, Component03, Component04 } from "./components/all";
import { Image, Text, View } from "react-native";
import Tugas1 from "./tugas/Tugas1";
import Tugas2 from "./tugas/Tugas2";
import Tugas3 from "./tugas/Tugas3";
import { Tugas4 } from "./tugas/Tugas4";
import { WidgetNavigationDrawer } from './src/lib/widgets';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const GroupFirstStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Tugas1' component={Tugas1} />
    </Stack.Navigator>
  )
}

const GroupSecondStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Tugas2' component={Tugas2} />
    </Stack.Navigator>
  )
}

const GroupThridStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Tugas3' component={Tugas3} />
    </Stack.Navigator>
  )
}

const GroupFourthStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Tugas4' component={Tugas4} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: 'red',
            drawerItemStyle: {marginVertical: 5}
          }}
          drawerContent={(props) => <WidgetNavigationDrawer {...props} /> }
        >
          <Drawer.Screen
            name='GroupFirstStackScreen'
            options={{drawerLabel: (props) => <View style={{ flexDirection: "row", gap: 8, alignItems: 'center' }}>
              <Text style={{color: props.color}}>Tugas 1</Text>
            </View>, title: 'Tugas1'}}
            component={GroupFirstStackScreen}  
          />
          <Drawer.Screen
            name='GroupSecondStackScreen'
            options={{drawerLabel: (props) => <View style={{ flexDirection: "row", gap: 8, alignItems: 'center' }}>
            <Text style={{color: props.color}}>Tugas 2</Text>
          </View>, title: 'Tugas2'}}
            component={GroupSecondStackScreen}  
          />

          <Drawer.Screen
            name='GroupThridStackScreen'
            options={{drawerLabel: (props) => <View style={{ flexDirection: "row", gap: 8, alignItems: 'center' }}>
            <Text style={{color: props.color}}>Tugas 3</Text>
          </View>, title: 'Tugas3'}}
            component={GroupThridStackScreen}  
          />
          <Drawer.Screen
            name='GroupFourthStackScreen'
            options={{drawerLabel: (props) => <View style={{ flexDirection: "row", gap: 8, alignItems: 'center' }}>
            <Text style={{color: props.color}}>Tugas 4</Text>
          </View>, title: 'Tugas4'}}
            component={GroupFourthStackScreen}  
          />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar hidden={true} style="light" backgroundColor="#3a0ca3" translucent={true} />
    </>
  );
}

