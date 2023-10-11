import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Signup from '../components/signup/SignUp'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
  return (
    <SafeAreaView>
        <Signup/>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})