import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {app, auth} from './constant';
import HomeScreen from '../screens/app/Home';
import BottomTabs from './bottom-tabs';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={auth.splash} component={SplashScreen} /> */}
      <Stack.Screen name={app.home} component={BottomTabs} />
    </Stack.Navigator>
  );
}

export default AppStack;
