import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import CalculateGPA from './Screens/CalculateGpa/CalculateGPA';
import CalcTotalHours from './Screens/CalcTotalHours';


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
            <Stack.Navigator screenOptions={{headerShown: false}}> 
              <Stack.Screen  name="LoginScreen" component={Login} />
              <Stack.Screen  name="SignupScreen" component={Signup} />
              <Stack.Screen  name="CalculateGpaScreen" component={CalculateGPA} />
              <Stack.Screen  name="CalcTotalHoursScreen" component={CalcTotalHours} />
            </Stack.Navigator>
          );
        }












