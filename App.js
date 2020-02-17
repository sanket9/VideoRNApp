import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Camera from './src/pages/camera';
import List from './src/pages/listConect';
import Landing from './src/pages/landing';
import EcpertCTC from './src/pages/expertctc';
import BankDetails from './src/pages/bankdetails';
import axios from 'axios';
import isEmpty from './src/utility/isEmpty';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMjE4NzdjMWI4ZWViMjc2ZGQ3MzZmYyIsImlhdCI6MTU3OTc2NDc5MiwiZXhwIjoxNjExMzAwNzkyfQ.Dq5eNKFtFpOtlz-yDeONauWFXa85JQ95lfJcHv25ti0';
    axios.defaults.headers.common['Authorization'] = token;

    this.fetchData();
  }

  fetchData = () => {
    axios
      .post(
        'http://ec2-3-6-243-138.ap-south-1.compute.amazonaws.com:3000/api/user/profile/details',
        {
          mentorId: '5e298d3fbacbc44045008971',
        },
      )
      .then(data => console.log(data.data))
      .catch(e => console.log(e));
  };

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ExpertCTC"
            component={EcpertCTC}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BankDetails"
            component={BankDetails}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
