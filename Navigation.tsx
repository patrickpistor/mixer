import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "./screens/Login/"
import Home from "./screens/Home/"

export type RootStackParamList = {
  Login: undefined
  Home: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        {/* <RootStack.Screen
          name="Home"
          component={Home}
          // options={{ headerShown: false }}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
