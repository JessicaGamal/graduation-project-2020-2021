 import {createStackNavigator, createAppContainer} from 'React-navigation';
 import Login from '../Screens/Login';
 import Signup from './Screens/Signup';



 const GpNavigator = createStackNavigator({

         SignupScreen : Signup,
         LoginScreen : Login

 });

 export default createAppContainer (GpNavigator);