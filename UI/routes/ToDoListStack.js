import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ToDoList from '../Screens/ToDoList';
import Header from '../Shared/header';


const screens = {
  ToDoList: {
    screen: ToDoList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='ToDoList' navigation={navigation} />
      }
    }
  },
}

const ToDoListStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 90 },
  }
});

export default ToDoListStack;