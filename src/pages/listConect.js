import React, { Component } from 'react'
import { Text, View, FlatList, Button, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native'
import FlatListRow from '../component/FlatListRow'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationEvents } from 'react-navigation';

export default class listConect extends Component {
  constructor() {
    super()
    this.state = {
      curindx: '0'
    }
  }
  async componentDidMount() {
    let local = await AsyncStorage.getItem('@local_indx');
    if (local == null) {

      AsyncStorage.setItem('@local_indx', "0")
    } else {
      this.setState({
        curindx: local
      })
    }
    console.log("local>>>>>>", local);
  }
  async refreshIndex() {
    let local = await AsyncStorage.getItem('@local_indx');
    this.setState({
      curindx: local
    })
  }
  render() {

    const data = [
      {
        id: 1,
        title: 'Introduction',
        finishTime: '2:14 PM',
        scriptText: "Hi this is <first name>. I'll be sharing my experience with <org>, so ask me any questions related to the same :)"
      },
      {
        id: 2,
        title: 'No Answer',
        finishTime: '2:15 PM',
        scriptText: "We are here to discuss my experience at <org>, you can find the answers to these online	"

      },
      {
        id: 3,
        title: 'No Answer',
        finishTime: '2:09 PM',
        scriptText: "Let's stick to the topic and get answers to questions which were related to the <org>. You can get these answers on a direct consulting call with me, so go ahead and press the consult button on my profile	"
      },
      {
        id: 4,
        title: 'Last Advice',
        finishTime: '2:09 PM',
        scriptText: "So keep calm <give a relavent trick for this particular company - eg: keep coding!>. If you follow this I'm sure you'll have a higher chances of getting into <org>!"
      },
      {
        id: 5,
        title: 'Silence',
        finishTime: '2:09 PM',
        scriptText: "A 15 sec video of you being ideal - not speaking - and listening to the questions being asked to you"

      },
      {
        id: 6,
        title: 'How did you prepare your resume to get shortlisted for <org>?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 7,
        title: 'What research did you do about the <org>?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 8,
        title: 'Before your interview what were the other rounds of shortlist? Mention tips related to that',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 9,
        title: 'Your preparation tips for <org>?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 10,
        title: 'First Question Asked In the Interview?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 11,
        title: 'Second Question Asked In the Interview?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 12,
        title: 'Third Question Asked In the Interview?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 13,
        title: 'Fourth Question Asked In the Interview?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 14,
        title: 'Fifth Question Asked In the Interview?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 15,
        title: 'Sixth Question Asked In the Interview?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
      {
        id: 16,
        title: 'Seventh Question Asked In the Interview?',
        scriptText: "",
        finishTime: '2:14 PM',
      },
    ]
    return (
      <View style={styles.container}>
        <View style={{
          // backgroundColor:'green',
          flexDirection: 'row'
        }}>
          <View style={styles.header}>
            <View style={styles.brandIconContainer}>
              <Image
                style={{ width: 30, height: 30, resizeMode: 'center' }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBNzhbjF2YteWJQSypQz4opvBrB-Wot5LTJrVkTN-Gc_ER-F1-' }}
              />
            </View>
          </View>
          <View style={{
            // backgroundColor:'blue',
            paddingTop: 20,
            flex: 2,
            padding: 8
          }}>
            <Text style={{
              fontFamily: 'Poppins-Bold'
            }}>Microsoft Corporation</Text>
            <Text style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 13,
            }}>Head of Design - Technology</Text>
            <Text style={{
              color: 'grey'
            }}>208</Text>
            <Text style={{
              marginTop: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 13,
              color: "#6d727d"
            }}>Sep 2018 - Present 5 mos</Text>
            <View style={{
              flexDirection: 'row',
              marginVertical: 5,
              alignItems: 'center'
            }}>
              <Icon name="map-marker" size={13} color='rgba(0,0,0,0.5)' style={{
                marginRight: 10
              }} />
              <Text style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                color: "#9699a1",
                color: 'rgba(0,0,0,0.6)'
              }}>California, USA</Text>
            </View>
          </View>
        </View>
        <View style={{
          marginVertical: 20,
          paddingLeft: 20
        }}>
          <Text style={styles.aswtext}>Answered Videos</Text>
          <Text style={{
            color: '#ff2650',
            fontFamily: "Poppins-Regular",
            fontSize: 11,
            paddingTop: 4
          }}>8 More Videos are pending before submitting</Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => <FlatListRow id={item.id} finishTime={item.finishTime} title={item.title} currenti={this.state.curindx} />}
          keyExtractor={item => item.id.toString()}
        />
        <View style={{
          paddingHorizontal: 20
        }}>
          <TouchableOpacity style={styles.rcdbtn}
            onPress={() => this.props.navigation.navigate('Camera', {
              data: JSON.stringify(data[this.state.curindx])
            })}
          >
            <FontIcon name="video" size={13} color='white' style={{
              marginRight: 10
            }} />
            <Text style={{
              color: 'white',
              fontFamily: "Poppins-Regular",
              fontSize: 15,
              fontWeight: "800",
              fontStyle: "normal",
            }}>Continue Record</Text>
          </TouchableOpacity>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    // backgroundColor:'red',
    // justifyContent:'center',
    paddingTop: 35,
    alignItems: 'center',
    flex: 1
  },
  brandIconContainer: {
    width: 50,
    height: 50,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  aswtext: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.2,
    color: "#333333"

  },
  rcdbtn: {
    alignItems: 'center',
    backgroundColor: '#ff2650',
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: "center"
  }
})
