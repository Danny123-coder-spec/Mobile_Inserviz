import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NewEmail from '../components/Email/NewEmail'

const NewEmailScreen = () => {
  return (
    <SafeAreaView>
      <NewEmail/>
    </SafeAreaView>
  )
}

export default NewEmailScreen