import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  ActivityIndicator,
  ToastAndroid,
  TextInput,
  Dimensions,
} from 'react-native';

import {RNCamera} from 'react-native-camera';
var RNFS = require('react-native-fs');
import Modal from 'react-native-modal';

import Video from 'react-native-video';
import ImagePicker from 'react-native-image-picker';
var styles = require('../styles/style');

import ScriptText from '../component/scriptText';
import CameraHeader from '../component/cameraHeader';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Gallery,
  Flip,
  ScriptIcon,
  Record,
  StopRecording,
  RecordingDone,
  VideoIcon,
  Reshoot,
  Play,
} from '../component/svg';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class camera extends Component {
  constructor() {
    super();
    this.state = {
      recording: false,
      path: '',
      stopRecording: false,
      cameraType: 'front',
      playing: false,
      showScriptModal: false,
      scripttext: '',
      headermodal: false,
      headerText: '',
      params: null,
    };
  }
  async requestCameraPermission() {
    try {
      let result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      console.log('><><><<>>', result);

      if (
        result['android.permission.READ_EXTERNAL_STORAGE'] &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        // console.log("both accepted........");
        return true;
      }
    } catch (err) {
      console.warn(err);
    }
  }

  changeCameraType() {
    if (this.state.cameraType === 'back') {
      this.setState({
        cameraType: 'front',
        mirror: true,
      });
    } else {
      this.setState({
        cameraType: 'back',
        mirror: false,
      });
    }
  }

  openGallery() {
    const options = {
      title: 'Select Avatar',
      mediaType: 'video',
      takePhotoButtonTitle: null,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log('>>>>>>>source', response.path);

        this.setState({
          path: response.path,
          stopRecording: true,
        });
      }
    });
  }
  async startRecording() {
    this.setState({recording: true});
    // default to mp4 for android as codec is not set
    const {uri, codec = 'mp4'} = await this.camera.recordAsync();
    console.log(uri);
    this.setState({
      path: uri,
    });
    // this.moveFiletoExtarnal(uri)
  }

  stopRecording() {
    this.setState({recording: false, stopRecording: true});
    this.camera.stopRecording();
  }

  handlePlayPause() {
    // // If playing, pause and show controls immediately.
    // if (this.state.playing) {
    //   this.setState({playing: false});
    //   return;
    // }
    // this.setState({ playing: true});
    // setTimeout(() => setState(s => ({...s, showControls: false})), 2000);
  }

  async moveFiletoExtarnal(url) {
    let resstatus = await this.requestCameraPermission();
    let value = await AsyncStorage.getItem('@local_indx');
    value = parseInt(value);
    if (resstatus) {
      const split = url.split('/');
      const name = split.pop();
      const inbox = split.pop();
      const realPath = `${RNFS.TemporaryDirectoryPath}/${inbox}/${name}`;
      // console.log(RNFS.ExternalDirectoryPath);
      RNFS.exists(`/storage/emulated/0/VideoApp`).then(async isExist => {
        if (isExist) {
          RNFS.moveFile(
            realPath,
            `/storage/emulated/0/VideoApp/${Date.now() / 1000}.mp4`,
          );
          ToastAndroid.show('File Saved.', ToastAndroid.SHORT);
          await AsyncStorage.setItem('@local_indx', (value + 1).toString());
          this.props.navigation.navigate('List');
        } else {
          RNFS.mkdir(`/storage/emulated/0/VideoApp`).then(async data => {
            RNFS.moveFile(
              realPath,
              `/storage/emulated/0/VideoApp/${Date.now() / 1000}.mp4`,
            );
            ToastAndroid.show('File Saved.', ToastAndroid.SHORT);
            await AsyncStorage.setItem('@local_indx', (value + 1).toString());
            this.props.navigation.navigate('List');
          });
        }
      });
    } else {
      console.log('>>>>>>>>failed');
    }
  }

  takReshoot() {
    RNFS.unlink(this.state.path);
    this.setState({
      recording: false,
      path: '',
      stopRecording: false,
    });
  }

  componentDidMount() {
    const {route} = this.props;
    let data = JSON.parse(route.params.data);

    if (data.id <= 9) {
      this.setState({
        headerText: data.title,
        scripttext: data.scriptText,
      });
    } else if (data.id > 9) {
      this.setState({
        headermodal: true,
        scripttext: data.scriptText,
      });
    }
  }

  cameraHeader = () => {
    return <CameraHeader number="1/17" />;
  };

  stopRecordingContent = () => {
    return (
      <View style={styles.bottomcontainer}>
        <TouchableOpacity
          style={styles.leftbutton}
          onPress={() => this.takReshoot()}>
          <View style={{alignItems: 'center'}}>
            <Reshoot />
          </View>
          <Text style={styles.buttontext}>Reshoot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.moveFiletoExtarnal(this.state.path)}
          style={styles.captureOk}>
          <View>
            <RecordingDone />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  scriptAddBtn = () => {
    <TouchableOpacity
      onPress={() => this.setState({showScriptModal: true})}
      style={styles.scriptclass}>
      {/* <Icon name="text-short" size={20} color='#f8e71c'/> */}
      <View style={{justifyContent: 'center'}}>
        <ScriptIcon />
      </View>
      <Text
        style={{
          fontSize: 12,
          color: '#f8e71c',
          fontFamily: 'Poppins-Regular',
          fontSize: 12,
        }}>
        {' '}
        Add Script{' '}
      </Text>
    </TouchableOpacity>;
  };

  scriptText = () => {
    return <ScriptText scripttext={this.state.scripttext} />;
  };
  render() {
    return (
      <View style={localstyles.container}>
        {this.cameraHeader()}
        <TouchableOpacity
          style={styles.textcontainer}
          onPress={() => this.setState({headermodal: true})}>
          <Text style={styles.headerText}>{this.state.headerText}</Text>
        </TouchableOpacity>
        {this.state.stopRecording ? (
          <>
            {this.state.path != '' ? (
              <Video
                source={{uri: this.state.path}} // Can be a URL or a local file.
                ref={ref => {
                  this.player = ref;
                }}
                controls={false}
                paused={false}
                style={styles.preview}
              />
            ) : (
              <ActivityIndicator size="small" color="#3280dc" />
            )}

            {/* <TouchableOpacity style={{position: 'absolute',top: '50%',left: '45%', opacity: 7}}>
                  <Play />
              </TouchableOpacity> */}

            {this.stopRecording()}
          </>
        ) : (
          <>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              type={this.state.cameraType}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              captureAudio={true}
              flashMode={RNCamera.Constants.FlashMode.off}
            />

            <View style={styles.bottomcontainer}>
              {!this.state.recording ? (
                <TouchableOpacity
                  style={styles.leftbutton}
                  onPress={() => this.openGallery()}>
                  <View style={{alignItems: 'center'}}>
                    <Gallery />
                  </View>
                  <Text style={styles.buttontext}>Upload</Text>
                </TouchableOpacity>
              ) : null}
              {this.state.recording ? (
                <TouchableOpacity
                  onPress={() => this.stopRecording()}
                  style={[styles.capture]}>
                  <View>
                    <StopRecording />
                  </View>
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => this.startRecording()}
                    style={styles.capture}>
                    <View>
                      <Record />
                    </View>
                  </TouchableOpacity>
                  {this.state.scripttext == ''
                    ? this.scriptAddBtn()
                    : this.scriptText()}
                </>
              )}

              {!this.state.recording ? (
                <TouchableOpacity
                  onPress={() => this.changeCameraType()}
                  style={styles.rightbutton}>
                  {/* <Text style={{ fontSize: 14 }}> Stop </Text> */}
                  <View>
                    <Flip />
                  </View>
                  {/* <Ionicons name="ios-reverse-camera" size={30} color='#fff'/> */}
                  <Text style={styles.buttontext}>Flip</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </>
        )}

        <Modal isVisible={this.state.showScriptModal}>
          <View style={styles.modalContainer}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 24,
                  fontFamily: 'Poppins-Bold',
                }}>
                Write Script!
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
                onPress={() => this.setState({showScriptModal: false})}>
                <Icon name="close" size={30} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={{width: '100%'}}>
              <TextInput
                multiline={true}
                numberOfLines={8}
                placeholder="Write your answer if you need a script before makeing video"
                placeholderTextColor="#adadad"
                onChangeText={text => this.setState({scripttext: text})}
                value={this.state.scripttext}
              />
            </View>
            <TouchableOpacity
              style={[styles.scriptVideobutton]}
              onPress={() => this.setState({showScriptModal: false})}>
              {/* <Icon name="video" size={25} color='#fff'/> */}
              <View style={{zIndex: 999}}>
                <VideoIcon />
              </View>
              <Text
                style={{
                  color: '#fff',
                  marginTop: 2,
                  marginLeft: 15,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 16,
                }}>
                Record with script
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal backdropOpacity={0.2} isVisible={this.state.headermodal}>
          <View style={styles.questionmodal}>
            <TextInput
              style={{color: '#fff'}}
              placeholder="Add your question"
              placeholderTextColor="#adadad"
              onChangeText={text => this.setState({headerText: text})}
              value={this.state.headerText}
            />
            <View
              style={{alignItems: 'center', marginTop: '30%', marginLeft: -25}}>
              <TouchableOpacity
                style={styles.questionmodalbtn}
                onPress={() => this.setState({headermodal: false})}>
                {/* <Icon name="video" size={25} color='#fff'/> */}
                <View style={{zIndex: 999}}>
                  <VideoIcon />
                </View>
                <Text
                  style={{
                    color: '#fff',
                    marginTop: 2,
                    marginLeft: 15,
                    fontFamily: 'Poppins-Bold',
                    fontSize: 16,
                  }}>
                  Record Video
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

  disabled: {
    opacity: 0.8,
  },
});
