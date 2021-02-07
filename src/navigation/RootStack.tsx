import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton  } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
import HomeScreen from '../screens/home/Home';
import UserListScreen from '../screens/userList/UserList';
import UserDetailsScreen from '../screens/userDetails/userDetails';
import { screenNames } from '../interfaces/screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const { HomeUser, Home, Users, userDetails } = screenNames;
const UserStack = () => (
  <Stack.Navigator initialRouteName={HomeUser} headerMode="screen">
    <Stack.Screen
      name={HomeUser}
      component={UserListScreen}
      options={({ navigation }) => ({
        title: 'Usuarios',
        headerShown: true,
        headerLeft: () => (
          <HeaderBackButton onPress={() => navigation.navigate(Home)} />
        )
      })}
    />
    <Stack.Screen name={userDetails} component={UserDetailsScreen} />
  </Stack.Navigator>
);
export default () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName={Home} headerMode="none" screenOptions={{ headerShown: true }}>
    <Stack.Screen name={Home} component={HomeScreen} options={{ title: 'Inicio' }} />
    <Stack.Screen name={Users} component={UserStack} options={{ headerShown: false,  title: 'Usuarios' }}   />
  </Drawer.Navigator>
</NavigationContainer>
)