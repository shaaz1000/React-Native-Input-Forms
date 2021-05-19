import React from "react"
import Tab1Screen from "./source/screens/Tab1Screen"
import Tab2Screen from "./source/screens/Tab2Screen"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tabs = createBottomTabNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          showLabel:false,
          activeTintColor:"white",
          style:{
            bottom:10,
            backgroundColor:"#264653",
            borderRadius:20,
            marginHorizontal:10,
            
          }
        }}
      
      >
        <Tabs.Screen 
          name="Form1" 
          component={Tab1Screen}
          options={{
            tabBarIcon:({ color, size }) => (
              <MaterialCommunityIcons name="format-align-justify" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="Form2" 
          component={Tab2Screen}
          options={{
            tabBarIcon:({ color, size }) => (
              <MaterialCommunityIcons name="format-align-justify" color={color} size={size} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App