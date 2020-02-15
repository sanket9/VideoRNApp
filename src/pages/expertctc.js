import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView, Picker  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
var styles = require('../styles/style')
import Header from '../component/header'


export default class expertctc extends Component {
    constructor() {
        super() ;
        this.state= {
            consultationFee: ''
        }
    }

    renderHeader = () =>{
        return(
            <Header onPress={() => this.props.navigation.goBack()}/>
        )
    }
    render() {
        let disableBtn = this.state.consultationFee == '' ? true: false;
        
        return (
            <View style={styles.container}>

                {this.renderHeader()}
                <ScrollView style={{marginTop: '10%', paddingHorizontal: 20}}>
                    <View>
                        <Text style={styles.contentMainText}>Find out how much you should charge for consultation</Text>
                    </View>
                    <View style={styles.pickerStyle}>
                        <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 100, color: '#3280dc'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                            <Picker.Item label="INR" value="java" />
                            <Picker.Item label="Doller" value="js" />
                        </Picker>
                    </View>
                    <View>
                        <View style={{marginTop: '10%'}}>
                            <View style={{flexDirection:'row'}}> 
                                <Text style={{fontFamily: "Poppins-Bold", fontSize: 18, fontWeight: "500", fontStyle: "normal",  }}>Your last drawn CTC?</Text>
                            </View>
                            <View style={styles.searchSection}>
                                <IonIcon style={styles.searchIcon} name="ios-search" size={40} color="#000"/>
                                <TextInput
                                    keyboardType='numeric'
                                    style={styles.input}
                                    placeholder="0000000"
                                    onChangeText={(text) => {this.setState({ctc: parseInt(text).toLocaleString('en-IN')})}}
                                    // underlineColorAndroid="transparent"
                                />
                                <Text style={styles.inputNote}>Per Annum</Text>
                            </View>
                        </View>
                        <View style={{marginTop: '10%'}}>
                            <View style={{flexDirection:'row'}}> 
                                <Text style={{fontFamily: "Poppins-Bold", fontSize: 18, fontWeight: "500", fontStyle: "normal",  }}>Enter your consultation fee</Text>
                            </View>
                            <View style={styles.searchSection}>
                                <IonIcon style={styles.searchIcon} name="ios-search" size={40} color="#000"/>
                                <TextInput
                                    keyboardType='numeric'
                                    style={styles.input}
                                    placeholder="000"
                                    onChangeText={(text) => {this.setState({consultationFee: text})}}
                                    // underlineColorAndroid="transparent"
                                />
                                <Text style={styles.inputNote}>Per Annum</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{padding: 20, alignItems: 'center'}}>
                    <TouchableOpacity style={[styles.footerBtn, disableBtn ? styles.disabled : null]} disabled={disableBtn} onPress={() => this.props.navigation.navigate('BankDetails')}>
                        <Text style={{textAlign: 'center', fontFamily: "Poppins-Regular", fontSize: 20,  color: "#ecf3fb"}}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
