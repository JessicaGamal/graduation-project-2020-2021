import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer  } from 'react-navigation';
import {MaterialIcons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import ProfileStack from './ProfileStack';
import SlideBar from '../components/SlideBar';
import ToDoListStack from "./ToDoListStack";
import SettingsStack from "./SettingStack";
import LoginStack from "./LoginStack";


// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({

  Home: {
    screen: HomeStack,
    navigationOptions:{
      
      title: "Home",
      drawerIcon: ()=> <MaterialIcons name='home' size={28}  />
      
    }
   
  },

  Profile: {
    screen: ProfileStack,
    navigationOptions:{
      
      title: "Profiles",
      drawerIcon: ()=> <MaterialIcons name='person' size={28}  />
    }
    
  },

  



 
  About: {
    screen: AboutStack,
    navigationOptions:{
      
      title: "About",
      drawerIcon: ()=>  <MaterialIcons name='lightbulb' size={28}  />
      //drawerIcon: ()=> <MaterialIcons name="emoji-people"
    }
   
  },

  ToDoList: {
    screen: ToDoListStack,
    navigationOptions:{
      
      title: "ToDoList",
      drawerIcon: ()=> <MaterialIcons name='list' size={28}  />
     
    }
   
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions:{
      
      title: "Settings",
      drawerIcon: ()=> <MaterialIcons name='settings' size={28}  />
     
    }
   
  },
  Login: {
    screen: LoginStack,
    navigationOptions:{
      
      title: "Login",
      drawerIcon: ()=> <MaterialIcons name='login' size={28}  />
     
    }
   
  },
},
{
   contentComponent: props => <SlideBar {...props}/>,
   hideStatusBar: true,

   contentOptions:{
     activeBackgroundColor:"#05A7A4",
     activeTintColor: "#01706E",
     itemContainerStyle:{
       marginTop: 3,
       marginHorizontal: 10
     },
     itemStyle:
     {
       borderRadius: 10
     }
   }

   

   }


);

export default createAppContainer(RootDrawerNavigator);