import { StatusBar,  } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/LoginScreen';
import SignUp from './screens/SignUp';
import WelcomeScreen from './screens/WelcomeScreen';
import ForgotScreen from './screens/ForgotScreen';
import VerifyScreen from './screens/VerifyScreen';
import NewEmailScreen from './screens/NewEmailScreen';
import LoginScreen from './screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    regular:require('./assets/fonts/Poppins-Regular.ttf'),
    light:require('./assets/fonts/Poppins-Light.ttf'),
    bold:require('./assets/fonts/Poppins-Bold.ttf'),
    medium:require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold:require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold:require('./assets/fonts/Poppins-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async()=> {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name='welcome'
        component={WelcomeScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='login'
        component={LoginScreen}
        options={{headerShown:false}}
        />
       <Stack.Screen
        name='forgot'
        component={ForgotScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='verify'
        component={VerifyScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='newEmail'
        component={NewEmailScreen}
        options={{headerShown:false}}
        />
        

        <Stack.Screen
        name='Sign up'
        component={SignUp}
        options={{headerShown:false}}
        />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


