import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {auth} from './constant';
import SignInScreen from '../screens/auth/SignIn';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={auth.splash} component={SplashScreen} /> */}
      <Stack.Screen name={auth.singin} component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
