import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home';
import Header from '../Shared/header';
import Post from '../Screens/Post';
import  CalculateGPA from '../Screens/CalculateGPA';
import Expert from '../Screens/Expert';
import Department from '../Screens/Department'
import Cs from '../Screens/Cs';
import  Questions from '../Screens/Questions';
import Courses from '../Screens/Courses';
import  CalcTotalHours from '../Screens/CalcTotalHours';
import  Ai from '../Screens/Ai';
import  Gp from '../Screens/Gp';
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Home' navigation={navigation} />
        
      }
    }
  },
 
  Post: {
    screen: Post,
    navigationOptions: {
      title: 'Posts',
    } 
  },

  Department: {
    screen: Department,
    navigationOptions: {
      title: 'Department',
    } 
  },
 Cs: {
    screen: Cs,
    navigationOptions: {
      title: 'Computer Science',
    }  
  },
  CalculateGPA:{
    screen: CalculateGPA,
    navigationOptions: {
      title: 'CalculateGPA',
    }  
  },
  Expert:{
    screen: Expert,
    navigationOptions: {
      title: 'Expert',
    }  
  },
  Questions:{
    screen:  Questions,
    navigationOptions: {
      title: ' Questions',
    }  
  },
  Courses: {
    screen:  Courses,
    navigationOptions: {
      title: 'Courses',
    }  
  },
 Ai: {
    screen:  Ai,
    navigationOptions: {
      title: 'Ai',
    }  
  },
  Gp: {
    screen:  Gp,
    navigationOptions: {
      title: 'Gp',
    }  
  },
  CalcTotalHours: {
    screen:  CalcTotalHours,
    navigationOptions: {
      title: ' CalcTotalHours',
    }  
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#333',
    headerStyle: { backgroundColor: '#D6D6D6', height: 90 }
  }
});

export default HomeStack;