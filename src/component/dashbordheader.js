import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class dashbordheader extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.header}>
          <View style={styles.brandIconContainer}>
            <Image
              style={{width: 35, height: 35, resizeMode: 'center'}}
              source={{
                uri: this.props.companyLogo,
              }}
            />
          </View>
        </View>
        <View style={{paddingTop: 30, flex: 2}}>
          <Text style={{fontFamily: 'Poppins-Bold'}}>
            {this.props.companyName}
          </Text>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 13}}>
            {this.props.ecprience}
          </Text>
          <Text style={{color: 'grey'}}>{this.props.profileType}</Text>
          <Text
            style={{
              marginTop: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 13,
              color: '#6d727d',
            }}>
            Sep 2018 - Present 5 mos
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              alignItems: 'center',
            }}>
            <Icon
              name="map-marker"
              size={13}
              color="rgba(0,0,0,0.5)"
              style={{
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                color: '#9699a1',
              }}>
              {this.props.loc}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 35,
    alignItems: 'center',
    flex: 1,
  },
  brandIconContainer: {
    width: 55,
    height: 55,
    marginLeft: -20,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
