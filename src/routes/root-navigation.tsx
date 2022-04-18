import React from 'react';
import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';
import {app, root} from './constant';

export const navigationRef =
  React.createRef<NavigationContainerRef<ParamListBase>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function reset() {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: root.appStack}],
  });
}
