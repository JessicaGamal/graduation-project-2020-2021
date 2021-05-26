import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Settings from '../Screens/Settings';
import Header from '../Shared/header';


const screens = {
    Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Settings' navigation={navigation} />
      }
    }
  },
}

const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 90 },
  }
});

export default SettingsStack;