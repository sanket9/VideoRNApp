import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FlatListRow from '../component/FlatListRow';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../component/header';
import DashbordHeader from '../component/dashbordheader';
import Status from '../component/dashbordStatus';
import {NavigationEvents, withNavigation} from 'react-navigation';

import axios from 'axios';
class listConnect extends Component {
  constructor() {
    super();
    this.state = {
      curindx: '0',
      videoListData: [],
      savedList: [],
      companyName: '',
      ecprience: '',
      profileType: '',
      loc: '',
    };
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', payload => {
      console.log('>>>>>>>>hi');
      this.fetchList();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener;
  }

  fetchList = () => {
    axios
      .post(
        'http://ec2-3-6-243-138.ap-south-1.compute.amazonaws.com:3000/api/video/draft-video/list',
        {
          experienceTypeId: '5e47b52adcd19404cd5965e4',
        },
      )
      .then(data => {
        this.setState({
          companyName: data.data.data.company.name,
          // companyLogo: data.data.data.company.image,
          ecprience: `${data.data.data.designation.name} - ${data.data.data.sector.name}`,
          profileType: data.data.data.profileType.name,
          loc: `${data.data.data.city.name}, ${data.data.data.country.name}`,
          status: data.data.data.approved,
          savedList: data.data.data.videoList,
          videoListData: data.data.data.videoLink,
          // curindx:
          //   parseInt(this.state.videoListData.length) -
          //   parseInt(this.state.savedList.length),
          curindx: 3,
        });
        console.log(data.data, 'in video list');
        console.log(
          parseInt(this.state.videoListData.length) -
            parseInt(this.state.savedList.length),
          'currenti',
        );
      })
      .catch(e => console.log(e, 'err'));
  };
  async refreshIndex() {
    let local = await AsyncStorage.getItem('@local_indx');
    this.setState({
      curindx: local,
    });
  }

  renderHeader = () => {
    return (
      <Header
        showback={false}
        headerText="EXPLORE DASHBOARD"
        onPress={() => this.props.navigation.goBack()}
      />
    );
  };
  renderDashbordHeader = () => {
    return (
      <DashbordHeader
        companyName={this.state.companyName}
        ecprience={this.state.ecprience}
        profileType={this.state.profileType}
        loc={this.state.loc}
        showback={false}
        headerText="EXPLORE DASHBOARD"
      />
    );
  };

  renderStatus = () => {
    return <Status approved={this.state.status} />;
  };
  rendervideoCout = () => {
    return parseInt(this.state.videoListData.length) -
      parseInt(this.state.savedList.length) >
      0 ? (
      <>
        <Text style={styles.aswtext}>Answered Videos</Text>
        <Text
          style={{
            color: '#ff2650',
            fontFamily: 'Poppins-Regular',
            fontSize: 11,
            paddingTop: 4,
          }}>
          `$
          {parseInt(this.state.videoListData.length) -
            parseInt(this.state.savedList.length)}{' '}
          More Videos are pending before submitting`
        </Text>
      </>
    ) : null;
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{marginBottom: 20}}>
          {this.renderStatus()}
          {this.renderDashbordHeader()}

          <View
            style={{
              marginVertical: 15,
              paddingLeft: 20,
            }}>
            {this.rendervideoCout()}
          </View>

          <FlatList
            data={this.state.videoListData}
            renderItem={({item, index}) => (
              <FlatListRow
                id={index + 1}
                // finishTime={item.finishTime}
                title={item.question}
                currenti={this.state.curindx}
              />
            )}
            keyExtractor={item => item._id.toString()}
          />
        </ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            style={styles.rcdbtn}
            onPress={() =>
              this.props.navigation.navigate('Camera', {
                data: JSON.stringify(
                  this.state.videoListData[this.state.curindx],
                ),
              })
            }>
            <FontIcon
              name="video"
              size={13}
              color="white"
              style={{
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                fontWeight: '800',
                fontStyle: 'normal',
              }}>
              Continue Record
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  aswtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.2,
    color: '#333333',
  },
  rcdbtn: {
    alignItems: 'center',
    backgroundColor: '#ff2650',
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default listConnect;
