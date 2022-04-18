import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStack from './app-stack';
import AuthStack from './auth-stack';
import {root} from './constant';
import {navigationRef} from './root-navigation';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={root.authStack} component={AuthStack} />
        <Stack.Screen name={root.appStack} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
