import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';

var StyleSheet = require('../styles/style')
export default class header extends Component {
    render() {
        let showback = this.props.showback ? true : false
        let showheader = this.props.headerText 
        return (
            <View style={StyleSheet.header}>
                {
                    showback ?
                     <TouchableOpacity onPress={this.props.onPress}>
                        <IonIcon name='md-arrow-back' size={25} color="#000" />
                    </TouchableOpacity> : null
                }
                
                <View style={StyleSheet.headerTextContainer}>

                    <Text style={{fontFamily: "Poppins-Regular",fontSize: 15,}}> {showheader}</Text>
                </View>

            </View>
        )
    }
}

// const styles = StyleSheet.create({})
