import React from 'react';
import {View, Text} from 'react-native';
var styles = require('../styles/style');

const scriptText = props => {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '85%',
        backgroundColor: '#23232399',
        padding: 15,
        borderWidth: 0,
        borderRadius: 8,
        position: 'absolute',
        bottom: 110,
        overflow: 'scroll',
      }}>
      <Text
        style={{
          fontSize: 12,
          color: '#f8e71c',
          fontFamily: 'Poppins-Bold',
          marginBottom: 5,
          fontSize: 12,
        }}>
        Script
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: '#fff',
          fontFamily: 'Poppins-Regular',
          fontSize: 12,
        }}>
        {props.scripttext}
      </Text>
    </View>
  );
};

export default scriptText;
