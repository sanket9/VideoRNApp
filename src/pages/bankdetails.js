import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

var styles = require('../styles/style');
import Header from '../component/header';

export default class bankdetails extends Component {
  constructor() {
    super();
    this.state = {
      ifsc: '',
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
  render() {
    let disableBtn = this.state.ifsc == '' ? true : false;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{marginTop: '10%', paddingHorizontal: 20}}>
          <View>
            <Text style={styles.contentMainText}>Give your Bank details</Text>
          </View>
          <View>
            <View style={{marginTop: '10%'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 18,
                    fontWeight: '500',
                    fontStyle: 'normal',
                    color: '#666666',
                  }}>
                  Account Number
                </Text>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <TextInputMask
                    type={'credit-card'}
                    options={{
                      obfuscated: false,
                      issuer: 'visa-or-mastercard',
                    }}
                    placeholder=".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . "
                    style={[styles.inputMask]}
                    value={this.state.creditCard}
                    onChangeText={text => {
                      this.setState({
                        creditCard: text,
                      });
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: '10%'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 18,
                    fontWeight: '500',
                    fontStyle: 'normal',
                    color: '#666666',
                  }}>
                  Bank IFSC Code
                </Text>
              </View>
              <View>
                {/* <IonIcon style={styles.searchIcon} name="ios-search" size={40} color="#000"/> */}
                <TextInput
                  style={[styles.input]}
                  placeholder=".  .  .  .  .  .  .  .  . "
                  onChangeText={text => {
                    this.setState({ifsc: text});
                  }}
                  // underlineColorAndroid="transparent"
                />
                {/* <Text style={styles.inputNote}>Per Annum</Text> */}
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{padding: 20, alignItems: 'center'}}>
          <TouchableOpacity
            style={[styles.footerBtn, disableBtn ? styles.disabled : null]}
            // disabled={disableBtn}
            onPress={() => this.props.navigation.navigate('List')}>
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
