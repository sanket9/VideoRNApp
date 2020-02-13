import React, { Component } from 'react'
// import { AppRegistry, StyleSheet, Text, TouchableOpacity, View,
//    PermissionsAndroid, ActivityIndicator, ToastAndroid,TextInput } from 'react-native';
// import Modal from "react-native-modal";

// import { RNCamera } from 'react-native-camera';
// var RNFS = require('react-native-fs');
// import RNFetchBlob from 'react-native-fetch-blob'
// // const dirs = RNFetchBlob.fs.dirs
// import Video from 'react-native-video';
// import ImagePicker from 'react-native-image-picker';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Camera from './src/pages/camera'

export default class App extends Component {
  constructor() {
    super()
    
  }
  
  render() {
    return (
      <Camera/>
    )
  }
}
