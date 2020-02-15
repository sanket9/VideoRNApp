import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class modealList extends Component {
    render() {
        return (
            <TouchableOpacity elevation={5} style={styles.listItem} onPress={this.props.onPress}>
                <View style={{ flexDirection: 'column', width: '93%'}}>
                    <Text style={styles.companyText}>{this.props.company}</Text>
                    <Text style={styles.roleText}>{this.props.role}</Text>
                </View>
                <View style={{justifyContent: 'center', }}>

                    <Icon name='chevron-right' size={30}  color='#6d727d' />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',  
        backgroundColor: "#ffffff",
         borderRadius: 12, 
         padding: 20, 
         shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        marginBottom: 12
    },
    companyText: {
        fontFamily: "Poppins-Bold", fontSize: 15, fontWeight: "500", fontStyle: "normal"
    },
    roleText: {
        fontFamily: "Poppins-Regular", fontSize: 13, fontWeight: "500", fontStyle: "normal", color: "#6d727d"
    }
})
