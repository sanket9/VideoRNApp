import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
var styles = require('../styles/style');

const cameraHeader = props => {
  return (
    <View style={styles.firstcontainer}>
      <Text
        style={{
          color: '#fff',
          fontFamily: 'Poppins-Regular',
          fontSize: 10,
        }}>
        {props.number}
      </Text>
      <TouchableOpacity onPress={() => props.onPress}>
        <Text
          style={{
            color: '#fff',
            fontFamily: 'Poppins-Regular',
            fontSize: 13,
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default cameraHeader;
