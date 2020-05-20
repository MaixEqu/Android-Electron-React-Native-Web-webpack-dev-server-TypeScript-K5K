import * as React from "react";
import { render } from "react-dom";
import { View, Text, StyleSheet, } from 'react-native';

import { ccc, LL } from './libs/mxlib';
import { fsReadDir, fileReadElec, fileReadAxios } from './axiosfs';
import { isELEC } from './index';

const cc=console.log;

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    const ver = 'r02, K5J';
    ccc(ver + ', from Hello2.render() ...')

    // read a dir...
    const arrDir = fsReadDir();
    ccc('arrDir:' + LL + arrDir.join(LL))

    const platform = (isELEC) ? 'Electron' : 'Web';

    // read a file FS...
    let arrFile = [];
    if (isELEC) {
      arrFile = fileReadElec();
      ccc('arrFile len = ' + arrFile.length)
      ccc('arrFile:' + LL + arrFile.join(LL))
    }
    // read a file AXIOS...
    fileReadAxios();
    ccc(ver)

    return (
      <View style={styles.ViewS}>
        <h3>{ver} (tag h3)</h3>
        <p>Hello from:</p>
        <p> 1. {this.props.compiler}</p>
        <p> 2. {this.props.framework}</p>
        <p> 3. {platform}</p>
        <Text>4. Android ??? </Text>
        <Text style={{color: 'green'}}>RNW component Text here</Text>
      </View>
    )
  }
}

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