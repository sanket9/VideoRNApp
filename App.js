import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Camera from './src/pages/camera'
import List from './src/pages/listConect'
import Landing from './src/pages/landing'
import EcpertCTC from './src/pages/expertctc'
import BankDetails from './src/pages/bankdetails'
export default class App extends Component {
  constructor() {
    super()
    
  }
  
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Camera" component={Camera} 
            options= {{
              headerShown: false
            }}
          />
          <Stack.Screen name="List" component={List} 
           options= {{
            headerShown: false
          }}/>
          <Stack.Screen name="Landing" component={Landing} 
           options= {{
            headerShown: false
          }}/>
          <Stack.Screen name="ExpertCTC" component={EcpertCTC} 
           options= {{
            headerShown: false
          }}/>
          <Stack.Screen name="BankDetails" component={BankDetails} 
           options= {{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
