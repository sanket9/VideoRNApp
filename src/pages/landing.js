import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
var styles = require('../styles/style');
import axios from 'axios';
import Modeallist from '../component/modeallist';

export default class landing extends Component {
  constructor() {
    super();

    this.state = {
      sortmodal: false,
      apiData: null,
      modalData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .post(
        'http://ec2-3-6-243-138.ap-south-1.compute.amazonaws.com:3000/api/user/profile/details',
        {
          mentorId: '5e42592bf7cc1610e12be2fe',
        },
      )
      .then(data => {
        console.log(data);

        let modalDataArr = [];

        data.data.data[0].education.length > 0 &&
          data.data.data[0].education.forEach(element => {
            modalDataArr.push({
              title: element.college_name[0].name,
              subTitle: element.program[0].name,
              subTitle2: element.department[0].name,
            });
          });
        data.data.data[0].profession.length > 0 &&
          data.data.data[0].profession.forEach(element => {
            modalDataArr.push({
              title: element.company[0].name,
              subTitle: element.designation[0].name,
              subTitle2: element.sector[0].name,
            });
          });

        console.log(modalDataArr);

        this.setState({
          apiData: data,
          modalData: modalDataArr,
        });
      })
      .catch(e => console.log(e));
  };

  /* Sort Code */
  setSortVisible(visible) {
    this.setState({sortmodal: visible});
  }

  sortmodal() {
    return (
      <Modal
        animationIn={'slideInUp'}
        style={{margin: 0, justifyContent: 'flex-end'}}
        isVisible={this.state.sortmodal}
        onSwipeComplete={() => this.setSortVisible(false)}
        swipeDirection="down"
        onRequestClose={() => this.setSortVisible(false)}>
        <View style={styles.modalcontainer}>
          <Text style={styles.modalheading}>
            Which experience you are looking to share?
          </Text>

          {this.state.modalData.length > 0 && this.modalListing()}
        </View>
      </Modal>
    );
  }

  gotoCTC = () => {
    this.setSortVisible(false);
    this.props.navigation.navigate('ExpertCTC');
  };

  modalListing = () => {
    return this.state.modalData.map((elm, i) => {
      return (
        <View style={{marginTop: 15}} key={i}>
          <Modeallist
            company={elm.title}
            role={`${elm.subTitle} - ${elm.subTitle2}`}
            onPress={() => this.gotoCTC()}
          />
        </View>
      );
    });
  };

  render() {
    return (
      <View style={[styles.container, localstyles.container]}>
        <TouchableOpacity
          style={styles.expertBtn}
          onPress={() => this.setSortVisible(true)}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: '#fff',
              textAlign: 'center',
            }}>
            Become Expert{' '}
          </Text>
        </TouchableOpacity>

        {this.state.sortmodal ? (
          <View style={{justifyContent: 'flex-end'}}>{this.sortmodal()}</View>
        ) : null}
      </View>
    );
  }
}

const localstyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
