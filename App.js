import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreens/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignupScreens/LoginScreen';
import SignUpScreen from './src/screens/LoginSignupScreens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
 
}


