import { Text, ScrollView, TouchableOpacity,View,  TextInput, Image} from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import tw from 'twrnc'
import styles from './verify.style'
import {COLORS, SIZES} from '../../assets/constants'

const Verify = () => {

const navigation = useNavigation();
    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Icon
          name='chevron-left'
          size={30}
          color='white'
          />
        </TouchableOpacity>
        <View>
          <Image source={require('../../assets/constants/checkmail.png')} style={styles.image}/>
        </View>
        <Text style={styles.check}>Check your mail.</Text>
        <Text style={styles.enter}>Please enter the verification code we sent.</Text>
        <View style={styles.digits}>
          <TextInput
          style={styles.inputDigit}
            maxLength={1}
            keyboardType="numeric"
            value={digit1}
            onChangeText={setDigit1}
          />
          <TextInput
          style={styles.inputDigit}
            maxLength={1}
            keyboardType="numeric"
            value={digit2}
            onChangeText={setDigit2}
          />
          <TextInput
          style={styles.inputDigit}
            maxLength={1}
            keyboardType="numeric"
            value={digit3}
            onChangeText={setDigit3}
          />
          <TextInput
          style={styles.inputDigit}
            maxLength={1}
            keyboardType="numeric"
            value={digit4}
            onChangeText={setDigit4}
          />
        </View>
        <TouchableOpacity style={styles.verify} onPress={() => {}}>
            <Text style={styles.verifyTxt}>Verify</Text>
         </TouchableOpacity>
         <View style={[tw`p-4`,styles.edit]}>
            <Text style={styles.recode}>Didn't receive code?</Text>
            <Text style={styles.resend}>Resend</Text>
          </View>
          <TouchableOpacity style={[tw`ml-90`, styles.back]} onPress={() => navigation.navigate('newEmail')}>
            <Icon2
              name='chevron-right'
              size={30}
              color='white'
              />
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Verify