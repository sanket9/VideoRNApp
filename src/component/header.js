import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';

var StyleSheet = require('../styles/style')
export default class header extends Component {
    render() {
        return (
            <View style={StyleSheet.header}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <IonIcon name='md-arrow-back' size={25} color="#000" />
                </TouchableOpacity>
                <View style={StyleSheet.headerTextContainer}>

                    <Text style={{fontFamily: "Poppins-Regular",fontSize: 15,}}> Become Expert </Text>
                </View>

            </View>
        )
    }
}

// const styles = StyleSheet.create({})
