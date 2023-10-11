import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from '../components/Login'
import tw from 'twrnc';

const LoginScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white`, {flex:1}]}>
        <Login/>
    </SafeAreaView>
  )
}

export default LoginScreen



