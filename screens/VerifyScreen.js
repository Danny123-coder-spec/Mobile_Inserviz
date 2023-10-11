import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Verify from '../components/checkmail/Verify'

const VerifyScreen = () => {
  return (
    <SafeAreaView>
      <Verify/>
    </SafeAreaView>
  )
}

export default VerifyScreen
