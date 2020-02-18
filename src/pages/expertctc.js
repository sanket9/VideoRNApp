import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
var styles = require('../styles/style');
import Header from '../component/header';
import axios from 'axios';
// import footerBtn from "../component/footerBtn";

export default class expertctc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      consultationFee: '',
      ctc: '',
      enableCtc: true,
    };
  }

  renderHeader = () => {
    return (
      <Header
        showback={true}
        headerText="Become Expert"
        onPress={() => this.props.navigation.goBack()}
      />
    );
  };
  toggleSwitch = value => {
    this.setState({enableCtc: value});
    console.log('Switch 1 is: ' + value);
  };

  submitDetails = () => {
    console.log(this.state.ctc, this.state.consultationFee);

    this.props.navigation.navigate('BankDetails', {
      ctc: this.state.ctc,
      consultationFee: this.state.consultationFee,
    });
    // axios
    //   .post(
    //     'http://ec2-3-6-243-138.ap-south-1.compute.amazonaws.com:3000/api/mentor/bank-details/update',
    //     {
    //       mentorId: '5e42592bf7cc1610e12be2fe',
    //       ifscCode: 'ifsc2123',
    //       accountNumber: 'gdhghdhjhdj1212',
    //     },
    //   )
    //   .then(data => console.log(data, 'in submit details'))
    //   .catch(e => console.log(e, 'err'));
  };

  render() {
    let disableBtn = this.state.consultationFee == '' ? true : false;
    // console.log('tt', this.toolTip);

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{marginTop: '10%'}}>
          <View style={{paddingHorizontal: 15}}>
            <Text style={styles.contentMainText}>
              Find out how much you should charge for consultation
            </Text>
          </View>
          <View style={[styles.pickerStyle, {marginLeft: 15}]}>
            <Picker
              selectedValue={this.state.language}
              style={[{height: 50, width: 100, color: '#3280dc'}]}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="INR" value="java" />
              <Picker.Item label="Doller" value="js" />
            </Picker>
          </View>
          <View>
            <View style={{marginTop: '10%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 18,
                    fontWeight: '500',
                    fontStyle: 'normal',
                  }}>
                  Your last drawn CTC?
                </Text>
                <Switch
                  onValueChange={this.toggleSwitch}
                  value={this.state.enableCtc}
                />
              </View>
              {this.state.enableCtc && (
                <View
                  style={[
                    styles.searchSection,
                    {
                      marginTop: 10,
                      marginHorizontal: 15,
                    },
                  ]}>
                  <IonIcon
                    style={styles.searchIcon}
                    name="ios-search"
                    size={40}
                    color="#000"
                  />
                  <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder="0000000"
                    onChangeText={text => {
                      this.setState({
                        ctc: parseInt(text).toLocaleString('en-IN'),
                      });
                    }}
                    // underlineColorAndroid="transparent"
                  />
                  <Text style={styles.inputNote}>Per Annum</Text>
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              height: 200,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 18,
                  fontWeight: '500',
                  fontStyle: 'normal',
                  paddingHorizontal: 20,
                }}>
                Enter your consultation fee
              </Text>
            </View>
            <View
              style={[
                styles.searchSection,
                {
                  position: 'relative',
                  marginHorizontal: 15,
                },
              ]}>
              <IonIcon
                style={styles.searchIcon}
                name="ios-search"
                size={40}
                color="#000"
              />
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="000"
                onChangeText={text => {
                  this.setState({consultationFee: text});
                }}
                // underlineColorAndroid="transparent"
              />
              <Text style={styles.inputNote}>Per Annum</Text>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 110,
                left: '10%',
                padding: 10,
                backgroundColor: '#00cd9f',
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                width: '80%',
              }}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: '#00cd9f',
                  position: 'absolute',
                  top: -10,
                  transform: [{rotateX: '45deg'}, {rotateZ: '0.785398rad'}],
                }}
              />
              <Text style={{color: 'white'}}>
                Suggestive Hourly fee Rs 520 - Rs 750
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{padding: 20, alignItems: 'center'}}>
          <TouchableOpacity
            style={[styles.footerBtn, disableBtn ? styles.disabled : null]}
            // disabled={disableBtn}
            onPress={
              this.submitDetails
              // this.props.navigation.navigate('BankDetails')
            }>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
                color: '#ecf3fb',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
