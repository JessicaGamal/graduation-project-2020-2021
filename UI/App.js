import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login';
import Signup from './Screens/Signup';


export default class App extends React.Component {

  render(){
    return (
      <NavigationContainer>
      <MyStack />
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();

function MyStack() {
          return (
            <Stack.Navigator> 
              <Stack.Screen name="LoginScreen" component={Login} />
              <Stack.Screen name="SignupScreen" component={Signup} />
            </Stack.Navigator>
          );
        }












