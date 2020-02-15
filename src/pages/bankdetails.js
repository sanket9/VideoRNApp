import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView, Picker  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
var styles = require('../styles/style')
import Header from '../component/header'


export default class bankdetails extends Component {
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
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <ScrollView style={{marginTop: '10%', paddingHorizontal: 20}}>
                    <View>
                        <Text style={styles.contentMainText}>Give your Bank details</Text>
                    </View>
                    <View>
                        <View style={{marginTop: '10%'}}>
                            <View style={{flexDirection:'row'}}> 
                                <Text style={{fontFamily: "Poppins-Bold", fontSize: 18, fontWeight: "500", fontStyle: "normal",  }}>Your last drawn CTC?</Text>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row'}}>


                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: '10%',}}>
                            <View style={{flexDirection:'row'}}> 
                                <Text style={{fontFamily: "Poppins-Bold", fontSize: 18, fontWeight: "500", fontStyle: "normal",  }}>Enter your consultation fee</Text>
                            </View>
                            <View style={[styles.searchSection]}>
                                {/* <IonIcon style={styles.searchIcon} name="ios-search" size={40} color="#000"/> */}
                                <TextInput
                                    keyboardType='numeric'
                                    style={styles.input}
                                    placeholder=". . . . ."
                                    onChangeText={(text) => {this.setState({consultationFee: text})}}
                                    // underlineColorAndroid="transparent"
                                />
                                {/* <Text style={styles.inputNote}>Per Annum</Text> */}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
