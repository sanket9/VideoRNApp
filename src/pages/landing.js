import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity} from 'react-native'
import Modal from "react-native-modal";
var styles = require('../styles/style')

import Modeallist from '../component/modeallist'

export default class landing extends Component {
    constructor() {
        super()

        this.state = {
            sortmodal: false
        }
    }

    /* Sort Code */
    setSortVisible(visible) {
        this.setState({ sortmodal: visible });
    }

    sortmodal() {
        return (
            <Modal animationIn={"slideInUp"}
                style={{ margin: 0, justifyContent: 'flex-end'}}
                isVisible={this.state.sortmodal}
                onSwipeComplete={() => this.setSortVisible(false)}
                swipeDirection="down"
                onRequestClose={() =>
                    this.setSortVisible(false)
                }>
                <View style={styles.modalcontainer}>
                    <Text style={styles.modalheading}>Which experience you are looking to share?</Text>

                    {this.modalListing()}
                
                </View>
            </Modal>
        )
    }

    gotoCTC = () =>{
        this.setSortVisible(false)
        this.props.navigation.navigate('ExpertCTC')
    }

    modalListing = () => {
        return(
            <View style={{marginTop: 15}}>
                        
                <Modeallist company="Mastercard" role="User Experience Design - Technology" onPress={() => this.gotoCTC()}/>
                <Modeallist company="Microoft" role="Head of Design - Technology" onPress={() => this.gotoCTC()}/>
                <Modeallist company="IIT Bombay" role="User Experience Design - Technology" onPress={() => this.gotoCTC()} />
            </View>
        )
    }


    render() {
        return (
            <View style={[styles.container, localstyles.container]}>
                <TouchableOpacity style={styles.expertBtn} onPress={() => this.setSortVisible(true)}>
                    <Text style={{fontFamily:'Poppins-Bold', color: '#fff', textAlign: 'center'}}>Become Expert </Text>
                </TouchableOpacity>

                {
                    this.state.sortmodal ?
                    (
                        <View style={{justifyContent: 'flex-end'}}>
                            {this.sortmodal()}
                        </View>
                    )
                     : null
                }
            </View>

        )
    }
}

const localstyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
   
})
