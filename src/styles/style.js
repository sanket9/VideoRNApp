import React, { Component } from 'react'
import { StyleSheet  } from 'react-native'

module.exports = StyleSheet.create({
    container: {
        flex:1
    },
    header: {
        paddingVertical: 15, width: '100%',
        paddingHorizontal: 25, borderBottomColor: '#979797', 
        borderBottomWidth: 1, flexDirection: 'row',
    },
    headerTextContainer: {alignItems: 'center', width: '100%', justifyContent: 'center'},
    contentMainText : {
        fontFamily: "Poppins-Bold",
        fontSize: 22,
        fontWeight: "800",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d1d1d1',
        paddingLeft: 7
    },
    searchIcon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        height: 68,
    },
    inputNote: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        fontWeight: "500",
        color: "#666666"
    },
    pickerStyle: {marginTop: 10, borderWidth: 1, 
        borderColor: '#3280dc',
        width: 100, borderRadius:24,
        shadowColor: "rgba(0, 0, 0, 0.14)",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 4
    },
    footerBtn: {
        width: '97%', height: 54,borderRadius: 15, backgroundColor: '#3280dc', justifyContent: 'center'
    },
    disabled: {
        opacity: 0.3
    },
    expertBtn: {
        width: '70%', backgroundColor:'#3280dc', borderWidth: 1, borderColor: '#3280dc', borderRadius: 8, padding: 12
    },
    modalheading: {
        fontFamily: "Poppins-Bold", fontSize: 24, fontWeight: "800",
    },
    modalcontainer:{
        height: '60%', borderTopLeftRadius: 36, borderTopRightRadius: 36, 
                    backgroundColor: "#f7f6f6", paddingHorizontal: 30, paddingVertical: 29 
    }
})

// export default styles;