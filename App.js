import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View,
   PermissionsAndroid, ActivityIndicator, ToastAndroid,TextInput } from 'react-native';
import Modal from "react-native-modal";

import { RNCamera } from 'react-native-camera';
var RNFS = require('react-native-fs');
import RNFetchBlob from 'react-native-fetch-blob'
// const dirs = RNFetchBlob.fs.dirs
import Video from 'react-native-video';
import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      recording: false,
      path: '',
      stopRecording: false,
      cameraType : 'front',
      playing: false,
      showScriptModal: false,
      scripttext: '',
      headermodal : false,
      headerText: 'Introduction Video',
    }
  }
  async requestCameraPermission() {
    try {
      let result = await PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      ])
      console.log("><><><<>>", result);
      
      if (result['android.permission.READ_EXTERNAL_STORAGE']
        && result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted') {
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
        mirror: true
      });
    } else {
      this.setState({
        cameraType: 'back',
        mirror: false
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

    ImagePicker.showImagePicker(options, (response) => {
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
        console.log(">>>>>>>source",response.path);
        
        this.setState({
          path: response.path,
          stopRecording: true
        });
      }
    });
  }
  async startRecording() {
    this.setState({ recording: true });
    // default to mp4 for android as codec is not set
    const { uri, codec = "mp4" } = await this.camera.recordAsync();
    console.log(uri);
    this.setState({
      path: uri,
    })
    // this.moveFiletoExtarnal(uri)
  }

  stopRecording() {
    this.setState({ recording: false, stopRecording: true });
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
    let resstatus = await this.requestCameraPermission()
    if (resstatus) {
      
      const split = url.split('/');
      const name = split.pop();
      const inbox = split.pop();
      const realPath = `${RNFS.TemporaryDirectoryPath}/${inbox}/${name}`;
      // console.log(RNFS.ExternalDirectoryPath);
      RNFS.exists(`/storage/emulated/0/VideoApp`).then((isExist)=>{
        if(isExist){
          RNFS.moveFile(realPath,`/storage/emulated/0/VideoApp/${(Date.now() / 1000)}.mp4`);
          ToastAndroid.show('File Saved.', ToastAndroid.SHORT);

        }else{
          RNFS.mkdir(`/storage/emulated/0/VideoApp`,).then((data)=>{
            RNFS.moveFile(realPath,`/storage/emulated/0/VideoApp/${(Date.now() / 1000)}.mp4`);
            ToastAndroid.show('File Saved.', ToastAndroid.SHORT);
          })
        }
      })
    }else{
      console.log(">>>>>>>>failed" );
      
    }
  }


  takReshoot() {
    RNFS.unlink(this.state.path);
    this.setState({
      recording: false,
      path: '',
      stopRecording: false,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstcontainer}>
          <TouchableOpacity><Text style={{color:'#fff', fontFamily: "Poppins-Regular", fontSize: 13}}>Save</Text></TouchableOpacity>
          <Text style={{color:'#fff', fontFamily: "Poppins-Regular",fontSize: 10}}>1/15</Text>
          <TouchableOpacity><Text style={{color:'#fff', fontFamily: "Poppins-Regular",fontSize: 13}}>Preview</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.textcontainer} onPress={() => this.setState({headermodal : true})}>
          <Text style={styles.headerText}>{this.state.headerText}</Text>
        </TouchableOpacity>
        {
          this.state.stopRecording ?
          ( <>
              {
                this.state.path != '' ? 
                <Video source={{uri: this.state.path}}   // Can be a URL or a local file.
                ref={(ref) => {
                  this.player = ref
                }}   
                controls={true} 
                paused={false}                                  
                style={styles.preview} />
                :   <ActivityIndicator size="small" color="#3280dc" />

              }



              <View style={styles.bottomcontainer}>
                <TouchableOpacity style={styles.leftbutton} onPress={() => this.takReshoot()}>
                    {/* <Text style={{ fontSize: 14 }}> Stop </Text> */}
                    <Icon name="refresh" size={30} color='#fff'/>
                    <Text style={styles.buttontext}>Reshoot</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.moveFiletoExtarnal(this.state.path)} style={styles.captureOk}>
                    {/* <Text style={{ fontSize: 14 }}> Start </Text> */}
                    <Icon name="check" size={40} color='#fff'/>
                  </TouchableOpacity>

              </View>
            </>
          )
          :
          (
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
              {
                !this.state.recording ? 
                  <TouchableOpacity style={styles.leftbutton} onPress={() => this.openGallery()}>
                  {/* <Text style={{ fontSize: 14 }}> Stop </Text> */}
                  <Icon name="image" size={30} color='#fff'/>
                  <Text style={styles.buttontext}>Upload</Text>
                </TouchableOpacity>
                : null
              }
              {this.state.recording ? 
               
                  <TouchableOpacity onPress={() => this.stopRecording()} style={styles.capture}>
                    {/* <Text style={{ fontSize: 14 }}> Stop </Text> */}
                    <Icon name="stop" size={40} color='red'/>
                  </TouchableOpacity>
                 
             
                : 
                <> 
                  <TouchableOpacity onPress={() => this.startRecording()} style={styles.capture}>
                    {/* <Text style={{ fontSize: 14 }}> Start </Text> */}
                    <Icon name="record" size={40} color='red'/>
                  </TouchableOpacity>
                  {
                    this.state.scripttext == '' ? 
                    <TouchableOpacity onPress={() => this.setState({showScriptModal: true})} style={styles.scriptclass}>
                      <Icon name="text-short" size={20} color='#f8e71c'/>
                      <Text style={{ fontSize: 12, color:'#f8e71c', fontFamily: "Poppins-Regular", fontSize: 12 }}> Add Script </Text>
                    </TouchableOpacity> : 
                    <View style={{flexDirection: 'column', width: '85%', backgroundColor: '#23232399', padding: 15 ,
                    borderWidth: 0, borderRadius: 8 ,position: 'absolute', bottom: 90,
                     overflow: 'scroll'}}>
                      <Text style={{ fontSize: 12, color:'#f8e71c', fontFamily:'Poppins-Bold', marginBottom: 5, fontSize: 12, }}>Script</Text>
                      <Text style={{ fontSize: 12, color:'#fff', fontFamily: "Poppins-Regular", fontSize: 12,}}>{this.state.scripttext}</Text>
                    </View>
                  }
                  
                </>
              }

              {
                !this.state.recording ? 
                  <TouchableOpacity onPress={() => this.changeCameraType()} style={styles.rightbutton}>
                  {/* <Text style={{ fontSize: 14 }}> Stop </Text> */}
                  <Ionicons name="ios-reverse-camera" size={30} color='#fff'/>
                  <Text style={styles.buttontext}>Flip</Text>
                </TouchableOpacity>
                : null
              }
            </View>
            </>
        
          )
          
        }


        <Modal isVisible={this.state.showScriptModal}>
          <View style={styles.modalContainer}>
              <View style={{flexDirection: "row", width: '100%', flexDirection: 'row',}}>
                <Text style={{color: '#000', fontSize: 24, fontFamily:'Poppins-Bold'}}>Write Script!</Text>
                <TouchableOpacity style={{flex: 1,alignItems: 'flex-end', justifyContent: 'flex-end'}} onPress={() => this.setState({showScriptModal : false})}>
                  <Icon name="close" size={30} color='#000'/>
                </TouchableOpacity>
              </View>
              <View style={{width: '100%'}}>
              <TextInput
                multiline={true}
                numberOfLines={8}
                placeholder="Write your answer if you need a script before makeing video"
                placeholderTextColor="#adadad"
                onChangeText={(text) => this.setState({scripttext: text})}
                value={this.state.scripttext}/>
              </View>
            <TouchableOpacity style={[styles.scriptVideobutton]} onPress={() => this.setState({showScriptModal : false})}>
              <Icon name="video" size={25} color='#fff'/>
              <Text style={{color: '#fff', marginTop: 2, marginLeft: 15, fontFamily:'Poppins-Bold', fontSize: 16,}}>Record with script</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal backdropOpacity={0.2} isVisible={this.state.headermodal}>
          <View style={styles.questionmodal}>
          <TextInput
                style={{color: '#fff'}}
                placeholder="Add your question"
                placeholderTextColor="#adadad"
                onChangeText={(text) => this.setState({headerText: text})}
                value={this.state.headerText}/>
            <View style={{alignItems: 'center', marginTop: '30%', marginLeft: -25}}>
                <TouchableOpacity style={styles.questionmodalbtn} onPress={() => this.setState({headermodal : false})}>
                  <Icon name="video" size={25} color='#fff'/>
                  <Text style={{color: '#fff', marginTop: 2, marginLeft: 15, fontFamily:'Poppins-Bold', fontSize: 16,}}>Record Video</Text>
                </TouchableOpacity>
              </View>    
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  firstcontainer: {
    flexDirection: 'row', justifyContent:'space-between', margin: 15, paddingVertical: 10
  },
  textcontainer: {
    margin: 15, paddingVertical: 10,  fontFamily: "Poppins-Regular", 
  },
  bottomcontainer: {
    flex: 0, flexDirection: 'row', justifyContent: 'center', 
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '5%',
    overflow: 'hidden',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  capture: {
    position: 'absolute',
    // backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ff2650',
    alignSelf: 'center',
    margin: 20,
    bottom: 10
  },
  captureOk :{
    position: 'absolute',
    backgroundColor: '#3280dc',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#3280dc',
    alignSelf: 'center',
    margin: 20,
    bottom: 10
  },
  scriptclass: {
    position: 'absolute',
    backgroundColor: '#11141c',
    borderRadius: 50,
    borderWidth: 4,
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderColor: '#11141c',
    alignSelf: 'center',
    margin: 20,
    bottom: 80,
  },
  rightbutton : {
    flexDirection: 'column', position: 'absolute', bottom: 20, right: '20%'
  },
  leftbutton : {
    flexDirection: 'column', position: 'absolute', bottom: 20, left: '20%'
  },
  buttontext: {
    fontFamily: "Poppins-Bold",
    fontSize: 10, fontStyle: 'normal',color:'#fff', textAlign:'center'
  },
  scriptVideobutton : {
    flex: 0, flexDirection: 'row', padding: 3, borderRadius: 8, justifyContent: 'center', alignItems: 'center',
              width:'100%', backgroundColor: '#3280dc', height:48, marginBottom: 15
  },
  modalContainer: {
    flex: 0, 
            backgroundColor: '#fff', 
            borderRadius: 15, padding: 20
  },
  questionmodal: {
    fontFamily: "Poppins-Regular",
    flex: 1, marginTop: '20%', backgroundColor: '#000', width: '120%', marginLeft: -20, padding: 30, marginBottom: -50
  },
  questionmodalbtn : {
    flexDirection: 'row', padding: 3, borderRadius: 8, justifyContent: 'center', alignItems: 'center',
                  width:'80%', backgroundColor: '#3280dc', height:48, 
  },
  headerText: {
    fontFamily: "Poppins-Bold", fontSize: 18,
            fontStyle: "normal",
            letterSpacing: 0,
            color: "#ffffff",
  },
  disabled: {
    opacity: 0.8
  }
});