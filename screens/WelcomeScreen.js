import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Welcome from '../components/Welcome/Welcome'

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <Welcome/>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})