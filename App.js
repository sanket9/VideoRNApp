import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Camera from './src/pages/camera'
import List from './src/pages/listConect'

export default class App extends Component {
  constructor() {
    super()
    
  }
  
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="Camera" component={Camera} 
            options= {{
              headerShown: false
            }}
          />
          <Stack.Screen name="List" component={List} 
           options= {{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
