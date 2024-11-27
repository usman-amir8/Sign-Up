















import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};


const TabNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact Us" component={Contact} />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home (Tabs)" component={TabNavigator} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact Us" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;












