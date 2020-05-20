import * as React from 'react';
import { StyleSheet, View, Text, Platform, } from 'react-native';

import { ccc, T, } from './libs/mxlib'

const _OS = Platform.OS;
const isWEB = (_OS === 'web');
let isELEC = false;

const cc=console.log;
const ver = 'r10, K5K. And, Elec, Web are OK and Hot reloading.';

export const App = () => {
  if (isWEB) {
    isELEC = (navigator.userAgent.toLowerCase().search('electron') >=0);
  }
  ccc(ver)
  return (
    <View style={styles.ViewS}>
      <Text>{ver}</Text>
      <Text>Time: {T()}</Text>
      <Text>App.txt in ./src for Android, Electron, Web (HMR)</Text>
      <Text style={{color: 'green'}}>RNW component Text here</Text>
      <Text>Platform.OS: {_OS}</Text>
      <Text>Electron: {isELEC ? 'YES' : 'no'}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  ViewS: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 0,
    justifyContent: 'flex-start',
    backgroundColor: 'cyan', //'darkblue', //'#1f2e33',
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 0,
  },
})
